import { useNavigate } from "react-router-dom";
import { FieldGroup, FormActions, SelectInput, TextInput } from "@/components/onboarding/FormControls";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { onboardingApi } from "@/services/onboardingApi";
import { paths } from "@/routes/paths";

export function LocationSelectionPage() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await onboardingApi.saveOnboardingStep("location-selection", Object.fromEntries(new FormData(event.currentTarget)));
    navigate(
      response.payload.nextStep === "emergency-contact"
        ? paths.emergencyContact
        : response.payload.nextStep === "device-registration"
          ? paths.deviceRegistration
          : response.payload.nextStep === "approval-workflow"
            ? paths.approvalWorkflow
            : paths.dashboard,
    );
  }

  return (
    <OnboardingLayout eyebrow="Location Selection" title="Anchor your coastal operating zone." description="Location selection prepares future weather, alerts, villages, nodes, and approval routing.">
      <StepIndicator activeStep="location" />
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldGroup label="District"><SelectInput name="district"><option>Khulna</option><option>Satkhira</option><option>Barguna</option><option>Bagerhat</option></SelectInput></FieldGroup>
          <FieldGroup label="Upazila"><TextInput name="upazila" required placeholder="Koyra" /></FieldGroup>
        </div>
        <FieldGroup label="Village / station"><TextInput name="village" required placeholder="Dacope Community 4" /></FieldGroup>
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldGroup label="Latitude"><TextInput name="lat" required placeholder="22.8456" /></FieldGroup>
          <FieldGroup label="Longitude"><TextInput name="lng" required placeholder="89.5403" /></FieldGroup>
        </div>
        <FormActions><button className="btn btn-primary" type="submit">Save location</button></FormActions>
      </form>
    </OnboardingLayout>
  );
}
