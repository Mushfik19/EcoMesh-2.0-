import { motion } from "framer-motion";
import { ArrowRight, Gauge, PlayCircle, ShieldAlert, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { heroSignals } from "@/data/landingHeroData";
import { paths } from "@/routes/paths";
import { LandingOperationsMap } from "@/components/landing/LandingOperationsMap";

const heroSupportCards = [
  {
    icon: ShieldAlert,
    label: "Disaster response",
    value: "Emergency-ready",
  },
  {
    icon: Waves,
    label: "Marine weather",
    value: "Fishing-safe routing",
  },
  {
    icon: Gauge,
    label: "Edge AI",
    value: "Fast local risk scoring",
  },
];

export function LandingHeroSection() {
  return (
    <section className="relative px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pb-28 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-md border border-cyan-200/16 bg-cyan-200/10 px-3 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <Gauge className="h-4 w-4" aria-hidden="true" />
              National climate intelligence for coastal Bangladesh
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="type-display mt-7 max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
                AI-Powered Coastal Disaster Intelligence Platform
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/78 sm:text-xl">
                Protecting Bangladesh&apos;s coastal communities through Edge AI, LoRa Mesh Networking, Digital Twin Technology,
                and real-time climate intelligence.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
            >
              <Link className="btn btn-primary btn-lg" to={paths.dashboard}>
                Launch Live Dashboard
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link className="btn btn-outline btn-lg border-white/15 bg-white/[0.07] text-white hover:bg-white/12 hover:text-white" to={paths.simulation}>
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                Watch Simulation
              </Link>
              <Link className="btn btn-accent btn-lg" to={paths.roleSelection}>
                Join EcoMesh Network
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              {heroSignals.map((signal) => (
                <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl" key={signal.label}>
                  <p className="type-mono text-[0.68rem] uppercase text-slate-300/70">{signal.label}</p>
                  <p className="type-title mt-2 text-3xl text-white">{signal.value}</p>
                  <p className="mt-1 text-sm text-slate-300/76">{signal.detail}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-4">
            <LandingOperationsMap />
            <div className="grid gap-3 sm:grid-cols-3">
              {heroSupportCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
                    key={card.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.35 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-200/12 text-cyan-100 ring-1 ring-cyan-100/12">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.08em] text-slate-300/70">{card.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{card.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
