import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, DatabaseZap } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { DynamicFormField } from "@/components/onboarding/DynamicFormField";
import { roleRegistrationConfig } from "@/data/roleRegistrationConfig";
import { roleOptions } from "@/data/roleOptions";
import { onboardingApi } from "@/services/onboardingApi";
import { useOnboardingRoleStore } from "@/store/onboardingRoleStore";
import { paths } from "@/routes/paths";

export function RoleRegistrationPage() {
  const navigate = useNavigate();
  const selectedRole = useOnboardingRoleStore((state) => state.selectedRole);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [nextStep, setNextStep] = useState("profile-setup");

  const config = selectedRole ? roleRegistrationConfig[selectedRole] : null;
  const role = roleOptions.find((item) => item.id === selectedRole);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Record<string, string>>({
    resolver: config ? zodResolver(config.schema) : undefined,
    mode: "onBlur",
  });

  async function onSubmit(values: Record<string, string>) {
    if (!selectedRole) return;
    const response = await onboardingApi.saveOnboardingStep("role-registration", {
      role: selectedRole,
      ...values,
    });
    setRequestId(response.requestId);
    setNextStep(response.payload.nextStep);
    setSubmitted(true);
  }

  if (!config || !role) {
    return (
      <div className="dark grid min-h-svh place-items-center bg-background px-5 text-foreground">
        <div className="glass-panel max-w-lg rounded-2xl p-6 text-center">
          <h1 className="type-display text-3xl">Select a role first</h1>
          <p className="type-body mt-3 text-muted-foreground">The dynamic registration form is generated from your selected role.</p>
          <Link className="btn btn-primary mt-6" to={paths.roleSelection}>Choose role</Link>
        </div>
      </div>
    );
  }

  const Icon = role.icon;

  return (
    <div className="dark min-h-svh overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(80,213,240,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(24,169,153,0.18),transparent_30%),linear-gradient(180deg,#071014_0%,#09242d_48%,#071014_100%)]" />
      <main className="mx-auto grid min-h-svh max-w-7xl gap-8 px-5 py-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <aside className="flex flex-col justify-center">
          <Link className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground" to={paths.roleSelection}>
            <ArrowLeft size={16} />
            Change role
          </Link>
          <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${role.accent} text-slate-950 shadow-glow`}>
            <Icon size={30} aria-hidden="true" />
          </div>
          <p className="type-mono mt-6 text-xs uppercase text-primary">Dynamic registration</p>
          <h1 className="type-display mt-3 text-4xl sm:text-5xl">{config.title}</h1>
          <p className="type-body mt-5 max-w-xl text-muted-foreground">{config.description}</p>
          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-4">
            <div className="flex items-center gap-2 text-primary">
              <DatabaseZap size={17} aria-hidden="true" />
              <span className="text-sm font-semibold">Mock submission only</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">This form is ready for a future role-registration API endpoint.</p>
          </div>
        </aside>

        <section className="flex items-center">
          <div className="glass-panel w-full rounded-2xl p-5 sm:p-6">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="py-8 text-center"
                >
                  <CheckCircle2 className="mx-auto text-primary" size={52} />
                  <h2 className="type-display mt-5 text-3xl">Registration captured</h2>
                  <p className="type-body mx-auto mt-3 max-w-lg text-muted-foreground">
                    Mock request {requestId} is ready for future backend approval and onboarding persistence.
                  </p>
                  <button
                    className="btn btn-primary mt-7"
                    type="button"
                    onClick={() =>
                      navigate(
                        nextStep === "dashboard"
                          ? paths.dashboard
                          : nextStep === "profile-setup"
                            ? paths.profileSetup
                            : nextStep === "location-selection"
                              ? paths.locationSelection
                              : nextStep === "emergency-contact"
                                ? paths.emergencyContact
                                : nextStep === "device-registration"
                                  ? paths.deviceRegistration
                                  : nextStep === "approval-workflow"
                                    ? paths.approvalWorkflow
                                    : paths.roleSelection,
                      )
                    }
                  >
                    {nextStep === "dashboard" ? "Open dashboard" : "Continue profile setup"}
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {config.fields.map((field) => (
                      <DynamicFormField
                        key={field.name}
                        field={field}
                        register={register}
                        error={errors[field.name]}
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <Link className="btn btn-outline" to={paths.roleSelection}>Back</Link>
                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit registration"}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
