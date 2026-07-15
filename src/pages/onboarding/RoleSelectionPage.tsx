import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, HelpCircle, LockKeyhole, ShieldCheck, Waves } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { RoleGrid } from "@/components/onboarding/RoleGrid";
import { roleOptions } from "@/data/roleOptions";
import { onboardingApi } from "@/services/onboardingApi";
import { useOnboardingRoleStore } from "@/store/onboardingRoleStore";
import { paths } from "@/routes/paths";

export function RoleSelectionPage() {
  const navigate = useNavigate();
  const selectedRole = useOnboardingRoleStore((state) => state.selectedRole);
  const setSelectedRole = useOnboardingRoleStore((state) => state.setSelectedRole);
  const selectedRoleLabel = roleOptions.find((role) => role.id === selectedRole)?.title;

  async function handleContinue() {
    if (!selectedRole) return;
    const response = await onboardingApi.saveOnboardingStep("role-selection", { role: selectedRole });
    navigate(response.payload.nextStep === "dashboard" ? paths.dashboard : paths.roleRegistration);
  }

  return (
    <div className="dark min-h-svh overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_8%,rgba(80,213,240,0.24),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(24,169,153,0.2),transparent_30%),linear-gradient(180deg,#071014_0%,#09242d_48%,#071014_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(80,213,240,0.14),transparent)]" />

      <main className="mx-auto flex min-h-svh max-w-7xl flex-col px-5 py-6 lg:px-8">
        <header className="flex items-center justify-between">
          <Link to={paths.landing} className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mission shadow-glow">
              <Waves size={22} aria-hidden="true" />
            </span>
            <span>
              <span className="type-title block text-lg">EcoMesh 2.0</span>
              <span className="type-mono text-[0.68rem] uppercase text-muted-foreground">Coastal resilience network</span>
            </span>
          </Link>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-muted-foreground sm:flex">
            <LockKeyhole size={14} aria-hidden="true" />
            Secure onboarding
          </div>
        </header>

        <section className="flex flex-1 flex-col justify-center py-10">
          <motion.div
            className="mx-auto mb-9 max-w-3xl text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <ShieldCheck size={16} aria-hidden="true" />
              Edge-AI · LoRa Mesh · Digital Twin
            </div>
            <h1 className="type-display text-4xl sm:text-5xl lg:text-6xl">Welcome to EcoMesh Network</h1>
            <p className="type-body mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Choose your role to personalize your experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <RoleGrid selectedRole={selectedRole} onSelect={setSelectedRole} />
          </motion.div>

          <div className="mt-8 min-h-14">
            <AnimatePresence>
              {selectedRole ? (
                <motion.div
                  className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/10 p-4 backdrop-blur-xl sm:flex-row"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.24 }}
                >
                  <p className="text-center text-sm text-muted-foreground sm:text-left">
                    Continue as <span className="font-semibold text-primary">{selectedRoleLabel}</span> and set up your coastal operations profile.
                  </p>
                  <button type="button" className="btn btn-primary w-full sm:w-auto" onClick={handleContinue}>
                    Continue
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-5 text-sm text-muted-foreground md:flex-row">
          <Link className="hover:text-foreground" to={paths.login}>Already have an account? Sign In</Link>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="#help"><HelpCircle size={14} />Need Help?</a>
            <a className="hover:text-foreground" href="#privacy">Privacy Policy</a>
            <a className="hover:text-foreground" href="#terms">Terms of Service</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
