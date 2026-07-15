import { onboardingSteps } from "@/constants/onboarding";

export function StepIndicator({ activeStep }) {
  const activeIndex = onboardingSteps.findIndex((step) => step.id === activeStep);

  return (
    <div className="mb-6 overflow-x-auto pb-2">
      <ol className="flex min-w-max gap-2" aria-label="Onboarding progress">
        {onboardingSteps.map((step, index) => {
          const complete = index < activeIndex;
          const active = index === activeIndex;
          return (
            <li
              key={step.id}
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold",
                active ? "border-primary bg-primary text-primary-foreground" : complete ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "border-white/10 bg-white/[0.04] text-muted-foreground",
              ].join(" ")}
            >
              {step.label}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
