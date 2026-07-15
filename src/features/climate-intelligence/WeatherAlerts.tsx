import { Bell, BellRing, TriangleAlert } from "lucide-react";
import type { WeatherAlertItem } from "@/features/climate-intelligence/WeatherTypes";
import { cn } from "@/lib/cn";

export interface WeatherAlertsProps {
  alerts: WeatherAlertItem[];
}

const severityStyles = {
  critical: "border-rose-300/35 bg-rose-300/10 text-rose-100",
  info: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  warning: "border-amber-300/35 bg-amber-300/10 text-amber-100",
} as const;

export function WeatherAlerts({ alerts }: WeatherAlertsProps) {
  const criticalCount = alerts.filter((alert) => alert.severity === "critical").length;

  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="type-mono text-xs uppercase text-primary">Warnings</p>
          <h2 className="type-title mt-1 text-2xl">Active Weather Alerts</h2>
        </div>
        <span className="rounded-md border border-rose-300/25 bg-rose-300/10 px-2.5 py-1 text-xs font-bold text-rose-100">
          {criticalCount} critical
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <article className={cn("rounded-lg border p-4", severityStyles[alert.severity])} key={alert.id}>
            <div className="flex gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10">
                {alert.severity === "critical" ? (
                  <BellRing className="h-4.5 w-4.5" aria-hidden="true" />
                ) : (
                  <Bell className="h-4.5 w-4.5" aria-hidden="true" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-foreground">{alert.title}</h3>
                  <span className="rounded-md bg-black/15 px-2 py-1 text-xs font-bold uppercase">{alert.severity}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {alert.area} · Effective {alert.effective}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{alert.instruction}</p>
              </div>
              {alert.severity === "warning" ? <TriangleAlert className="h-4.5 w-4.5" aria-hidden="true" /> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
