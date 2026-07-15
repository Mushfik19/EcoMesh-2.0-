import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProgressBar } from "@/components/dashboard/ProgressBar";
import { statToneClasses, statusClasses, statusLabels } from "@/features/dashboard/constants/dashboard.constants";
import type { DashboardStat } from "@/features/dashboard/types/dashboard.types";
import { cn } from "@/lib/cn";

export interface StatCardProps {
  stat: DashboardStat;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;
  const isRising = stat.trend?.startsWith("+");

  return (
    <motion.article
      className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-control backdrop-blur-xl"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, boxShadow: "var(--shadow-glow)" }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={cn("grid h-11 w-11 place-items-center rounded-md ring-1", statToneClasses[stat.tone])}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        {stat.status ? (
          <span className={cn("rounded-md border px-2.5 py-1 text-xs font-bold", statusClasses[stat.status])}>
            {statusLabels[stat.status]}
          </span>
        ) : null}
      </div>

      <p className="mt-5 text-sm text-muted-foreground">{stat.label}</p>
      <div className="mt-2 flex items-end gap-2">
        <p className="type-title text-3xl">{stat.value}</p>
        {stat.unit ? <p className="mb-1 text-sm text-muted-foreground">{stat.unit}</p> : null}
      </div>

      {stat.trend ? (
        <p className={cn("mt-3 inline-flex items-center gap-1 text-xs", isRising ? "text-amber-200" : "text-emerald-300")}>
          {isRising ? <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /> : <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />}
          {stat.trend} since last hour
        </p>
      ) : null}

      {typeof stat.progress === "number" ? (
        <div className="mt-4">
          <ProgressBar value={stat.progress} tone={stat.tone === "amber" ? "amber" : stat.tone === "emerald" ? "green" : "primary"} />
        </div>
      ) : null}

      <p className="mt-4 text-xs leading-5 text-muted-foreground">{stat.detail}</p>
    </motion.article>
  );
}
