import { Box, CloudSun, Route, Waves } from "lucide-react";
import { KpiTile } from "@/components/ui/KpiTile";

export function DigitalTwinReadinessPanel() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Digital twin readiness">
      <KpiTile detail="Canvas slot and scene data model are already separated" icon={Box} label="3D scene" tone="cyan" value="Prepared" />
      <KpiTile detail="Boats, sensors, shelters, and gateways can map to entities" icon={Route} label="Entity graph" tone="emerald" value="Layered" />
      <KpiTile detail="Weather animation hooks reserved for Three.js runtime" icon={CloudSun} label="Weather layer" tone="amber" value="Planned" />
      <KpiTile detail="Marine overlays align with blue-economy workflows" icon={Waves} label="Coast layer" tone="violet" value="Ready" />
    </section>
  );
}
