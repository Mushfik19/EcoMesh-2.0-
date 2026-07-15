import { Activity, CloudLightning, RadioTower, Waves } from "lucide-react";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";

export interface Scenario {
  id: string;
  title: string;
  description: string;
  intensity: number;
  icon: LucideIcon;
}

const scenarios: Scenario[] = [
  {
    id: "cyclone-landfall",
    title: "Cyclone Landfall",
    description: "Stress-test alert propagation, shelter routing, and gateway failover during a fast-moving coastal storm.",
    intensity: 86,
    icon: CloudLightning,
  },
  {
    id: "storm-surge",
    title: "Storm Surge",
    description: "Model tide node escalation, village risk clustering, and safe-route messaging for river-adjacent communities.",
    intensity: 72,
    icon: Waves,
  },
  {
    id: "mesh-outage",
    title: "Gateway Outage",
    description: "Simulate packet loss, neighbor discovery, and self-healing LoRa route recovery across degraded nodes.",
    intensity: 64,
    icon: RadioTower,
  },
];

export interface ScenarioControlProps {
  onScenarioChange?: (scenario: Scenario) => void;
}

export function ScenarioControl({ onScenarioChange }: ScenarioControlProps) {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const activeScenario = useMemo(() => scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0], [activeId]);

  function selectScenario(scenario: Scenario) {
    setActiveId(scenario.id);
    onScenarioChange?.(scenario);
  }

  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-4 shadow-panel backdrop-blur-xl">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/12 text-primary">
          <Activity className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="type-mono text-xs uppercase text-primary">Scenario engine</p>
          <h2 className="type-title text-2xl">Simulation Controls</h2>
        </div>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon;
          const isActive = scenario.id === activeScenario.id;

          return (
            <button
              className={[
                "rounded-lg border p-4 text-left transition",
                isActive ? "border-primary bg-primary/12 shadow-glow" : "border-border bg-background/50 hover:border-primary/60",
              ].join(" ")}
              key={scenario.id}
              onClick={() => selectScenario(scenario)}
              type="button"
            >
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{scenario.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{scenario.description}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary" style={{ width: `${scenario.intensity}%` }} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
