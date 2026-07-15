import { motion } from "framer-motion";

export function LandingBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden bg-[#061116]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(80,213,240,0.22),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(24,169,153,0.2),transparent_25%),linear-gradient(180deg,#071014_0%,#08151b_46%,#061116_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <motion.div
        className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
        animate={{ x: [0, 28, 0], y: [0, 18, 0], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8rem] top-28 h-96 w-96 rounded-full bg-emerald-400/12 blur-3xl"
        animate={{ x: [0, -34, 0], y: [0, 24, 0], opacity: [0.36, 0.68, 0.36] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
