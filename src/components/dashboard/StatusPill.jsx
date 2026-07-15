const statusClassName = {
  online: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  stable: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  degraded: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  critical: "border-red-400/30 bg-red-400/10 text-red-200",
  healing: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  info: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  warning: "border-amber-400/30 bg-amber-400/10 text-amber-200",
};

export function StatusPill({ status, label }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClassName[status] ?? statusClassName.info}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label ?? status}
    </span>
  );
}
