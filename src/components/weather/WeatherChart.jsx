import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartAxisTick, chartGridStroke, chartTooltipProps } from "@/components/charts/chartTheme";

export function WeatherChart({ data }) {
  return (
    <div className="h-[clamp(260px,34vw,380px)] w-full">
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 12, right: 12, left: -8, bottom: 0 }}>
          <CartesianGrid stroke={chartGridStroke} strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="label" tick={chartAxisTick} axisLine={false} tickLine={false} />
          <YAxis tick={chartAxisTick} axisLine={false} tickLine={false} />
          <Tooltip {...chartTooltipProps} />
          <Legend />
          <Area type="monotone" dataKey="rainfall" name="Rainfall" stroke="var(--chart-cyan)" fill="var(--chart-cyan)" fillOpacity={0.12} strokeWidth={2} />
          <Area type="monotone" dataKey="wind" name="Wind" stroke="var(--chart-violet)" fill="var(--chart-violet)" fillOpacity={0.08} strokeWidth={2} />
          <Area type="monotone" dataKey="temperature" name="Temp" stroke="var(--chart-orange)" fill="var(--chart-orange)" fillOpacity={0.06} strokeWidth={2} />
          <Area type="monotone" dataKey="pressure" name="Pressure" stroke="var(--chart-slate)" fill="transparent" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
