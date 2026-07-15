import { CloudRain, Droplets, Eye, Gauge, Sun, Wind } from "lucide-react";
import { AnimatedNumber } from "@/components/common/AnimatedNumber";

export function CurrentWeatherCard({ current, location, source }) {
  const stats = [
    { label: "Humidity", value: current.humidity, unit: "%", icon: Droplets },
    { label: "Pressure", value: current.pressureMb, unit: "mb", icon: Gauge },
    { label: "Wind", value: current.windKph, unit: "kph", icon: Wind },
    { label: "Rain", value: current.precipMm, unit: "mm", icon: CloudRain },
    { label: "UV", value: current.uv, unit: "", icon: Sun },
    { label: "Visibility", value: current.visibilityKm, unit: "km", icon: Eye },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(80,213,240,0.18),rgba(24,169,153,0.08)_48%,rgba(255,255,255,0.04))] p-6 shadow-command">
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="type-mono text-xs uppercase text-primary">{source}</p>
            <h2 className="type-title mt-2 text-2xl">{location.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{location.region} · {location.localtime}</p>
            <p className="mt-5 text-lg text-cyan-100">{current.condition}</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="type-display text-6xl text-white">
              <AnimatedNumber value={current.tempC} />°
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Feels like {current.feelsLikeC}°C</p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur">
                <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                  <Icon size={16} aria-hidden="true" />
                  <span className="text-xs">{stat.label}</span>
                </div>
                <p className="type-title text-2xl">
                  {stat.value}
                  <span className="ml-1 text-sm text-muted-foreground">{stat.unit}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
