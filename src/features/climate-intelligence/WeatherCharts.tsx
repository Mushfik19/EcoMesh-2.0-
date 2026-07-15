import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Gauge, Droplets, Wind } from "lucide-react";
import type { WeatherHistoryRecord, WeatherTrendPoint } from "@/features/climate-intelligence/WeatherTypes";

export interface WeatherChartsProps {
  trends: WeatherTrendPoint[];
  history: WeatherHistoryRecord[];
  cycloneScore: number;
}

const chartAxis = {
  fill: "var(--color-muted-foreground)",
  fontSize: 12,
};

const tooltipStyle = {
  backgroundColor: "rgba(7, 16, 20, 0.96)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "0.75rem",
  color: "var(--color-foreground)",
  boxShadow: "var(--shadow-command)",
};

function weatherTooltipFormatter(value: number, name: string) {
  const labels: Record<string, string> = {
    humidity: "Humidity",
    pressure: "Pressure",
    rainfall: "Rainfall",
    temperature: "Temperature",
    wind: "Wind",
  };

  return [value, labels[name] ?? name];
}

export function WeatherCharts({ trends, history, cycloneScore }: WeatherChartsProps) {
  const riskTrend = history.slice(-12).map((item) => ({
    label: new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    risk: item.riskLevel === "critical" ? 92 : item.riskLevel === "high" ? 78 : item.riskLevel === "moderate" ? 52 : 28,
    tide: Number(item.tideMeters.toFixed(2)),
    salinity: Number(item.salinityPpt.toFixed(2)),
  }));

  return (
    <section className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
      <article className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="type-mono text-xs uppercase text-primary">Telemetry movement</p>
            <h2 className="type-title mt-1 text-2xl">Weather Charts</h2>
          </div>
          <Droplets className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
            <p className="mb-4 text-sm font-semibold text-foreground">Climate trend</p>
            <div className="h-[18rem] w-full">
              <ResponsiveContainer>
                <AreaChart data={trends}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="label" tick={chartAxis} axisLine={false} tickLine={false} />
                  <YAxis tick={chartAxis} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} formatter={weatherTooltipFormatter} />
                  <Legend />
                  <Area type="monotone" dataKey="temperature" name="Temperature" stroke="var(--chart-orange)" fill="var(--chart-orange)" fillOpacity={0.08} strokeWidth={2} />
                  <Area type="monotone" dataKey="rainfall" name="Rainfall" stroke="var(--chart-cyan)" fill="var(--chart-cyan)" fillOpacity={0.12} strokeWidth={2} />
                  <Area type="monotone" dataKey="wind" name="Wind" stroke="var(--chart-violet)" fill="var(--chart-violet)" fillOpacity={0.08} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
            <p className="mb-4 text-sm font-semibold text-foreground">Pressure and humidity</p>
            <div className="h-[18rem] w-full">
              <ResponsiveContainer>
                <LineChart data={trends}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="label" tick={chartAxis} axisLine={false} tickLine={false} />
                  <YAxis tick={chartAxis} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} formatter={weatherTooltipFormatter} />
                  <Legend />
                  <Line type="monotone" dataKey="pressure" name="Pressure" stroke="var(--chart-slate)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="humidity" name="Humidity" stroke="var(--chart-green)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </article>

      <aside className="space-y-5">
        <article className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="type-mono text-xs uppercase text-primary">Cyclone monitor</p>
              <h3 className="type-title mt-1 text-2xl">Risk trajectory</h3>
            </div>
            <Gauge className="h-5 w-5 text-amber-200" aria-hidden="true" />
          </div>
          <div className="mt-5 grid place-items-center">
            <div className="grid h-40 w-40 place-items-center rounded-full border border-amber-300/25 bg-[conic-gradient(from_0deg,var(--chart-orange)_0_67%,rgba(255,255,255,0.08)_67%_100%)] p-3 shadow-glow">
              <div className="grid h-full w-full place-items-center rounded-full bg-background">
                <div className="text-center">
                  <p className="type-display text-5xl text-amber-100">{cycloneScore}</p>
                  <p className="type-mono text-xs uppercase text-muted-foreground">Watch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {riskTrend.slice(-4).map((item) => (
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3" key={item.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold">{item.risk}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-amber-300" style={{ width: `${item.risk}%` }} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Tide {item.tide} m · Salinity {item.salinity} ppt
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <Wind className="h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <p className="type-mono text-xs uppercase text-primary">Field summary</p>
              <h3 className="type-title mt-1 text-xl">What the charts say</h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Rainfall, humidity, and wind are trending upward while pressure softens, which keeps the coastal corridor in a watch state.
          </p>
        </article>
      </aside>
    </section>
  );
}
