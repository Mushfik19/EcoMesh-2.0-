import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export interface ArchitectureLayerCardProps {
  layer: string;
  title: string;
  description: string;
  icon: LucideIcon;
  responsibilities: string[];
}

export function ArchitectureLayerCard({ description, icon: Icon, layer, responsibilities, title }: ArchitectureLayerCardProps) {
  return (
    <motion.article
      className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-control backdrop-blur-xl"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: "var(--shadow-glow)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-primary/12 text-primary ring-1 ring-primary/15">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <p className="type-mono text-xs uppercase text-primary">{layer}</p>
          <h3 className="type-title mt-1 text-xl">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        {responsibilities.map((responsibility) => (
          <div className="rounded-md border border-white/10 bg-background/45 px-3 py-2 text-sm text-muted-foreground" key={responsibility}>
            {responsibility}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
