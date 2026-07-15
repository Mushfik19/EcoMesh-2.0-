import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartAxisTick, chartGridStroke, chartTooltipProps } from "@/components/charts/chartTheme";

export function MetricBarChart({ data, dataKey, fill, unit, height = "clamp(220px, 30vw, 280px)", xKey = "label" }) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 12, left: -8, bottom: 0 }}>
          <CartesianGrid stroke={chartGridStroke} strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={xKey} tick={chartAxisTick} axisLine={false} tickLine={false} />
          <YAxis tick={chartAxisTick} axisLine={false} tickLine={false} unit={unit} />
          <Tooltip {...chartTooltipProps} />
          <Bar dataKey={dataKey} fill={fill} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
