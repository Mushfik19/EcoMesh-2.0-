import { motion } from "framer-motion";
import { AlertQueue } from "@/components/alerts/AlertQueue";
import { AlertSeverityPanel } from "@/components/alerts/AlertSeverityPanel";
import { LoadingSkeleton } from "@/components/common/LoadingSkeleton";
import { useMockQuery } from "@/hooks/useMockQuery";
import { mockDataService } from "@/services/mockDataService";

export function AlertsCommandPage() {
  const { data: alerts, isLoading } = useMockQuery(mockDataService.getAlerts);

  if (isLoading || !alerts) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <motion.div className="space-y-6 p-4 sm:p-6 lg:p-8" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
      <header className="max-w-4xl">
        <p className="type-mono text-xs uppercase text-primary">Risk command</p>
        <h1 className="type-display mt-2 text-4xl">Alert Operations Center</h1>
        <p className="mt-3 text-muted-foreground">
          Triage network degradation, cyclone escalation, flood risk, and battery incidents with a single operator-ready queue.
        </p>
      </header>
      <AlertSeverityPanel alerts={alerts} />
      <AlertQueue alerts={alerts} />
    </motion.div>
  );
}
