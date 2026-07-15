import { motion } from "framer-motion";
import { Anchor, Home, RadioTower, Router } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { statusClasses } from "@/features/dashboard/constants/dashboard.constants";
import type { MapEntity } from "@/features/dashboard/types/dashboard.types";
import { cn } from "@/lib/cn";

export interface LiveMapPreviewProps {
  entities: MapEntity[];
}

const entityIcons: Record<MapEntity["type"], LucideIcon> = {
  boat: Anchor,
  gateway: Router,
  node: RadioTower,
  shelter: Home,
};

export function LiveMapPreview({ entities }: LiveMapPreviewProps) {
  return (
    <section className="relative min-h-[28rem] overflow-hidden rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="relative z-10 mb-5">
        <p className="type-mono text-xs uppercase text-primary">Live operations map</p>
        <h2 className="type-title mt-1 text-2xl">Coastal Mesh Preview</h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">Synthetic command map showing gateways, field nodes, shelters, and response boats.</p>
      </div>

      <div className="absolute inset-5 top-28 overflow-hidden rounded-lg border border-white/10 bg-[#071014]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="coast-silhouette absolute inset-x-0 bottom-0 h-3/4 opacity-90" />
        <motion.div
          className="radar-sweep absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15"
          animate={{ scale: [0.92, 1.04, 0.92] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {entities.map((entity, index) => {
          const Icon = entityIcons[entity.type];

          return (
            <motion.div
              className="absolute"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              style={{ left: `${entity.x}%`, top: `${entity.y}%` }}
              key={entity.id}
            >
              <div className="map-marker">
                <span className={cn("map-marker-core grid place-items-center border border-white/20", statusClasses[entity.status])}>
                  <Icon className="h-3 w-3" aria-hidden="true" />
                </span>
              </div>
              <span className="absolute left-4 top-3 whitespace-nowrap rounded-md border border-white/10 bg-black/35 px-2 py-1 text-[0.68rem] font-semibold text-white backdrop-blur">
                {entity.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
