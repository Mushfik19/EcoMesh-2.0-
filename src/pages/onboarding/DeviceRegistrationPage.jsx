import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldGroup, FormActions, SelectInput, TextInput } from "@/components/onboarding/FormControls";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { QrNodePreview } from "@/components/onboarding/QrNodePreview";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { deviceTypes } from "@/constants/onboarding";
import { onboardingApi } from "@/services/onboardingApi";
import { paths } from "@/routes/paths";

export function DeviceRegistrationPage() {
  const navigate = useNavigate();
  const [nodeId, setNodeId] = useState("LN-KHL-024");

  async function handleSubmit(event) {
    event.preventDefault();
    await onboardingApi.registerDevice(Object.fromEntries(new FormData(event.currentTarget)));
    const response = await onboardingApi.saveOnboardingStep("device-registration", { nodeId });
    navigate(
      response.payload.nextStep === "approval-workflow"
        ? paths.approvalWorkflow
        : paths.dashboard,
    );
  }

  return (
    <OnboardingLayout eyebrow="Device Registration" title="Bind devices and LoRa nodes." description="Register hardware ownership now. Future backend integration can validate QR payloads, ownership, and node firmware.">
      <StepIndicator activeStep="device" />
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldGroup label="Device type"><SelectInput name="deviceType">{deviceTypes.map((type) => <option key={type}>{type}</option>)}</SelectInput></FieldGroup>
            <FieldGroup label="Node ID"><TextInput name="nodeId" required value={nodeId} onChange={(event) => setNodeId(event.target.value)} /></FieldGroup>
          </div>
          <FieldGroup label="QR payload"><TextInput name="qrPayload" required value={`ecomesh://node/${nodeId}`} readOnly /></FieldGroup>
          <FieldGroup label="Install location"><TextInput name="installLocation" required placeholder="Koyra tide station" /></FieldGroup>
          <FormActions><button className="btn btn-primary" type="submit">Submit for approval</button></FormActions>
        </form>
        <QrNodePreview nodeId={nodeId} />
      </div>
    </OnboardingLayout>
  );
}
