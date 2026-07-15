import { motion } from "framer-motion";
import { useState } from "react";
import { KpiTile } from "@/components/ui/KpiTile";
import { LoadingSkeleton } from "@/components/common/LoadingSkeleton";
import { ScenarioControl } from "@/components/simulation/ScenarioControl";
import type { Scenario } from "@/components/simulation/ScenarioControl";
import { SimulationTimeline } from "@/components/simulation/SimulationTimeline";
import { useMockQuery } from "@/hooks/useMockQuery";
import { mockDataService } from "@/services/mockDataService";
import { Activity, Gauge, RadioTower, TimerReset } from "lucide-react";

export function SimulationWorkbenchPage() {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const { data: logs, isLoading } = useMockQuery(mockDataService.getNetworkLogs);

  if (isLoading || !logs) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <LoadingSkeleton />
      </div>
    );
  }

  const activeIntensity = scenario?.intensity ?? 86;

  return (
    <motion.div className="space-y-6 p-4 sm:p-6 lg:p-8" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
      <header className="max-w-4xl">
        <p className="type-mono text-xs uppercase text-primary">Digital rehearsal</p>
        <h1 className="type-display mt-2 text-4xl">Climate Event Simulation</h1>
        <p className="mt-3 text-muted-foreground">
          Run mock disaster scenarios and inspect how EcoMesh should recover routes, prioritize packets, and guide response teams.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiTile detail="Modeled severity of the selected scenario" icon={Gauge} label="Scenario intensity" tone="rose" value={`${activeIntensity}%`} />
        <KpiTile detail="Synthetic logs available for replay" icon={Activity} label="Event samples" tone="cyan" value={String(logs.length)} />
        <KpiTile detail="Expected reroute cycle after gateway loss" icon={TimerReset} label="Recovery target" tone="emerald" value="< 90s" />
        <KpiTile detail="Self-healing route exercises in this run" icon={RadioTower} label="Mesh drills" tone="violet" value="3" />
      </section>

      <ScenarioControl onScenarioChange={setScenario} />
      <SimulationTimeline logs={logs} />
    </motion.div>
  );
}
