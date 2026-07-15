import { RadioTower } from "lucide-react";
import { motion } from "framer-motion";
import type { NetworkCluster } from "@/features/dashboard/types/dashboard.types";

export interface NetworkStatusProps {
  clusters: NetworkCluster[];
}

export function NetworkStatus({ clusters }: NetworkStatusProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="mb-5">
        <p className="type-mono text-xs uppercase text-primary">Mesh command</p>
        <h2 className="type-title mt-1 text-2xl">Network Status</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {clusters.map((cluster, index) => {
          const total = cluster.online + cluster.degraded + cluster.offline;
          const onlineWidth = (cluster.online / total) * 100;
          const degradedWidth = (cluster.degraded / total) * 100;
          const offlineWidth = Math.max(0, 100 - onlineWidth - degradedWidth);

          return (
            <motion.article
              className="rounded-lg border border-white/10 bg-white/[0.045] p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={cluster.id}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/12 text-primary">
                    <RadioTower className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{cluster.name}</h3>
                    <p className="text-xs text-muted-foreground">{cluster.latencyMs}ms median latency</p>
                  </div>
                </div>
                <span className="rounded-md bg-emerald-300/12 px-2 py-1 text-xs font-bold text-emerald-100">{cluster.packetDelivery}%</span>
              </div>

              <div className="mt-5 flex h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-emerald-300" style={{ width: `${onlineWidth}%` }} />
                <div className="h-full bg-amber-300" style={{ width: `${degradedWidth}%` }} />
                <div className="h-full bg-rose-300" style={{ width: `${offlineWidth}%` }} />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-md bg-emerald-300/10 p-2 text-emerald-100">
                  <p className="font-bold">{cluster.online}</p>
                  <p>Online</p>
                </div>
                <div className="rounded-md bg-amber-300/10 p-2 text-amber-100">
                  <p className="font-bold">{cluster.degraded}</p>
                  <p>Degraded</p>
                </div>
                <div className="rounded-md bg-rose-300/10 p-2 text-rose-100">
                  <p className="font-bold">{cluster.offline}</p>
                  <p>Offline</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
