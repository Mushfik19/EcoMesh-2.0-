import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export interface KpiTileProps {
  icon: LucideIcon;
  label: string;
  value: string;
  detail: string;
  tone?: "cyan" | "emerald" | "amber" | "rose" | "violet";
}

const toneClasses = {
  amber: "bg-amber-300/12 text-amber-100 ring-amber-200/16",
  cyan: "bg-cyan-300/12 text-cyan-100 ring-cyan-200/16",
  emerald: "bg-emerald-300/12 text-emerald-100 ring-emerald-200/16",
  rose: "bg-rose-300/12 text-rose-100 ring-rose-200/16",
  violet: "bg-violet-300/12 text-violet-100 ring-violet-200/16",
};

export function KpiTile({ detail, icon: Icon, label, tone = "cyan", value }: KpiTileProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-panel backdrop-blur-xl">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="type-mono text-[0.68rem] uppercase text-muted-foreground">{label}</p>
          <p className="type-title mt-2 text-3xl text-foreground">{value}</p>
        </div>
        <div className={cn("grid h-10 w-10 place-items-center rounded-md ring-1", toneClasses[tone])}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{detail}</p>
    </article>
  );
}
