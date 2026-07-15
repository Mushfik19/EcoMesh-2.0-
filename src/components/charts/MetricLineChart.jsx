import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartAxisTick, chartGridStroke, chartTooltipProps } from "@/components/charts/chartTheme";

export function MetricLineChart({ data, dataKey, stroke, unit, height = "clamp(220px, 30vw, 280px)" }) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 12, left: -8, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={stroke} stopOpacity={0.38} />
              <stop offset="95%" stopColor={stroke} stopOpacity={0.04} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartGridStroke} strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="time" tick={chartAxisTick} axisLine={false} tickLine={false} />
          <YAxis tick={chartAxisTick} axisLine={false} tickLine={false} unit={unit} />
          <Tooltip {...chartTooltipProps} />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={stroke}
            fillOpacity={1}
            fill={`url(#gradient-${dataKey})`}
            strokeWidth={2.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
