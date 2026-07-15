import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Waves } from "lucide-react";
import { paths } from "@/routes/paths";
import { onboardingFeatureCards } from "@/constants/onboarding";

export function OnboardingLayout({ eyebrow, title, description, children }) {
  return (
    <div className="dark min-h-svh overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(80,213,240,0.2),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(24,169,153,0.18),transparent_28%),linear-gradient(180deg,#071014_0%,#0b2027_58%,#071014_100%)]" />
      <header className="border-b border-white/10 bg-background/70 px-5 py-4 backdrop-blur-xl lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to={paths.landing} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-mission shadow-glow">
              <Waves size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="type-title block text-base">EcoMesh 2.0</span>
              <span className="type-mono text-[0.68rem] uppercase text-muted-foreground">Secure onboarding</span>
            </span>
          </Link>
          <Link className="btn btn-outline btn-sm" to={paths.login}>Login</Link>
        </div>
      </header>

      <main className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <aside className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <p className="type-mono text-xs uppercase text-primary">{eyebrow}</p>
            <h1 className="type-display mt-3 text-4xl sm:text-5xl">{title}</h1>
            <p className="type-body mt-5 max-w-xl text-muted-foreground">{description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {onboardingFeatureCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="text-primary" size={20} aria-hidden="true" />
                    <p className="type-title mt-3 text-base">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </aside>
        <section className="flex items-center">
          <div className="glass-panel w-full rounded-2xl p-5 sm:p-6">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
