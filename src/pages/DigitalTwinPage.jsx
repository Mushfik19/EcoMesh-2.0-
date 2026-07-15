import { Activity, ArrowRight, Cpu, Radar, Satellite, Waves } from "lucide-react";
import { ChartShell } from "@/components/charts/ChartShell";
import { MetricLineChart } from "@/components/charts/MetricLineChart";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { PanelCard } from "@/components/dashboard/PanelCard";
import { TwinScenePlaceholder } from "@/components/digital-twin/TwinScenePlaceholder";
import { digitalTwinSummary, twinArchitecture, twinEntities, twinMetrics, twinSceneLayers, twinSimulationModes } from "@/data/digitalTwinData";

const simulationSeries = [
  { time: "T-6", mesh: 64, weather: 42, signal: 92, boats: 3 },
  { time: "T-4", mesh: 68, weather: 48, signal: 91, boats: 4 },
  { time: "T-2", mesh: 72, weather: 55, signal: 89, boats: 5 },
  { time: "Now", mesh: 76, weather: 63, signal: 87, boats: 6 },
  { time: "T+2", mesh: 70, weather: 74, signal: 83, boats: 7 },
  { time: "T+4", mesh: 62, weather: 82, signal: 78, boats: 8 },
];

export function DigitalTwinPage() {
  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <div className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Radar size={14} aria-hidden="true" />
              Three.js ready architecture
            </div>
            <p className="type-mono text-xs uppercase text-primary">{digitalTwinSummary.region}</p>
            <h1 className="type-display mt-2 text-3xl sm:text-4xl">{digitalTwinSummary.title}</h1>
            <p className="type-body mt-2 max-w-3xl text-muted-foreground">{digitalTwinSummary.subtitle}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">Updated</p>
              <p className="type-title mt-1 text-sm">{digitalTwinSummary.updatedAt}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">Canvas</p>
              <p className="type-title mt-1 text-sm">Placeholder visualization</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 px-5 py-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
          <TwinScenePlaceholder layers={twinSceneLayers} />

          <div className="space-y-5">
            <PanelCard title="Scene Layers" eyebrow="Objects to render later">
              <div className="space-y-3">
                {twinEntities.map((entity) => (
                  <div key={entity.name} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="type-title text-base text-foreground">{entity.name}</p>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{entity.type}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{entity.detail}</p>
                  </div>
                ))}
              </div>
            </PanelCard>

            <PanelCard title="Simulation Modes" eyebrow="Future runtime">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {twinSimulationModes.map((mode, index) => (
                  <div key={mode.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="type-title text-lg">{mode.label}</p>
                      <span className="type-mono text-xs text-primary">0{index + 1}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{mode.description}</p>
                  </div>
                ))}
              </div>
            </PanelCard>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {twinMetrics.map((metric) => (
            <MetricCard
              key={metric.label}
              icon={metric.label.includes("Signal") ? Satellite : metric.label.includes("Mesh") ? Cpu : metric.label.includes("Weather") ? Waves : Activity}
              label={metric.label}
              value={metric.value}
              unit={metric.unit}
              status={metric.status}
              detail="Dummy twin metric"
              progress={typeof metric.value === "number" ? metric.value : undefined}
              tone={metric.status === "healing" ? "cyan" : "primary"}
            />
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <ChartShell
            eyebrow="Twin telemetry"
            title="Scene readiness"
            description="The placeholder is already shaped for a future Three.js scene mount, animation loop, and entity transforms."
            action={<span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">WebGL placeholder</span>}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <MetricLineChart data={simulationSeries} dataKey="mesh" stroke="var(--chart-teal)" unit="%" height={260} />
              <MetricLineChart data={simulationSeries} dataKey="signal" stroke="var(--chart-violet)" unit="%" height={260} />
              <MetricLineChart data={simulationSeries} dataKey="weather" stroke="var(--chart-cyan)" unit="%" height={260} />
              <MetricLineChart data={simulationSeries} dataKey="boats" stroke="var(--chart-orange)" unit="" height={260} />
            </div>
          </ChartShell>

          <PanelCard title="Architecture" eyebrow="Future Three.js stack">
            <div className="space-y-4">
              {twinArchitecture.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                    <span className="type-mono text-xs">{index + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </PanelCard>
        </div>

        <PanelCard
          title="Three.js integration path"
          eyebrow="Implementation plan"
          action={<ArrowRight size={18} className="text-primary" aria-hidden="true" />}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <p className="type-title text-lg">1. Scene container</p>
              <p className="mt-2 text-sm text-muted-foreground">Swap the placeholder frame with a Three.js canvas mounted in the same viewport slot.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <p className="type-title text-lg">2. Entity layers</p>
              <p className="mt-2 text-sm text-muted-foreground">Map boats, sensors, gateways, weather, and signal lines to animated meshes and paths.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <p className="type-title text-lg">3. Runtime hooks</p>
              <p className="mt-2 text-sm text-muted-foreground">Add future controls for camera orbit, toggles, and WebSocket-driven scene updates.</p>
            </div>
          </div>
        </PanelCard>
      </div>
    </div>
  );
}
