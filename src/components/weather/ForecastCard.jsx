import { CloudRain, Wind } from "lucide-react";
import { ProgressBar } from "@/components/dashboard/ProgressBar";

export function HourlyForecastCard({ forecast }) {
  return (
    <div className="min-w-[132px] rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <p className="type-mono text-xs text-primary">{forecast.time}</p>
      <p className="type-title mt-3 text-2xl">{forecast.tempC}°</p>
      <div className="mt-4 space-y-3 text-xs text-muted-foreground">
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1"><CloudRain size={13} /> Rain</span>
          <span>{forecast.rainChance}%</span>
        </div>
        <ProgressBar value={forecast.rainChance} tone="cyan" />
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1"><Wind size={13} /> Wind</span>
          <span>{forecast.windKph} kph</span>
        </div>
      </div>
    </div>
  );
}

export function DailyForecastCard({ forecast }) {
  return (
    <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div>
        <p className="type-title text-lg">{forecast.day}</p>
        <p className="text-xs text-muted-foreground">{forecast.date.slice(5)}</p>
      </div>
      <div>
        <p className="text-sm text-foreground">{forecast.condition}</p>
        <p className="mt-1 text-xs text-muted-foreground">Rain {forecast.rainChance}% · Wind {forecast.windKph} kph</p>
      </div>
      <p className="type-title text-lg">{forecast.highC}° / <span className="text-muted-foreground">{forecast.lowC}°</span></p>
    </div>
  );
}
