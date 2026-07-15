import { Bell, CheckCircle2, Siren, TriangleAlert } from "lucide-react";
import { KpiTile } from "@/components/ui/KpiTile";
import type { AlertEvent } from "@/types/ecosystem";
import { formatPercent } from "@/utils/formatters";

export interface AlertSeverityPanelProps {
  alerts: AlertEvent[];
}

export function AlertSeverityPanel({ alerts }: AlertSeverityPanelProps) {
  const critical = alerts.filter((alert) => alert.severity === "critical").length;
  const warnings = alerts.filter((alert) => alert.severity === "warning").length;
  const acknowledged = alerts.filter((alert) => alert.acknowledged).length;
  const avgConfidence = alerts.reduce((sum, alert) => sum + alert.confidence, 0) / Math.max(alerts.length, 1);

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Alert command summary">
      <KpiTile detail="Events requiring immediate incident response" icon={Siren} label="Critical alerts" tone="rose" value={String(critical)} />
      <KpiTile detail="Signals being watched by the duty team" icon={TriangleAlert} label="Warning alerts" tone="amber" value={String(warnings)} />
      <KpiTile detail={`${acknowledged} of ${alerts.length} events have operator acknowledgement`} icon={CheckCircle2} label="Acknowledged" tone="emerald" value={formatPercent((acknowledged / Math.max(alerts.length, 1)) * 100)} />
      <KpiTile detail="Mean confidence from prediction and telemetry rules" icon={Bell} label="AI confidence" tone="cyan" value={formatPercent(avgConfidence)} />
    </section>
  );
}
