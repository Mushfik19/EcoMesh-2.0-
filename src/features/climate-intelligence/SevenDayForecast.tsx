import { CloudRain } from "lucide-react";
import type { SevenDayForecastItem } from "@/features/climate-intelligence/WeatherTypes";

export interface SevenDayForecastProps {
  items: SevenDayForecastItem[];
}

export function SevenDayForecast({ items }: SevenDayForecastProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="mb-5">
        <p className="type-mono text-xs uppercase text-primary">Weekly outlook</p>
        <h2 className="type-title mt-1 text-2xl">7 Day Forecast</h2>
      </div>

      <div className="space-y-3">
        {items.map((forecast) => (
          <article className="grid grid-cols-[4rem_1fr_auto] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4" key={forecast.date}>
            <div>
              <p className="type-title text-lg">{forecast.day}</p>
              <p className="text-xs text-muted-foreground">{forecast.date.slice(5)}</p>
            </div>
            <div>
              <p className="text-sm text-foreground">{forecast.condition}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Sunrise {forecast.sunrise} · Sunset {forecast.sunset}
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <CloudRain className="h-3.5 w-3.5" aria-hidden="true" />
                Rain {forecast.rainChance}% · Wind {forecast.windKph} kph
              </p>
            </div>
            <p className="type-title text-lg">
              {forecast.highC}°
              <span className="text-muted-foreground"> / {forecast.lowC}°</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
