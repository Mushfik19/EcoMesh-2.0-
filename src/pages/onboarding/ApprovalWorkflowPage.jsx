import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, Clock3 } from "lucide-react";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { approvalStages } from "@/constants/onboarding";
import { onboardingApi } from "@/services/onboardingApi";
import { paths } from "@/routes/paths";

export function ApprovalWorkflowPage() {
  const navigate = useNavigate();

  async function handleComplete() {
    await onboardingApi.saveOnboardingStep("approval-workflow", { status: "complete" });
    navigate(paths.dashboard);
  }

  return (
    <OnboardingLayout eyebrow="Approval Workflow" title="Your access request is under review." description="EcoMesh uses role, location, and device approval before full operational access. This mock page is ready for a backend approval queue.">
      <StepIndicator activeStep="approval" />
      <div className="space-y-4">
        {approvalStages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            {stage.status === "pending" ? <Clock3 className="text-amber-200" size={22} /> : <CheckCircle2 className="text-emerald-300" size={22} />}
            <div>
              <p className="type-title text-lg">{stage.label}</p>
              <p className="text-sm text-muted-foreground">{stage.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Link className="btn btn-outline" to={paths.userProfile}>View profile</Link>
        <button className="btn btn-primary" type="button" onClick={handleComplete}>Enter dashboard</button>
      </div>
    </OnboardingLayout>
  );
}
