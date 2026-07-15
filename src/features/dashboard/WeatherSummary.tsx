import { CloudSun, Gauge, Thermometer, Waves, Wind, CloudRain } from "lucide-react";
import type { DashboardStat, WeatherPoint, WeatherSummaryData } from "@/features/dashboard/types/dashboard.types";
import { StatCard } from "@/features/dashboard/StatCard";

const metricIcons = {
  humidity: Waves,
  pressure: Gauge,
  rain: CloudRain,
  temperature: Thermometer,
  wind: Wind,
} as const;

function toStat(metric: WeatherPoint): DashboardStat {
  return {
    detail: `${metric.label} trend ${metric.trend} in the latest coastal telemetry window.`,
    icon: metricIcons[metric.id as keyof typeof metricIcons] ?? CloudSun,
    id: metric.id,
    label: metric.label,
    tone: metric.tone,
    trend: metric.trend,
    unit: metric.unit,
    value: metric.value,
  };
}

export interface WeatherSummaryProps {
  weather: WeatherSummaryData;
}

export function WeatherSummary({ weather }: WeatherSummaryProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="type-mono text-xs uppercase text-primary">Coastal telemetry</p>
          <h2 className="type-title mt-1 text-2xl">Live Weather Summary</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{weather.narrative}</p>
        </div>
        <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 text-center">
          <p className="type-mono text-xs uppercase text-amber-100">Risk index</p>
          <p className="type-display mt-1 text-4xl text-amber-100">{weather.riskIndex}</p>
          <p className="text-xs text-muted-foreground">{weather.condition}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {weather.metrics.map((metric) => (
          <StatCard key={metric.id} stat={toStat(metric)} />
        ))}
      </div>
    </section>
  );
}
