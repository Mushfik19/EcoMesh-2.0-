import { motion } from "framer-motion";
import { ArrowRight, Gauge, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBangladeshMap } from "@/components/landing/AnimatedBangladeshMap";
import { heroCapabilities, heroSignals } from "@/data/landingHeroData";
import { paths } from "@/routes/paths";

export function LandingHero() {
  return (
    <section className="relative px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            className="inline-flex items-center gap-2 rounded-md border border-cyan-200/16 bg-cyan-200/10 px-3 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <Gauge className="h-4 w-4" aria-hidden="true" />
            Climate Intelligence + Edge AI for coastal resilience
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <h1 className="type-display mt-7 max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
              The mission control layer for climate-resilient coastal Bangladesh.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/78 sm:text-xl">
              EcoMesh 2.0 combines self-healing LoRa mesh networks, edge AI prediction, and a live digital twin to help coastal teams protect lives, livelihoods, and blue economy operations before disaster strikes.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <Link className="btn btn-primary btn-lg" to={paths.roleSelection}>
              Join EcoMesh Network
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link className="btn btn-outline btn-lg border-white/15 bg-white/[0.07] text-white hover:bg-white/12 hover:text-white" to={paths.dashboard}>
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              Open Mission Demo
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34 }}
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

        <AnimatedBangladeshMap />
      </div>

      <motion.div
        className="mx-auto mt-12 grid max-w-7xl gap-3 md:grid-cols-2 xl:grid-cols-4"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.46, ease: "easeOut" }}
      >
        {heroCapabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <motion.article
              className="group rounded-lg border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:border-cyan-200/32 hover:bg-white/[0.085]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.18 }}
              key={capability.title}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-200/12 text-cyan-100 ring-1 ring-cyan-100/12 transition group-hover:bg-cyan-200/18">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="type-title mt-4 text-lg text-white">{capability.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300/76">{capability.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
