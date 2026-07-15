import { BellRing } from "lucide-react";
import { severityClasses } from "@/features/dashboard/constants/dashboard.constants";
import type { AlertSummaryItem } from "@/features/dashboard/types/dashboard.types";
import { cn } from "@/lib/cn";

export interface AlertPanelProps {
  alerts: AlertSummaryItem[];
}

export function AlertPanel({ alerts }: AlertPanelProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="type-mono text-xs uppercase text-primary">Incident queue</p>
          <h2 className="type-title mt-1 text-2xl">Active Alerts</h2>
        </div>
        <span className="rounded-md border border-rose-300/25 bg-rose-300/10 px-2.5 py-1 text-xs font-bold text-rose-100">
          {alerts.filter((alert) => alert.severity === "critical").length} critical
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <article className={cn("rounded-lg border p-4", severityClasses[alert.severity])} key={alert.id}>
            <div className="flex gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10">
                <BellRing className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-foreground">{alert.title}</h3>
                  <span className="rounded-md bg-black/15 px-2 py-1 text-xs font-bold uppercase">{alert.severity}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{alert.zone} · {alert.id}</p>
              </div>
              <div className="shrink-0 text-right text-xs text-muted-foreground">
                <p>{alert.timeAgo}</p>
                <p className="mt-1">{alert.confidence}%</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
