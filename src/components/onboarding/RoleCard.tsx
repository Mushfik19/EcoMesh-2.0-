import { motion } from "framer-motion";
import { CheckCircle2, type LucideIcon } from "lucide-react";
import type { EcoMeshRole } from "@/store/onboardingRoleStore";

export interface RoleOption {
  id: EcoMeshRole;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

interface RoleCardProps {
  role: RoleOption;
  selected: boolean;
  onSelect: (role: EcoMeshRole) => void;
}

export function RoleCard({ role, selected, onSelect }: RoleCardProps) {
  const Icon = role.icon;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(role.id)}
      aria-pressed={selected}
      className={[
        "group relative min-h-[250px] overflow-hidden rounded-2xl border p-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
        selected
          ? "border-primary/80 bg-primary/14 shadow-glow"
          : "border-white/10 bg-white/[0.055] hover:border-primary/45",
      ].join(" ")}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${role.accent}`} />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/20" />
      <div className="absolute -bottom-16 left-0 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl transition group-hover:bg-emerald-300/18" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${role.accent} text-slate-950 shadow-glow`}>
            <Icon size={30} aria-hidden="true" />
          </div>
          {selected ? <CheckCircle2 className="text-primary" size={24} aria-hidden="true" /> : null}
        </div>

        <div className="mt-6">
          <h3 className="type-title text-2xl text-white">{role.title}</h3>
          <p className="type-body mt-3 text-sm text-muted-foreground">{role.description}</p>
        </div>

        <div className="mt-auto pt-6">
          <span className={selected ? "text-sm font-semibold text-primary" : "text-sm font-semibold text-muted-foreground group-hover:text-primary"}>
            {selected ? "Selected role" : "Choose this role"}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
