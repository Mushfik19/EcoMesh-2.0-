import { Activity, Database, Gauge, ShieldCheck } from "lucide-react";
import { KpiTile } from "@/components/ui/KpiTile";
import { appConfig } from "@/config/appConfig";

export function DashboardWorkspace() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Dashboard workspace readiness">
      <KpiTile detail={appConfig.releaseChannel} icon={ShieldCheck} label="Release channel" tone="emerald" value="Demo" />
      <KpiTile detail="Local JSON-backed data services" icon={Database} label="Data mode" tone="cyan" value="Mock" />
      <KpiTile detail="Mission panels optimized for field command" icon={Gauge} label="UX density" tone="violet" value="High" />
      <KpiTile detail="Framer Motion page and card transitions" icon={Activity} label="Motion layer" tone="amber" value="Active" />
    </section>
  );
}
