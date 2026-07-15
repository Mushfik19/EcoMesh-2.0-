import { BrainCircuit, ChartArea, Gauge, Sigma, Sparkles } from "lucide-react";
import { ChartShell } from "@/components/charts/ChartShell";
import { ConfidenceRadialChart } from "@/components/charts/ConfidenceRadialChart";
import { MetricBarChart } from "@/components/charts/MetricBarChart";
import { MetricLineChart } from "@/components/charts/MetricLineChart";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { analyticsHighlights, analyticsInsights, analyticsSeries, analyticsSummary, chartDefinitions, nodeHealthBreakdown } from "@/data/analyticsData";

const chartMap = {
  temperature: { type: "line", dataKey: "temperature", stroke: "var(--chart-orange)", unit: "C" },
  humidity: { type: "line", dataKey: "humidity", stroke: "var(--chart-cyan)", unit: "%" },
  pressure: { type: "line", dataKey: "pressure", stroke: "var(--chart-slate)", unit: "hPa" },
  battery: { type: "line", dataKey: "battery", stroke: "var(--chart-green)", unit: "%" },
  signal: { type: "line", dataKey: "signal", stroke: "var(--chart-violet)", unit: "%" },
  prediction: { type: "line", dataKey: "prediction", stroke: "var(--chart-red)", unit: "%" },
  rainfall: { type: "bar", dataKey: "rainfall", fill: "var(--chart-cyan)", unit: "mm" },
  nodeHealth: { type: "bar", dataKey: "value", fill: "var(--chart-teal)", unit: "%" },
  aiConfidence: { type: "radial", dataKey: "value", fill: "var(--chart-yellow)", unit: "%" },
};

export function AnalyticsPage() {
  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <div className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles size={14} aria-hidden="true" />
              Analytics ready for decision support
            </div>
            <p className="type-mono text-xs uppercase text-primary">{analyticsSummary.region}</p>
            <h1 className="type-display mt-2 text-3xl sm:text-4xl">{analyticsSummary.title}</h1>
            <p className="type-body mt-2 max-w-3xl text-muted-foreground">{analyticsSummary.subtitle}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="text-xs text-muted-foreground">Updated</p>
            <p className="type-title mt-1 text-sm">{analyticsSummary.updatedAt}</p>
          </div>
        </div>
      </div>

      <div className="space-y-5 px-5 py-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {analyticsHighlights.map((item) => (
            <MetricCard
              key={item.label}
              icon={Gauge}
              label={item.label}
              value={item.value}
              trend={item.delta}
              status="stable"
              detail="Dummy aggregate"
            />
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {chartDefinitions.map((chart) => {
            const config = chartMap[chart.key];
            return (
              <ChartShell
                key={chart.key}
                eyebrow="Trend"
                title={chart.label}
                description={`Latest ${chart.label.toLowerCase()} pattern from dummy JSON telemetry.`}
                action={<span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">Live window</span>}
              >
                {config.type === "line" ? (
                  <MetricLineChart data={analyticsSeries} dataKey={config.dataKey} stroke={config.stroke} unit={config.unit} />
                ) : config.type === "bar" ? (
                  chart.key === "nodeHealth" ? (
                    <MetricBarChart data={nodeHealthBreakdown} dataKey="value" fill={config.fill} unit={config.unit} xKey="name" />
                  ) : (
                    <MetricBarChart data={analyticsSeries.map((item) => ({ label: item.time, value: item[config.dataKey] }))} dataKey="value" fill={config.fill} unit={config.unit} />
                  )
                ) : (
                  <ConfidenceRadialChart value={analyticsSeries.at(-1)?.aiConfidence ?? 0} />
                )}
              </ChartShell>
            );
          })}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <ChartShell
            eyebrow="AI insight"
            title="Prediction"
            description="Forecasting pressure, rainfall, and node stability from edge-AI dummy telemetry."
            action={<span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">Confidence {analyticsSeries.at(-1)?.aiConfidence}%</span>}
          >
            <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
              <MetricLineChart data={analyticsSeries} dataKey="prediction" stroke="var(--chart-red)" unit="%" height={300} />
              <div className="space-y-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/12 text-primary">
                    <BrainCircuit size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="type-title text-lg">AI Confidence</p>
                    <p className="text-sm text-muted-foreground">Ensemble readiness score</p>
                  </div>
                </div>
                <ConfidenceRadialChart value={analyticsSeries.at(-1)?.aiConfidence ?? 0} height={220} />
                <div className="space-y-2">
                  {analyticsInsights.map((insight) => (
                    <div key={insight} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-muted-foreground">
                      {insight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ChartShell>

          <ChartShell
            eyebrow="Node intelligence"
            title="Node Health"
            description="Operational health of the distributed coastal node set."
            action={<span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">78 healthy</span>}
          >
            <MetricBarChart data={nodeHealthBreakdown} dataKey="value" fill="var(--chart-teal)" unit="%" height={300} />
          </ChartShell>
        </div>

        <ChartShell
          eyebrow="Performance window"
          title="Telemetry correlation"
          description="Temperature, humidity, pressure, battery, signal, and rainfall moving together across the afternoon window."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              { key: "temperature", icon: Sigma },
              { key: "humidity", icon: ChartArea },
              { key: "pressure", icon: Gauge },
              { key: "battery", icon: Sigma },
              { key: "signal", icon: Sigma },
              { key: "rainfall", icon: ChartArea },
            ].map((item) => {
              const config = chartMap[item.key];
              return (
                <div key={item.key} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="type-title text-lg capitalize">{item.key}</p>
                      <p className="text-xs text-muted-foreground">Dummy JSON time series</p>
                    </div>
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/12 text-primary">
                      <item.icon size={18} aria-hidden="true" />
                    </div>
                  </div>
                  <MetricLineChart data={analyticsSeries} dataKey={config.dataKey} stroke={config.stroke} unit={config.unit} height={220} />
                </div>
              );
            })}
          </div>
        </ChartShell>
      </div>
    </div>
  );
}
