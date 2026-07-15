import { motion } from "framer-motion";

export function ProgressBar({ value, tone = "primary", inverse = false }) {
  const width = Math.max(0, Math.min(100, value));
  const toneClassName = {
    primary: "bg-climate",
    danger: "bg-alert",
    cyan: "bg-cyan-300",
    green: "bg-emerald-300",
    amber: "bg-amber-300",
  };

  return (
    <div className="h-2 overflow-hidden rounded-full bg-white/10">
      <motion.div
        className={`h-full rounded-full ${toneClassName[tone] ?? toneClassName.primary}`}
        initial={{ width: 0 }}
        animate={{ width: `${inverse ? 100 - width : width}%` }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
