import type { AuthRole } from "@/store/authStore";
import { getRoleLabel } from "@/components/navigation/authNavbar.data";

export interface RoleBadgeProps {
  role?: AuthRole | null;
}

const roleStyles: Record<"default" | AuthRole, string> = {
  default: "border-white/10 bg-white/[0.06] text-slate-200",
  administrator: "border-cyan-300/25 bg-cyan-300/12 text-cyan-100",
  fisherman: "border-blue-300/25 bg-blue-300/12 text-blue-100",
  farmer: "border-emerald-300/25 bg-emerald-300/12 text-emerald-100",
  "government-officer": "border-violet-300/25 bg-violet-300/12 text-violet-100",
  ngo: "border-teal-300/25 bg-teal-300/12 text-teal-100",
  researcher: "border-amber-300/25 bg-amber-300/12 text-amber-100",
  volunteer: "border-rose-300/25 bg-rose-300/12 text-rose-100",
};

export function RoleBadge({ role }: RoleBadgeProps) {
  const resolvedRole = role ?? "default";

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] ${roleStyles[resolvedRole] ?? roleStyles.default}`}>
      {getRoleLabel(role)}
    </span>
  );
}
