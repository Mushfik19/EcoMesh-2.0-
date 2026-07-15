import { motion } from "framer-motion";
import { NodeFleetPanel } from "@/components/mesh/NodeFleetPanel";
import { NodeTable } from "@/components/mesh/NodeTable";
import { LoadingSkeleton } from "@/components/common/LoadingSkeleton";
import { useMockQuery } from "@/hooks/useMockQuery";
import { mockDataService } from "@/services/mockDataService";

export function DevicesInventoryPage() {
  const { data: nodes, isLoading } = useMockQuery(mockDataService.getNodes);

  if (isLoading || !nodes) {
    return (
      <div className="space-y-4 p-4 sm:p-6 lg:p-8">
        <LoadingSkeleton className="h-32 rounded-lg" />
        <LoadingSkeleton className="h-96 rounded-lg" />
      </div>
    );
  }

  return (
    <motion.div className="space-y-6 p-4 sm:p-6 lg:p-8" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
      <header className="max-w-4xl">
        <p className="type-mono text-xs uppercase text-primary">Mesh operations</p>
        <h1 className="type-display mt-2 text-4xl">Device & Node Command</h1>
        <p className="mt-3 text-muted-foreground">
          Monitor coastal LoRa nodes, gateway routing quality, solar power state, and packet delivery using local mock telemetry.
        </p>
      </header>
      <NodeFleetPanel nodes={nodes} />
      <NodeTable nodes={nodes} />
    </motion.div>
  );
}
