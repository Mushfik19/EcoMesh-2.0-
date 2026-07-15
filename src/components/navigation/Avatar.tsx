import type { AuthRole } from "@/store/authStore";

export interface AvatarProps {
  name: string;
  role?: AuthRole | null;
  online?: boolean;
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "EM";
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
}

export function Avatar({ name, role, online = true }: AvatarProps) {
  const initials = getInitials(name);

  return (
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-cyan-300/30 to-emerald-300/30 text-sm font-semibold text-white shadow-glow">
      <span>{initials}</span>
      <span
        className={[
          "absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border border-slate-950",
          online ? "bg-emerald-400 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" : "bg-slate-400",
          role === "administrator" ? "ring-2 ring-cyan-300/50" : "",
        ].join(" ")}
        aria-hidden="true"
      />
    </div>
  );
}
