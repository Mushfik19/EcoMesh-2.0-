import type { LucideIcon } from "lucide-react";

export type WeatherSeverity = "info" | "warning" | "critical";
export type WeatherConditionTone = "calm" | "watch" | "warning" | "critical";

export interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
  timezone: string;
}

export interface CurrentWeather {
  tempC: number;
  feelsLikeC: number;
  condition: string;
  humidity: number;
  pressureHpa: number;
  windKph: number;
  windDirection: string;
  precipitationMm: number;
  uvIndex: number;
  visibilityKm: number;
  cloudCover: number;
  dewPointC: number;
}

export interface HourlyForecastItem {
  time: string;
  tempC: number;
  rainChance: number;
  windKph: number;
  humidity: number;
  condition: string;
}

export interface SevenDayForecastItem {
  date: string;
  day: string;
  condition: string;
  highC: number;
  lowC: number;
  rainChance: number;
  windKph: number;
  sunrise: string;
  sunset: string;
}

export interface MarineWeather {
  tideMeters: number;
  waveHeightMeters: number;
  swellMeters: number;
  seaTempC: number;
  currentSpeedKph: number;
  advisory: string;
}

export interface CycloneRisk {
  score: number;
  category: string;
  pressureDropMb: number;
  windShear: string;
  bearing: string;
  etaHours: number;
}

export interface WeatherAlertItem {
  id: string;
  severity: WeatherSeverity;
  title: string;
  area: string;
  effective: string;
  instruction: string;
}

export interface WeatherTrendPoint {
  label: string;
  temperature: number;
  rainfall: number;
  wind: number;
  pressure: number;
  humidity: number;
}

export interface WeatherRecommendation {
  headline: string;
  confidence: number;
  actions: string[];
}

export interface WeatherMapPoint {
  id: string;
  label: string;
  type: "station" | "rain" | "wind" | "marine" | "cyclone";
  lat: number;
  lon: number;
  value: string;
}

export interface WeatherHistoryRecord {
  date: string;
  temperatureC: number;
  humidityPercent: number;
  pressureHpa: number;
  windKph: number;
  rainfallMm: number;
  tideMeters: number;
  salinityPpt: number;
  riskLevel: string;
}

export interface WeatherIntelligence {
  source: string;
  updatedAt: string;
  location: WeatherLocation;
  current: CurrentWeather;
  marine: MarineWeather;
  hourly: HourlyForecastItem[];
  daily: SevenDayForecastItem[];
  cyclone: CycloneRisk;
  alerts: WeatherAlertItem[];
  mapPoints: WeatherMapPoint[];
  trends: WeatherTrendPoint[];
  recommendation: WeatherRecommendation;
  history: WeatherHistoryRecord[];
}

export interface WeatherApiRequestOptions {
  query: string;
  days?: number;
  lang?: string;
  alerts?: boolean;
  aqi?: boolean;
}

export interface WeatherApiCondition {
  text: string;
  icon?: string;
  code?: number;
}

export interface WeatherApiLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
  tz_id?: string;
}

export interface WeatherApiCurrent {
  temp_c: number;
  feelslike_c: number;
  condition: WeatherApiCondition;
  humidity: number;
  pressure_mb: number;
  wind_kph: number;
  wind_dir: string;
  precip_mm: number;
  uv: number;
  vis_km: number;
  cloud: number;
}

export interface WeatherApiForecastHour {
  time: string;
  temp_c: number;
  chance_of_rain: number;
  wind_kph: number;
  humidity: number;
  condition: WeatherApiCondition;
}

export interface WeatherApiForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    daily_chance_of_rain: number;
    maxwind_kph: number;
    condition: WeatherApiCondition;
    astro?: {
      sunrise: string;
      sunset: string;
    };
  };
  hour: WeatherApiForecastHour[];
}

export interface WeatherApiAlert {
  headline: string;
  msgtype?: string;
  severity?: string;
  areas?: string;
  certainty?: string;
  event?: string;
  instruction?: string;
}

export interface WeatherApiForecastResponse {
  location: WeatherApiLocation;
  current: WeatherApiCurrent;
  forecast: {
    forecastday: WeatherApiForecastDay[];
  };
  alerts?: {
    alert?: WeatherApiAlert[];
  };
}

export interface WeatherComponentToneMap {
  label: string;
  value: number | string;
  unit?: string;
  icon: LucideIcon;
  tone: WeatherConditionTone;
}
