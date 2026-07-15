export function MapLegend({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item.key} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
          <div className="flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${item.color}`} />
            <span className="text-sm text-muted-foreground">{item.label}</span>
          </div>
          <span className="type-mono text-xs text-muted-foreground">{item.key}</span>
        </div>
      ))}
    </div>
  );
}
