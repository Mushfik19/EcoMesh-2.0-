import { ProgressBar } from "@/components/dashboard/ProgressBar";

const toneClassName = {
  danger: "text-red-200",
  amber: "text-amber-200",
  cyan: "text-cyan-200",
};

export function ProbabilityCard({ label, value, tone = "cyan", trend }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className={`type-title mt-1 text-3xl ${toneClassName[tone] ?? toneClassName.cyan}`}>{value}%</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-muted-foreground">{trend} from prior cycle</span>
      </div>
      <ProgressBar value={value} tone={tone === "danger" ? "danger" : tone === "amber" ? "amber" : "cyan"} />
    </div>
  );
}
