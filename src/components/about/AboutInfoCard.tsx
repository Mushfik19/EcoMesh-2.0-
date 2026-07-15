import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface AboutInfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  eyebrow?: string;
  className?: string;
}

export function AboutInfoCard({ className, description, eyebrow, icon: Icon, title }: AboutInfoCardProps) {
  return (
    <motion.article
      className={cn("rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-control backdrop-blur-xl", className)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: "var(--shadow-glow)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/12 text-primary ring-1 ring-primary/15">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          {eyebrow ? <p className="type-mono text-[0.68rem] uppercase text-primary">{eyebrow}</p> : null}
          <h3 className="type-title text-xl">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export interface TeamMemberCardProps {
  name: string;
  role: string;
  focus: string;
}

export function TeamMemberCard({ focus, name, role }: TeamMemberCardProps) {
  return (
    <motion.article
      className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(80,213,240,0.11),rgba(255,255,255,0.045))] p-5 shadow-control backdrop-blur-xl"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25 }}
    >
      <div className="grid h-12 w-12 place-items-center rounded-md bg-primary text-primary-foreground">
        <span className="type-title text-sm">{name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
      </div>
      <h3 className="type-title mt-4 text-xl">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-primary">{role}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{focus}</p>
    </motion.article>
  );
}
