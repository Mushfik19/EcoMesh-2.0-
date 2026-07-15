import { RefreshCw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  buildWeatherLocationLabel,
  getClimateIntelligence,
} from "@/features/climate-intelligence/WeatherService";
import type { WeatherIntelligence } from "@/features/climate-intelligence/WeatherTypes";
import { mockWeatherData } from "@/features/climate-intelligence/MockWeatherData";
import { CurrentWeatherCard } from "@/features/climate-intelligence/CurrentWeatherCard";
import { HourlyForecast } from "@/features/climate-intelligence/HourlyForecast";
import { MarineWeatherSection } from "@/features/climate-intelligence/MarineWeather";
import { SevenDayForecast } from "@/features/climate-intelligence/SevenDayForecast";
import { WeatherAlerts } from "@/features/climate-intelligence/WeatherAlerts";
import { WeatherCharts } from "@/features/climate-intelligence/WeatherCharts";

function WeatherSkeleton() {
  return (
    <div className="dark min-h-svh bg-background p-5 text-foreground lg:p-8">
      <div className="mb-6 h-32 animate-pulse rounded-lg bg-white/[0.06]" />
      <div className="grid gap-4 xl:grid-cols-2">
        <div className="h-[28rem] animate-pulse rounded-lg bg-white/[0.06]" />
        <div className="h-[28rem] animate-pulse rounded-lg bg-white/[0.06]" />
      </div>
    </div>
  );
}

export function ClimateIntelligencePage() {
  const [weather, setWeather] = useState<WeatherIntelligence | null>(mockWeatherData);
  const [isLoading, setIsLoading] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const loadWeather = useCallback(async () => {
    setIsLoading(true);
    const data = await getClimateIntelligence();

    if (mountedRef.current) {
      setWeather(data);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadWeather();
  }, [loadWeather]);

  if (!weather) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <header className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              WeatherAPI.com integration ready
            </div>
            <p className="type-mono text-xs uppercase text-primary">{buildWeatherLocationLabel(weather.location)}</p>
            <h1 className="type-display mt-2 text-3xl sm:text-4xl">Weather Intelligence</h1>
            <p className="type-body mt-2 max-w-3xl text-muted-foreground">
              Coastal forecasting for rainfall, wind, marine conditions, cyclone risk, and response guidance across Bangladesh&apos;s shoreline.
            </p>
          </div>
          <button type="button" className="btn btn-outline w-fit" onClick={() => void loadWeather()} disabled={isLoading}>
            <RefreshCw className={isLoading ? "h-4 w-4 animate-spin" : "h-4 w-4"} aria-hidden="true" />
            {isLoading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-5 px-5 py-6 lg:px-8">
        <section className="col-span-12">
          <CurrentWeatherCard current={weather.current} location={weather.location} source={weather.source} cyclone={weather.cyclone} />
        </section>

        <section className="col-span-12 xl:col-span-8">
          <WeatherCharts history={weather.history} trends={weather.trends} cycloneScore={weather.cyclone.score} />
        </section>

        <section className="col-span-12 xl:col-span-4">
          <MarineWeatherSection marine={weather.marine} />
        </section>

        <section className="col-span-12 xl:col-span-8">
          <HourlyForecast items={weather.hourly} />
        </section>

        <section className="col-span-12 xl:col-span-4">
          <WeatherAlerts alerts={weather.alerts} />
        </section>

        <section className="col-span-12 xl:col-span-6">
          <SevenDayForecast items={weather.daily} />
        </section>

        <section className="col-span-12 xl:col-span-6">
          <article className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
            <p className="type-mono text-xs uppercase text-primary">Decision support</p>
            <h2 className="type-title mt-1 text-2xl">AI Recommendation</h2>
            <div className="mt-5 rounded-lg border border-primary/20 bg-primary/10 p-5">
              <p className="text-lg font-semibold text-primary-foreground">{weather.recommendation.headline}</p>
              <p className="mt-2 text-sm text-muted-foreground">Confidence {weather.recommendation.confidence}%</p>
            </div>
            <div className="mt-4 grid gap-3">
              {weather.recommendation.actions.map((action) => (
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-muted-foreground" key={action}>
                  {action}
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
