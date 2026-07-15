import { useNavigate } from "react-router-dom";
import { FieldGroup, FormActions, SelectInput, TextInput } from "@/components/onboarding/FormControls";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { onboardingApi } from "@/services/onboardingApi";
import { paths } from "@/routes/paths";

export function ProfileSetupPage() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await onboardingApi.saveOnboardingStep("profile-setup", Object.fromEntries(new FormData(event.currentTarget)));
    navigate(
      response.payload.nextStep === "location-selection"
        ? paths.locationSelection
        : response.payload.nextStep === "emergency-contact"
          ? paths.emergencyContact
          : response.payload.nextStep === "device-registration"
            ? paths.deviceRegistration
            : response.payload.nextStep === "approval-workflow"
              ? paths.approvalWorkflow
              : paths.dashboard,
    );
  }

  return (
    <OnboardingLayout eyebrow="Profile Setup" title="Complete your field profile." description="This information prepares future backend authorization, notifications, and approval review.">
      <StepIndicator activeStep="profile" />
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldGroup label="Organization"><TextInput name="organization" required placeholder="Coastal Resilience Cell" /></FieldGroup>
          <FieldGroup label="Designation"><TextInput name="designation" required placeholder="District Coordinator" /></FieldGroup>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldGroup label="Language"><SelectInput name="language"><option>Bangla</option><option>English</option></SelectInput></FieldGroup>
          <FieldGroup label="Notification channel"><SelectInput name="channel"><option>SMS + App</option><option>App only</option><option>SMS only</option></SelectInput></FieldGroup>
        </div>
        <FormActions><button className="btn btn-primary" type="submit">Save profile</button></FormActions>
      </form>
    </OnboardingLayout>
  );
}
