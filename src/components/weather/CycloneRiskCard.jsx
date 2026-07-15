import { Radar } from "lucide-react";
import { RiskGauge } from "@/components/prediction/RiskGauge";

export function CycloneRiskCard({ cyclone }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <RiskGauge
        value={cyclone.score}
        label="Cyclone risk"
        level={cyclone.category}
        description={`${cyclone.bearing}. Estimated arrival window: ${cyclone.etaHours} hours.`}
        height={260}
      />
      <div className="space-y-3">
        {[
          ["Pressure drop", `${cyclone.pressureDropMb} mb`],
          ["Wind shear", cyclone.windShear],
          ["Bearing", cyclone.bearing],
          ["ETA", `${cyclone.etaHours} hours`],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Radar size={15} /> {label}</span>
            <span className="text-right text-sm font-semibold text-foreground">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
