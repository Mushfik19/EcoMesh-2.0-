import { Anchor, Navigation, Thermometer, Waves, Wind } from "lucide-react";

export function MarineWeatherCard({ marine }) {
  const stats = [
    { label: "Tide", value: marine.tideMeters, unit: "m", icon: Waves },
    { label: "Wave", value: marine.waveHeightMeters, unit: "m", icon: Anchor },
    { label: "Swell", value: marine.swellMeters, unit: "m", icon: Navigation },
    { label: "Sea temp", value: marine.seaTempC, unit: "°C", icon: Thermometer },
    { label: "Current", value: marine.currentSpeedKph, unit: "kph", icon: Wind },
  ];

  return (
    <div>
      <div className="mb-4 rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4">
        <p className="text-sm text-cyan-100">{marine.advisory}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <Icon className="text-primary" size={18} aria-hidden="true" />
              <p className="mt-3 text-xs text-muted-foreground">{stat.label}</p>
              <p className="type-title mt-1 text-xl">{stat.value}<span className="ml-1 text-xs text-muted-foreground">{stat.unit}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
