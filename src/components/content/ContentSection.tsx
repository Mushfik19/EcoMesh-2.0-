import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface PageHeroStat {
  label: string;
  value: string;
  detail: string;
}

export interface ContentPageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stats?: PageHeroStat[];
}

export interface ContentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  meta?: string;
  className?: string;
}

export interface ContentSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function ContentPageHero({ description, eyebrow, icon: Icon, stats = [], title }: ContentPageHeroProps) {
  return (
    <header className="border-b border-white/10 bg-surface/70 px-5 py-6 backdrop-blur-xl lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-end">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
            <Icon className="h-4 w-4" aria-hidden="true" />
            {eyebrow}
          </div>
          <h1 className="type-display max-w-4xl text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="type-body mt-3 max-w-3xl text-muted-foreground">{description}</p>
        </motion.div>

        {stats.length > 0 ? (
          <motion.div className="grid gap-3 sm:grid-cols-3 xl:min-w-[34rem]" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, delay: 0.08 }}>
            {stats.map((stat) => (
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4" key={stat.label}>
                <p className="type-mono text-[0.68rem] uppercase text-muted-foreground">{stat.label}</p>
                <p className="type-title mt-2 text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}

export function ContentSection({ children, className, description, eyebrow, title }: ContentSectionProps) {
  return (
    <motion.section
      className={cn("rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl", className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-5">
        <p className="type-mono text-xs uppercase text-primary">{eyebrow}</p>
        <h2 className="type-title mt-1 text-2xl">{title}</h2>
        {description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}

export function ContentCard({ className, description, icon: Icon, meta, title }: ContentCardProps) {
  return (
    <motion.article
      className={cn("rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:border-primary/40 hover:bg-white/[0.07]", className)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/12 text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          {meta ? <p className="type-mono text-[0.68rem] uppercase text-muted-foreground">{meta}</p> : null}
          <h3 className="type-title text-lg">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function ContentShell({ children }: { children: ReactNode }) {
  return <div className="dark min-h-svh bg-background text-foreground">{children}</div>;
}
