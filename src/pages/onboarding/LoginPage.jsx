import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldGroup, FormActions, TextInput } from "@/components/onboarding/FormControls";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { onboardingApi } from "@/services/onboardingApi";
import { paths } from "@/routes/paths";
import { authSeed } from "@/store/authStore";

export function LoginPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    setError("");
    setIsSubmitting(true);

    try {
      const response = await onboardingApi.login(formData);
      navigate(response.payload.nextStep === "dashboard" ? paths.dashboard : paths.otp);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to verify credentials.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <OnboardingLayout eyebrow="Login" title="Return to mission control." description="Use your username or phone number and password. OTP verification is mocked for this frontend-only build.">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <FieldGroup label="Username or phone number"><TextInput name="identifier" required placeholder="mushfik or +88017..." autoComplete="username" /></FieldGroup>
        <FieldGroup label="Password"><TextInput name="password" type="password" required /></FieldGroup>
        <div className="rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-muted-foreground">
          <p className="font-semibold text-primary">Demo admin access</p>
          <p className="mt-1">Username: <span className="text-foreground">{authSeed.adminUsername}</span></p>
          <p>Password: <span className="text-foreground">{authSeed.adminPassword}</span></p>
        </div>
        {error ? <p className="rounded-xl border border-rose-300/25 bg-rose-300/10 p-3 text-sm text-rose-100">{error}</p> : null}
        <FormActions>
          <Link className="btn btn-outline" to={paths.register}>Create account</Link>
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Checking..." : "Login"}</button>
        </FormActions>
      </form>
    </OnboardingLayout>
  );
}
