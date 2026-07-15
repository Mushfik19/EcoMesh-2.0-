import type {
  CurrentWeather,
  SevenDayForecastItem,
  WeatherAlertItem,
  WeatherHistoryRecord,
  WeatherIntelligence,
  WeatherMapPoint,
  WeatherTrendPoint,
} from "@/features/climate-intelligence/WeatherTypes";
import weatherRecordsJson from "@/data/json/weather-records-365.json";

const history = weatherRecordsJson as WeatherHistoryRecord[];

const lastHistorySlice = history.slice(-14);

function toTrendLabel(date: string) {
  const formatted = new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  return formatted;
}

function createHourlyForecast(current: CurrentWeather) {
  return Array.from({ length: 24 }, (_, index) => {
    const wave = Math.sin(index / 4) * 2.4;
    const windWave = Math.cos(index / 3.2) * 5.3;
    const temp = current.tempC - 1.8 + wave + index * 0.04;

    return {
      time: `${String(index).padStart(2, "0")}:00`,
      tempC: Number(temp.toFixed(1)),
      rainChance: Math.min(96, Math.max(10, Math.round(current.precipitationMm * 2.1 + index * 2.7 + wave * 3))),
      windKph: Number((current.windKph + windWave + index * 0.6).toFixed(1)),
      humidity: Math.min(98, Math.round(current.humidity + Math.sin(index / 5) * 3 + index * 0.2)),
      condition: index < 6 ? "Pre-dawn showers" : index < 12 ? "Building monsoon cloud" : index < 18 ? "Heavy rain pulses" : "Cloud breaks",
    };
  });
}

function createDailyForecast(): SevenDayForecastItem[] {
  return lastHistorySlice.slice(-7).map((record, index) => {
    const date = new Date(record.date);
    date.setDate(date.getDate() + index);

    return {
      date: date.toISOString().slice(0, 10),
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      condition:
        record.riskLevel === "critical"
          ? "Cyclone watch"
          : record.riskLevel === "high"
            ? "Heavy rain"
            : record.riskLevel === "moderate"
              ? "Cloudy intervals"
              : "Steady coastal weather",
      highC: Number((record.temperatureC + 4.4).toFixed(1)),
      lowC: Number((record.temperatureC - 2.2).toFixed(1)),
      rainChance: Math.min(94, Math.round(record.rainfallMm * 5.5 + index * 4)),
      windKph: Number((record.windKph + index * 1.2).toFixed(1)),
      sunrise: "05:18",
      sunset: "18:42",
    };
  });
}

function createTrends(): WeatherTrendPoint[] {
  return lastHistorySlice.map((record) => ({
    humidity: Number(record.humidityPercent.toFixed(1)),
    label: toTrendLabel(record.date),
    pressure: Number(record.pressureHpa.toFixed(1)),
    rainfall: Number(record.rainfallMm.toFixed(1)),
    temperature: Number(record.temperatureC.toFixed(1)),
    wind: Number(record.windKph.toFixed(1)),
  }));
}

export const mockWeatherData: WeatherIntelligence = {
  source: "WeatherAPI.com ready mock feed",
  updatedAt: "13 Jul 2026, 16:42 BDT",
  location: {
    name: "Khulna Coastal Belt",
    region: "Bangladesh Delta",
    country: "Bangladesh",
    lat: 22.8456,
    lon: 89.5403,
    localtime: "2026-07-13 17:24",
    timezone: "Asia/Dhaka",
  },
  current: {
    tempC: 31.6,
    feelsLikeC: 38.4,
    condition: "Heavy monsoon clouds",
    humidity: 86,
    pressureHpa: 1001,
    windKph: 39,
    windDirection: "SSE",
    precipitationMm: 24.8,
    uvIndex: 4,
    visibilityKm: 7.2,
    cloudCover: 92,
    dewPointC: 28.3,
  },
  marine: {
    tideMeters: 2.18,
    waveHeightMeters: 1.7,
    swellMeters: 1.2,
    seaTempC: 30.1,
    currentSpeedKph: 8.4,
    advisory: "Elevated tide window with rough nearshore conditions",
  },
  hourly: createHourlyForecast({
    tempC: 31.6,
    feelsLikeC: 38.4,
    condition: "Heavy monsoon clouds",
    humidity: 86,
    pressureHpa: 1001,
    windKph: 39,
    windDirection: "SSE",
    precipitationMm: 24.8,
    uvIndex: 4,
    visibilityKm: 7.2,
    cloudCover: 92,
    dewPointC: 28.3,
  }),
  daily: createDailyForecast(),
  cyclone: {
    score: 67,
    category: "Watch",
    pressureDropMb: 7,
    windShear: "Moderate",
    bearing: "Northwest toward coastal belt",
    etaHours: 36,
  },
  alerts: [
    {
      id: "WX-9001",
      severity: "critical",
      title: "Intense rainfall band",
      area: "Satkhira, Koyra, Dacope",
      effective: "Next 6 hours",
      instruction: "Increase sensor sampling and prepare local drainage response.",
    },
    {
      id: "WX-9002",
      severity: "warning",
      title: "Marine wind advisory",
      area: "Nearshore Bay routes",
      effective: "Evening window",
      instruction: "Keep boat routing close to shelters and avoid exposed crossings.",
    },
    {
      id: "WX-9003",
      severity: "info",
      title: "High humidity persistence",
      area: "Khulna coastal belt",
      effective: "24 hours",
      instruction: "Monitor battery performance and enclosure condensation risk.",
    },
  ] satisfies WeatherAlertItem[],
  mapPoints: [
    { id: "WX-ST-01", label: "Khulna Station", type: "station", lat: 22.8456, lon: 89.5403, value: "31.6 C" },
    { id: "WX-RN-02", label: "Koyra Rain Cell", type: "rain", lat: 22.3818, lon: 89.2323, value: "86%" },
    { id: "WX-WD-03", label: "Barguna Wind Field", type: "wind", lat: 22.1585, lon: 90.1267, value: "44 kph" },
    { id: "WX-MR-04", label: "Nearshore Marine", type: "marine", lat: 21.9424, lon: 89.8842, value: "1.7 m waves" },
    { id: "WX-CY-05", label: "Cyclone Watch Cell", type: "cyclone", lat: 21.76, lon: 89.72, value: "67 risk" },
  ] satisfies WeatherMapPoint[],
  trends: createTrends(),
  recommendation: {
    headline: "Maintain elevated readiness for rain-driven flooding and marine disruption.",
    confidence: 88,
    actions: [
      "Increase rainfall, tide, and gateway telemetry sampling for the next six hours.",
      "Keep boats inside protected routes until the marine wind advisory clears.",
      "Pre-position alerts for Satkhira and Koyra villages with shelter instructions.",
      "Watch pressure decline and wind acceleration for cyclone escalation.",
    ],
  },
  history,
};
