import { motion } from "framer-motion";
import { ArrowRight, RadioTower } from "lucide-react";
import { Link } from "react-router-dom";
import { landingNavItems } from "@/data/landingHeroData";
import { paths } from "@/routes/paths";

export function LandingHeader() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-white/[0.065] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <Link to={paths.landing} className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(80,213,240,0.28)]">
            <RadioTower className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-white">EcoMesh 2.0</span>
            <span className="hidden text-xs text-cyan-100/70 sm:block">Climate intelligence network</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex" aria-label="Landing navigation">
          {landingNavItems.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200/75 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link className="btn btn-ghost hidden text-slate-200 hover:bg-white/10 hover:text-white sm:inline-flex" to={paths.login}>
            Sign in
          </Link>
          <Link className="btn btn-primary btn-sm shadow-[0_0_34px_rgba(24,169,153,0.28)]" to={paths.roleSelection}>
            Join Network
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
