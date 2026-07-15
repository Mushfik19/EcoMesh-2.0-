import axios from "axios";
import { mockWeatherData } from "@/features/climate-intelligence/MockWeatherData";
import type {
  WeatherApiForecastResponse,
  WeatherApiRequestOptions,
  WeatherIntelligence,
  WeatherLocation,
} from "@/features/climate-intelligence/WeatherTypes";

const weatherApiClient = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
});

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function buildWeatherApiParams(options: WeatherApiRequestOptions) {
  return {
    aqi: options.aqi ? "yes" : "no",
    alerts: options.alerts ? "yes" : "no",
    days: options.days ?? 7,
    lang: options.lang ?? "en",
    q: options.query,
  };
}

export function mapWeatherApiResponse(response: WeatherApiForecastResponse): WeatherIntelligence {
  return {
    ...mockWeatherData,
    current: {
      ...mockWeatherData.current,
      condition: response.current.condition.text,
      feelsLikeC: response.current.feelslike_c,
      humidity: response.current.humidity,
      precipitationMm: response.current.precip_mm,
      pressureHpa: response.current.pressure_mb,
      tempC: response.current.temp_c,
      uvIndex: response.current.uv,
      visibilityKm: response.current.vis_km,
      windDirection: response.current.wind_dir,
      windKph: response.current.wind_kph,
    },
    location: {
      country: response.location.country,
      lat: response.location.lat,
      localtime: response.location.localtime,
      lon: response.location.lon,
      name: response.location.name,
      region: response.location.region,
      timezone: response.location.tz_id ?? mockWeatherData.location.timezone,
    },
    source: "WeatherAPI.com",
  };
}

export async function getClimateIntelligence(): Promise<WeatherIntelligence> {
  await delay(420);
  void weatherApiClient;
  return mockWeatherData;
}

export async function getWeatherIntelligence(): Promise<WeatherIntelligence> {
  return getClimateIntelligence();
}

export function buildWeatherLocationLabel(location: WeatherLocation) {
  return `${location.name}, ${location.region}, ${location.country}`;
}
