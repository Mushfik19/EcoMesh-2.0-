import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldGroup, FormActions, TextInput } from "@/components/onboarding/FormControls";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { onboardingApi } from "@/services/onboardingApi";
import { paths } from "@/routes/paths";
import { authSeed } from "@/store/authStore";

export function OtpPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const response = await onboardingApi.verifyOtp(Object.fromEntries(new FormData(event.currentTarget)));
      navigate(
        response.payload.nextStep === "dashboard"
          ? paths.dashboard
          : response.payload.nextStep === "role-selection"
            ? paths.roleSelection
            : paths.roleRegistration,
      );
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to verify OTP.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <OnboardingLayout eyebrow="OTP Verification" title="Verify trusted access." description="Enter the one-time code sent to your registered mobile number. The demo code is shown below for local testing.">
      <StepIndicator activeStep="otp" />
      <form onSubmit={handleSubmit} className="grid gap-4">
        <FieldGroup label="6 digit OTP" hint={`Demo code: ${authSeed.mockOtp}`}><TextInput name="otp" required inputMode="numeric" minLength={6} maxLength={6} placeholder="132424" /></FieldGroup>
        {error ? <p className="rounded-xl border border-rose-300/25 bg-rose-300/10 p-3 text-sm text-rose-100">{error}</p> : null}
        <FormActions>
          <button className="btn btn-outline" type="button">Resend code</button>
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Verifying..." : "Verify OTP"}</button>
        </FormActions>
      </form>
    </OnboardingLayout>
  );
}
