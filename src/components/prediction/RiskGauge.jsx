import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

export function RiskGauge({ value, label, level, description, height = 300 }) {
  const data = [{ name: label, value, fill: "var(--chart-red)" }];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="type-mono text-xs uppercase text-primary">Risk Gauge</p>
          <h3 className="type-title mt-1 text-xl">{label}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs text-red-200">{level}</span>
      </div>

      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <RadialBarChart innerRadius="66%" outerRadius="100%" barSize={18} data={data} startAngle={90} endAngle={-270}>
            <RadialBar dataKey="value" cornerRadius={999} background />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-[-190px] flex justify-center pb-10">
        <div className="text-center">
          <p className="type-display text-5xl text-red-200">{value}</p>
          <p className="type-mono text-xs uppercase text-muted-foreground">Risk index</p>
        </div>
      </div>
    </div>
  );
}
