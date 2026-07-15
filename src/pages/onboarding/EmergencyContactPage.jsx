import { useNavigate } from "react-router-dom";
import { FieldGroup, FormActions, SelectInput, TextInput } from "@/components/onboarding/FormControls";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { onboardingApi } from "@/services/onboardingApi";
import { paths } from "@/routes/paths";

export function EmergencyContactPage() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await onboardingApi.saveOnboardingStep("emergency-contact", Object.fromEntries(new FormData(event.currentTarget)));
    navigate(
      response.payload.nextStep === "device-registration"
        ? paths.deviceRegistration
        : response.payload.nextStep === "approval-workflow"
          ? paths.approvalWorkflow
          : paths.dashboard,
    );
  }

  return (
    <OnboardingLayout eyebrow="Emergency Contact" title="Add trusted escalation contacts." description="EcoMesh can later notify local contacts when alerts, rescue actions, or device incidents occur.">
      <StepIndicator activeStep="contact" />
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldGroup label="Contact name"><TextInput name="contactName" required placeholder="Md. Karim" /></FieldGroup>
          <FieldGroup label="Phone number"><TextInput name="contactPhone" required placeholder="+88018..." /></FieldGroup>
        </div>
        <FieldGroup label="Relationship"><SelectInput name="relationship"><option>Family</option><option>Supervisor</option><option>District desk</option><option>Volunteer lead</option></SelectInput></FieldGroup>
        <FormActions><button className="btn btn-primary" type="submit">Save contact</button></FormActions>
      </form>
    </OnboardingLayout>
  );
}
