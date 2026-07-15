import { Anchor, Waves, Wind } from "lucide-react";
import type { MarineWeather } from "@/features/climate-intelligence/WeatherTypes";

export interface MarineWeatherProps {
  marine: MarineWeather;
}

export function MarineWeatherSection({ marine }: MarineWeatherProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="type-mono text-xs uppercase text-primary">Bay conditions</p>
          <h2 className="type-title mt-1 text-2xl">Marine Weather</h2>
        </div>
        <Waves className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Anchor className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs">Tide height</span>
          </div>
          <p className="type-title mt-2 text-3xl">{marine.tideMeters} m</p>
          <p className="mt-1 text-xs text-muted-foreground">High water window is active.</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wind className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs">Current speed</span>
          </div>
          <p className="type-title mt-2 text-3xl">{marine.currentSpeedKph} kph</p>
          <p className="mt-1 text-xs text-muted-foreground">Nearshore current remains elevated.</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
          <p className="text-xs text-muted-foreground">Wave height</p>
          <p className="type-title mt-2 text-2xl">{marine.waveHeightMeters} m</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
          <p className="text-xs text-muted-foreground">Swell</p>
          <p className="type-title mt-2 text-2xl">{marine.swellMeters} m</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
          <p className="text-xs text-muted-foreground">Sea temperature</p>
          <p className="type-title mt-2 text-2xl">{marine.seaTempC}°C</p>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
        <p className="text-sm font-semibold text-cyan-50">Advisory</p>
        <p className="mt-1 text-sm leading-6 text-cyan-100/80">{marine.advisory}</p>
      </div>
    </section>
  );
}
