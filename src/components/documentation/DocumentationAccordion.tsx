import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface DocumentationAccordionProps {
  title: string;
  eyebrow: string;
  summary: string;
  icon: LucideIcon;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function DocumentationAccordion({ children, defaultOpen = false, eyebrow, icon: Icon, summary, title }: DocumentationAccordionProps) {
  return (
    <motion.details
      className="group rounded-lg border border-white/10 bg-surface/72 p-0 shadow-panel backdrop-blur-xl"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 marker:hidden">
        <div className="flex gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/12 text-primary ring-1 ring-primary/15">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="type-mono text-xs uppercase text-primary">{eyebrow}</p>
            <h2 className="type-title mt-1 text-2xl">{title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{summary}</p>
          </div>
        </div>
        <ChevronDown className="mt-2 h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="border-t border-white/10 p-5 pt-5">{children}</div>
    </motion.details>
  );
}

export function DocList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div className="rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-muted-foreground" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export function DocCodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/24 p-4 text-sm leading-6 text-cyan-100">
      <code>{children}</code>
    </pre>
  );
}
