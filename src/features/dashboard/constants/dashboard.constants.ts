import type { DashboardSeverity, DashboardStatus, StatTone } from "@/features/dashboard/types/dashboard.types";

export const DASHBOARD_REFRESH_INTERVAL_MS = 30_000;

export const statusLabels: Record<DashboardStatus, string> = {
  degraded: "Degraded",
  healing: "Self-healing",
  online: "Online",
  stable: "Stable",
};

export const statusClasses: Record<DashboardStatus, string> = {
  degraded: "border-amber-300/30 bg-amber-300/12 text-amber-100",
  healing: "border-cyan-300/30 bg-cyan-300/12 text-cyan-100",
  online: "border-emerald-300/30 bg-emerald-300/12 text-emerald-100",
  stable: "border-blue-300/30 bg-blue-300/12 text-blue-100",
};

export const severityClasses: Record<DashboardSeverity, string> = {
  critical: "border-rose-300/35 bg-rose-300/12 text-rose-100",
  info: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  warning: "border-amber-300/35 bg-amber-300/12 text-amber-100",
};

export const statToneClasses: Record<StatTone, string> = {
  amber: "bg-amber-300/12 text-amber-100 ring-amber-200/20",
  cyan: "bg-cyan-300/12 text-cyan-100 ring-cyan-200/20",
  emerald: "bg-emerald-300/12 text-emerald-100 ring-emerald-200/20",
  rose: "bg-rose-300/12 text-rose-100 ring-rose-200/20",
  slate: "bg-slate-300/12 text-slate-100 ring-slate-200/20",
  violet: "bg-violet-300/12 text-violet-100 ring-violet-200/20",
};
