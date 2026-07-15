import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/common/AnimatedNumber";
import { ProgressBar } from "@/components/dashboard/ProgressBar";
import { StatusPill } from "@/components/dashboard/StatusPill";

export function MetricCard({ icon: Icon, label, value, unit, trend, status, detail, progress, tone }) {
  const isPositiveTrend = typeof trend === "string" && trend.startsWith("+");

  return (
    <motion.div
      className="motion-card rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-control"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: "var(--shadow-glow)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/12 text-primary">
          {Icon ? <Icon size={20} aria-hidden="true" /> : null}
        </div>
        {status ? <StatusPill status={status} /> : null}
      </div>

      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="mt-2 flex items-end gap-2">
        <p className="type-title text-3xl">
          <AnimatedNumber value={value} />
        </p>
        {unit ? <p className="mb-1 text-sm text-muted-foreground">{unit}</p> : null}
      </div>

      {trend ? (
        <div className={`mt-3 flex items-center gap-1 text-xs ${isPositiveTrend ? "text-amber-200" : "text-emerald-300"}`}>
          {isPositiveTrend ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span>{trend} since last hour</span>
        </div>
      ) : null}

      {typeof progress === "number" ? (
        <div className="mt-4">
          <ProgressBar value={progress} tone={tone} />
        </div>
      ) : null}

      {detail ? <p className="mt-4 text-xs text-muted-foreground">{detail}</p> : null}
    </motion.div>
  );
}
