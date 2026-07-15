import { RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts";
import { chartTooltipProps } from "@/components/charts/chartTheme";

export function ConfidenceRadialChart({ value, label = "AI Confidence", height = 280 }) {
  const data = [{ name: label, value, fill: "var(--chart-yellow)" }];

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RadialBarChart innerRadius="68%" outerRadius="100%" barSize={18} data={data} startAngle={90} endAngle={-270}>
          <Tooltip {...chartTooltipProps} />
          <RadialBar dataKey="value" cornerRadius={999} background />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
