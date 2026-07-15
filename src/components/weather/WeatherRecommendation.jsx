import { BrainCircuit } from "lucide-react";

export function WeatherRecommendation({ recommendation }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 to-cyan-400/10 p-5">
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
          <BrainCircuit size={22} aria-hidden="true" />
        </div>
        <div>
          <p className="type-mono text-xs uppercase text-primary">AI Recommendation · {recommendation.confidence}% confidence</p>
          <h3 className="type-title mt-2 text-2xl">{recommendation.headline}</h3>
        </div>
      </div>
      <div className="mt-5 grid gap-3">
        {recommendation.actions.map((action) => (
          <div key={action} className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm text-muted-foreground">
            {action}
          </div>
        ))}
      </div>
    </div>
  );
}
