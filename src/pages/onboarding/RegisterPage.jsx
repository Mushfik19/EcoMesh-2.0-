import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormActions, FieldGroup, TextInput } from "@/components/onboarding/FormControls";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { onboardingApi } from "@/services/onboardingApi";
import { paths } from "@/routes/paths";

export function RegisterPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await onboardingApi.registerUser(formData);
      navigate(response.payload.nextStep === "otp-verification" ? paths.otp : paths.roleSelection);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to create account.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <OnboardingLayout eyebrow="Registration" title="Create your EcoMesh identity." description="Register once, then complete role, profile, location, emergency contact, and device verification.">
      <StepIndicator activeStep="register" />
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldGroup label="Full name"><TextInput name="name" required placeholder="Ayesha Rahman" /></FieldGroup>
          <FieldGroup label="Phone number"><TextInput name="phone" required placeholder="+88017..." /></FieldGroup>
        </div>
        <FieldGroup label="Email"><TextInput type="email" name="email" required placeholder="name@example.org" /></FieldGroup>
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldGroup label="Password"><TextInput type="password" name="password" required minLength={8} /></FieldGroup>
          <FieldGroup label="Confirm password"><TextInput type="password" name="confirmPassword" required minLength={8} /></FieldGroup>
        </div>
        {error ? <p className="rounded-xl border border-rose-300/25 bg-rose-300/10 p-3 text-sm text-rose-100">{error}</p> : null}
        <FormActions>
          <Link className="btn btn-outline" to={paths.login}>Already registered</Link>
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Creating..." : "Continue"}</button>
        </FormActions>
      </form>
    </OnboardingLayout>
  );
}
