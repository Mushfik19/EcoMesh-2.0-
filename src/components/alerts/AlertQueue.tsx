import { motion } from "framer-motion";
import { BellRing, CheckCircle2 } from "lucide-react";
import { SEVERITY_STYLES } from "@/constants/platform";
import { cn } from "@/lib/cn";
import type { AlertEvent } from "@/types/ecosystem";
import { formatDateTime } from "@/utils/formatters";

export interface AlertQueueProps {
  alerts: AlertEvent[];
}

export function AlertQueue({ alerts }: AlertQueueProps) {
  const sortedAlerts = [...alerts].sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))).slice(0, 20);

  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-4 shadow-panel backdrop-blur-xl">
      <div className="flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="type-mono text-xs uppercase text-primary">Incident queue</p>
          <h2 className="type-title mt-1 text-2xl">Active Weather & Network Alerts</h2>
        </div>
        <p className="text-sm text-muted-foreground">Showing latest {sortedAlerts.length} of {alerts.length}</p>
      </div>

      <div className="mt-4 space-y-3">
        {sortedAlerts.map((alert, index) => (
          <motion.article
            className={cn("rounded-lg border p-4", SEVERITY_STYLES[alert.severity])}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.025 }}
            key={alert.id}
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-3">
                <div className="mt-1 grid h-9 w-9 place-items-center rounded-md bg-white/10">
                  <BellRing className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold capitalize text-foreground">{alert.title}</h3>
                    <span className="rounded-md bg-black/15 px-2 py-1 text-xs font-bold uppercase">{alert.severity}</span>
                    {alert.acknowledged ? (
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-300/16 px-2 py-1 text-xs font-bold text-emerald-100">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        Acknowledged
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{alert.message}</p>
                </div>
              </div>
              <div className="shrink-0 text-left text-sm lg:text-right">
                <p className="font-semibold">{alert.entityId}</p>
                <p className="text-muted-foreground">{formatDateTime(alert.createdAt)}</p>
                <p className="mt-1 text-xs text-muted-foreground">Confidence {alert.confidence}%</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
