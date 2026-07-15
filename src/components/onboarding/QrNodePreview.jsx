export function QrNodePreview({ nodeId }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
      <p className="type-mono text-xs uppercase text-primary">QR Code Node Registration</p>
      <div className="mt-4 grid aspect-square max-w-52 grid-cols-6 gap-1 rounded-xl bg-white p-3">
        {Array.from({ length: 36 }).map((_, index) => (
          <span
            key={index}
            className={[
              "rounded-sm",
              (index * 7 + nodeId.length) % 5 < 2 ? "bg-slate-950" : "bg-slate-200",
            ].join(" ")}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Mock QR payload: {nodeId}</p>
    </div>
  );
}
