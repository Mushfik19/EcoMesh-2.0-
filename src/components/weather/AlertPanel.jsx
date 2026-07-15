import { AlertTriangle, Info } from "lucide-react";

const severityClassName = {
  critical: "border-red-400/30 bg-red-400/10 text-red-100",
  warning: "border-amber-400/30 bg-amber-400/10 text-amber-100",
  info: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
};

export function AlertPanel({ alerts }) {
  return (
    <div className="space-y-3">
      {alerts.map((alert) => {
        const Icon = alert.severity === "info" ? Info : AlertTriangle;
        return (
          <article key={alert.id} className={`rounded-xl border p-4 ${severityClassName[alert.severity]}`}>
            <div className="mb-3 flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <Icon size={17} aria-hidden="true" />
                <h3 className="type-title text-base">{alert.title}</h3>
              </div>
              <span className="type-mono text-[10px] uppercase">{alert.severity}</span>
            </div>
            <p className="text-sm opacity-85">{alert.area} · {alert.effective}</p>
            <p className="mt-3 text-sm opacity-85">{alert.instruction}</p>
          </article>
        );
      })}
    </div>
  );
}
