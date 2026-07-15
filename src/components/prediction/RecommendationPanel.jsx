export function RecommendationPanel({ headline, bullets }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/15 to-cyan-400/10 p-5">
      <p className="type-mono text-xs uppercase text-primary">AI Recommendation</p>
      <h3 className="type-title mt-2 text-2xl">{headline}</h3>
      <ul className="mt-5 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm text-muted-foreground">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
