import { CloudRain, Wind } from "lucide-react";
import type { HourlyForecastItem } from "@/features/climate-intelligence/WeatherTypes";

export interface HourlyForecastProps {
  items: HourlyForecastItem[];
}

export function HourlyForecast({ items }: HourlyForecastProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="mb-5">
        <p className="type-mono text-xs uppercase text-primary">Hourly operations window</p>
        <h2 className="type-title mt-1 text-2xl">24 Hour Forecast</h2>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {items.map((forecast) => (
          <article className="min-w-[146px] rounded-lg border border-white/10 bg-white/[0.045] p-4" key={forecast.time}>
            <p className="type-mono text-xs text-primary">{forecast.time}</p>
            <p className="type-title mt-3 text-3xl">{forecast.tempC}°</p>
            <p className="mt-1 text-xs text-muted-foreground">{forecast.condition}</p>
            <div className="mt-4 space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1">
                  <CloudRain className="h-3.5 w-3.5" aria-hidden="true" />
                  Rain
                </span>
                <span>{forecast.rainChance}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-cyan-300" style={{ width: `${forecast.rainChance}%` }} />
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1">
                  <Wind className="h-3.5 w-3.5" aria-hidden="true" />
                  Wind
                </span>
                <span>{forecast.windKph} kph</span>
              </div>
              <p>Humidity {forecast.humidity}%</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
