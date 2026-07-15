import { motion } from "framer-motion";
import { Activity, Gauge, MapPinned, RadioTower, Satellite, TriangleAlert, Waves, Wind } from "lucide-react";

const mapNodes = [
  { id: "gateway", label: "Gateway", x: 48, y: 34, tone: "#50d5f0", icon: RadioTower },
  { id: "boat-1", label: "Fishing Boats", x: 24, y: 63, tone: "#18a999", icon: Waves },
  { id: "node-1", label: "Live Node", x: 38, y: 46, tone: "#5fe08f", icon: Satellite },
  { id: "node-2", label: "Live Node", x: 60, y: 52, tone: "#a69bff", icon: Gauge },
  { id: "cyclone", label: "Cyclone Cell", x: 75, y: 24, tone: "#ff9a57", icon: TriangleAlert },
  { id: "weather", label: "Weather Front", x: 58, y: 18, tone: "#77b7ff", icon: Wind },
];

const links = [
  ["gateway", "node-1"],
  ["gateway", "node-2"],
  ["node-1", "boat-1"],
  ["node-2", "cyclone"],
  ["weather", "gateway"],
] as const;

const pointById = Object.fromEntries(mapNodes.map((point) => [point.id, point]));

export function LandingOperationsMap() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[42rem] overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] p-4 shadow-command backdrop-blur-2xl"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(80,213,240,0.18),transparent_28%),radial-gradient(circle_at_80%_78%,rgba(24,169,153,0.15),transparent_30%)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <p className="type-mono text-[0.68rem] uppercase text-cyan-100/60">Live operations map</p>
          <h2 className="type-title text-lg text-white">Bangladesh coastal command view</h2>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold text-emerald-100">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(95,224,143,0.8)]" />
          Monitoring active
        </div>
      </div>

      <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-[#071014]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="coast-silhouette absolute inset-x-0 bottom-0 h-[78%] opacity-95" />

        <motion.div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/12"
          animate={{ scale: [0.94, 1.05, 0.94] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {links.map(([fromId, toId], index) => {
            const from = pointById[fromId];
            const to = pointById[toId];

            return (
              <motion.line
                key={`${fromId}-${toId}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(80,213,240,0.7)"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.15 }}
                animate={{ pathLength: 1, opacity: [0.25, 0.85, 0.25] }}
                transition={{ duration: 3.6, delay: index * 0.18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              />
            );
          })}
        </svg>

        {mapNodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.id}
              className="absolute"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ opacity: 0, scale: 0.72 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.08, duration: 0.35 }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ background: node.tone }}
                  animate={{ scale: [1, 1.45, 1], opacity: [0.18, 0.04, 0.18] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.16 }}
                />
                <span className="relative grid h-5 w-5 place-items-center rounded-full border border-white/20 bg-black/30 text-white shadow-[0_0_18px_rgba(255,255,255,0.18)]">
                  <Icon className="h-3 w-3" aria-hidden="true" />
                </span>
                <span className="absolute left-4 top-0 whitespace-nowrap rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[0.68rem] font-semibold text-white backdrop-blur">
                  {node.label}
                </span>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          className="absolute left-4 top-4 rounded-md border border-cyan-200/15 bg-slate-950/50 px-3 py-2 backdrop-blur-xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-100">
            <MapPinned className="h-4 w-4" aria-hidden="true" />
            30 nodes alive
          </div>
        </motion.div>

        <motion.div
          className="absolute right-4 top-4 rounded-md border border-amber-200/15 bg-slate-950/50 px-3 py-2 backdrop-blur-xl"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-100">
            <TriangleAlert className="h-4 w-4" aria-hidden="true" />
            Cyclone watch active
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-4 rounded-md border border-emerald-200/15 bg-slate-950/50 px-3 py-2 backdrop-blur-xl"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 6.1, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-100">
            <Activity className="h-4 w-4" aria-hidden="true" />
            Mesh self-healing
          </div>
        </motion.div>
      </div>

      <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["Live nodes", "30+"],
          ["Active gateway", "GW-03"],
          ["AI risk", "Watch"],
        ].map(([label, value]) => (
          <div className="rounded-md border border-white/10 bg-white/[0.055] p-3" key={label}>
            <p className="type-mono text-[0.68rem] uppercase text-slate-300/70">{label}</p>
            <p className="mt-1 text-sm font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
