import { motion } from "framer-motion";
import { GitBranch, RadioReceiver, RotateCw, ShieldAlert } from "lucide-react";
import type { NetworkLog } from "@/types/ecosystem";
import { formatDateTime } from "@/utils/formatters";

export interface SimulationTimelineProps {
  logs: NetworkLog[];
}

const iconByEvent = {
  "gateway heartbeat": RadioReceiver,
  "node woke from sleep": RotateCw,
  "packet retry spike": ShieldAlert,
  "route recalculated": GitBranch,
} as const;

export function SimulationTimeline({ logs }: SimulationTimelineProps) {
  const timeline = logs.slice(0, 14);

  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-4 shadow-panel backdrop-blur-xl">
      <div className="border-b border-border pb-4">
        <p className="type-mono text-xs uppercase text-primary">Synthetic event stream</p>
        <h2 className="type-title mt-1 text-2xl">Network Recovery Timeline</h2>
      </div>

      <div className="mt-5 space-y-4">
        {timeline.map((log, index) => {
          const Icon = iconByEvent[log.event as keyof typeof iconByEvent] ?? GitBranch;

          return (
            <motion.article className="grid gap-3 rounded-lg border border-border bg-background/50 p-4 md:grid-cols-[auto_1fr_auto]" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.03 }} key={log.id}>
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/12 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold capitalize">{log.event}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{log.message}</p>
              </div>
              <div className="text-sm md:text-right">
                <p className="font-semibold">{log.source}</p>
                <p className="text-muted-foreground">{formatDateTime(log.timestamp)}</p>
                <p className="mt-1 text-xs text-muted-foreground">{log.latencyMs}ms · {log.packetLossPercent}% loss</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
