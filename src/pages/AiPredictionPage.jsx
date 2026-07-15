import { BrainCircuit, CloudRain, ShieldAlert, Sparkles, Wind } from "lucide-react";
import { ChartShell } from "@/components/charts/ChartShell";
import { MetricBarChart } from "@/components/charts/MetricBarChart";
import { MetricLineChart } from "@/components/charts/MetricLineChart";
import { ConfidenceRadialChart } from "@/components/charts/ConfidenceRadialChart";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ProbabilityCard } from "@/components/prediction/ProbabilityCard";
import { RecommendationPanel } from "@/components/prediction/RecommendationPanel";
import { RiskGauge } from "@/components/prediction/RiskGauge";
import { aiPredictionSummary, aiRecommendation, confidenceSeries, predictionTimeline, probabilities, riskGauge, weatherForecast } from "@/data/aiPredictionData";

const forecastData = weatherForecast.map((item) => ({
  ...item,
  label: item.time,
}));

const timelineData = predictionTimeline.map((item) => ({
  ...item,
  label: item.label,
}));

export function AiPredictionPage() {
  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <div className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles size={14} aria-hidden="true" />
              Dummy inference operating on coastal telemetry
            </div>
            <p className="type-mono text-xs uppercase text-primary">{aiPredictionSummary.region}</p>
            <h1 className="type-display mt-2 text-3xl sm:text-4xl">{aiPredictionSummary.title}</h1>
            <p className="type-body mt-2 max-w-3xl text-muted-foreground">{aiPredictionSummary.subtitle}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">Updated</p>
              <p className="type-title mt-1 text-sm">{aiPredictionSummary.updatedAt}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">Confidence</p>
              <p className="type-title mt-1 text-sm">{confidenceSeries.at(-1)?.value}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 px-5 py-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <RiskGauge
            value={riskGauge.value}
            label={riskGauge.label}
            level={riskGauge.level}
            description={riskGauge.description}
          />

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {probabilities.map((item) => (
                <ProbabilityCard key={item.label} label={item.label} value={item.value} tone={item.tone} trend={item.trend} />
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <MetricCard icon={BrainCircuit} label="Confidence Score" value={confidenceSeries.at(-1)?.value ?? 0} unit="%" status="online" detail="Ensemble mean from dummy model" progress={confidenceSeries.at(-1)?.value ?? 0} tone="green" />
              <MetricCard icon={ShieldAlert} label="Flood Probability" value={probabilities[0].value} unit="%" status="critical" detail="Hydrology and rainfall correlation" progress={probabilities[0].value} tone="danger" />
              <MetricCard icon={Wind} label="Cyclone Probability" value={probabilities[1].value} unit="%" status="degraded" detail="Wind and pressure anomaly weighting" progress={probabilities[1].value} tone="amber" />
              <MetricCard icon={CloudRain} label="Rainfall Intensity" value={weatherForecast.at(-1)?.rainfall ?? 0} unit="mm" status="online" detail="Forecasted late-night accumulation" progress={weatherForecast.at(-1)?.rainfall ?? 0} tone="cyan" />
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <ChartShell
            eyebrow="Weather Forecast"
            title="Forecast Window"
            description="Temperature, humidity, pressure, wind, and rainfall projections using dummy prediction data."
            action={<span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">Next 12h</span>}
          >
            <MetricLineChart data={forecastData} dataKey="rainfall" stroke="var(--chart-cyan)" unit="mm" height={320} />
          </ChartShell>

          <ChartShell
            eyebrow="Prediction Timeline"
            title="Risk trajectory"
            description="Confidence and composite risk trend across the pre-event window."
            action={<span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">Forward view</span>}
          >
            <MetricBarChart data={timelineData} dataKey="value" fill="var(--chart-red)" unit="%" xKey="label" height={320} />
          </ChartShell>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
          <ChartShell
            eyebrow="Weather Forecast"
            title="Multi-metric conditions"
            description="The forecast chart reuses the same dummy time series for temperature, humidity, pressure, and wind."
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Temperature", dataKey: "temperature", stroke: "var(--chart-orange)", unit: "C" },
                { label: "Humidity", dataKey: "humidity", stroke: "var(--chart-cyan)", unit: "%" },
                { label: "Pressure", dataKey: "pressure", stroke: "var(--chart-slate)", unit: "hPa" },
                { label: "Wind", dataKey: "wind", stroke: "var(--chart-violet)", unit: "km/h" },
              ].map((chart) => (
                <div key={chart.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="type-title text-lg">{chart.label}</p>
                  <MetricLineChart data={forecastData} dataKey={chart.dataKey} stroke={chart.stroke} unit={chart.unit} height={220} />
                </div>
              ))}
            </div>
          </ChartShell>

          <div className="space-y-5">
            <ChartShell
              eyebrow="Confidence Score"
              title="Model certainty"
              description="AI confidence trends from the dummy decision engine."
            >
              <ConfidenceRadialChart value={confidenceSeries.at(-1)?.value ?? 0} height={300} />
            </ChartShell>

            <RecommendationPanel headline={aiRecommendation.headline} bullets={aiRecommendation.bullets} />
          </div>
        </div>
      </div>
    </div>
  );
}
