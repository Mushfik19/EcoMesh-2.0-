export const STATUS_LABELS = {
  online: "Online",
  offline: "Offline",
  degraded: "Degraded",
  moving: "Moving",
  standby: "Standby",
  maintenance: "Maintenance",
} as const;

export const SEVERITY_STYLES = {
  info: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  warning: "border-amber-300/35 bg-amber-300/10 text-amber-100",
  critical: "border-rose-300/35 bg-rose-300/10 text-rose-100",
} as const;

export const STATUS_STYLES = {
  online: "bg-emerald-300 text-slate-950",
  offline: "bg-slate-500 text-white",
  degraded: "bg-amber-300 text-slate-950",
  moving: "bg-cyan-300 text-slate-950",
  standby: "bg-blue-300 text-slate-950",
  maintenance: "bg-violet-300 text-slate-950",
} as const;

export const PLATFORM_REGIONS = ["Satkhira", "Koyra", "Dacope", "Mongla", "Bhola", "Cox's Bazar"] as const;
