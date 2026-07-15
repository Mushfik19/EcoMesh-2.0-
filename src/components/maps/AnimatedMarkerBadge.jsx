export function AnimatedMarkerBadge({ tone = "primary" }) {
  const toneClassName = {
    primary: "bg-primary",
    cyan: "bg-cyan-300",
    emerald: "bg-emerald-300",
    blue: "bg-blue-300",
    amber: "bg-amber-300",
    red: "bg-red-300",
    violet: "bg-violet-300",
  };

  return (
    <span className={`animated-marker relative flex h-4 w-4 items-center justify-center rounded-full ${toneClassName[tone] ?? toneClassName.primary}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-background" />
    </span>
  );
}
