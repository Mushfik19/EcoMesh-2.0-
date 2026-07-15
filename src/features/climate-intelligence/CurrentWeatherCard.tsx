import { CloudRain, Droplets, Eye, Gauge, SunMedium, Thermometer, Wind } from "lucide-react";
import type { CurrentWeather, CycloneRisk, WeatherLocation } from "@/features/climate-intelligence/WeatherTypes";
import { cn } from "@/lib/cn";

export interface CurrentWeatherCardProps {
  current: CurrentWeather;
  location: WeatherLocation;
  source: string;
  cyclone: CycloneRisk;
}

const currentStats = [
  { key: "humidity", label: "Humidity", icon: Droplets, unit: "%" },
  { key: "pressure", label: "Pressure", icon: Gauge, unit: "hPa" },
  { key: "wind", label: "Wind", icon: Wind, unit: "kph" },
  { key: "rain", label: "Rain", icon: CloudRain, unit: "mm" },
  { key: "uv", label: "UV", icon: SunMedium, unit: "" },
  { key: "visibility", label: "Visibility", icon: Eye, unit: "km" },
] as const;

export function CurrentWeatherCard({ current, location, source, cyclone }: CurrentWeatherCardProps) {
  return (
    <section className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(80,213,240,0.18),rgba(24,169,153,0.08)_48%,rgba(255,255,255,0.04))] p-6 shadow-command">
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
      <div className="relative">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="type-mono text-xs uppercase text-primary">{source}</p>
            <h2 className="type-title mt-2 text-2xl text-foreground">{location.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {location.region} · {location.country} · {location.localtime}
            </p>
            <p className="mt-4 text-lg text-cyan-100">{current.condition}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Coastal humidity is elevated, marine visibility is reduced, and rainfall intensity is building in the southern belt.
            </p>
          </div>

          <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-left lg:text-right">
            <p className="type-mono text-xs uppercase text-amber-100/70">Cyclone watch</p>
            <p className="type-display mt-1 text-4xl text-amber-100">{cyclone.score}</p>
            <p className="text-xs text-muted-foreground">{cyclone.category} · ETA {cyclone.etaHours}h</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/18 p-4 backdrop-blur">
            <p className="text-xs uppercase text-muted-foreground">Temperature</p>
            <div className="mt-2 flex items-end gap-2">
              <Thermometer className="h-4 w-4 text-cyan-100" aria-hidden="true" />
              <p className="type-title text-3xl">{current.tempC}°C</p>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Feels like {current.feelsLikeC}°C</p>
          </div>

          {currentStats.map((stat) => {
            const valueMap = {
              humidity: current.humidity,
              pressure: current.pressureHpa,
              wind: current.windKph,
              rain: current.precipitationMm,
              uv: current.uvIndex,
              visibility: current.visibilityKm,
            } as const;
            const Icon = stat.icon;

            return (
              <div className="rounded-xl border border-white/10 bg-black/18 p-4 backdrop-blur" key={stat.label}>
                <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs">{stat.label}</span>
                </div>
                <p className="type-title text-2xl">
                  {valueMap[stat.key]}
                  <span className={cn("ml-1 text-sm text-muted-foreground")}>{stat.unit}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs text-muted-foreground">Wind direction</p>
            <p className="mt-1 font-semibold text-foreground">{current.windDirection}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs text-muted-foreground">Dew point</p>
            <p className="mt-1 font-semibold text-foreground">{current.dewPointC}°C</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs text-muted-foreground">Cloud cover</p>
            <p className="mt-1 font-semibold text-foreground">{current.cloudCover}%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
