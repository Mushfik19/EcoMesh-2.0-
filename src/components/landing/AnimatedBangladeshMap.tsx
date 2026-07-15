import { motion } from "framer-motion";
import { Activity, Satellite, Waves } from "lucide-react";

interface MeshNode {
  id: string;
  label: string;
  x: number;
  y: number;
  tone: string;
}

interface MeshLink {
  id: string;
  from: MeshNode;
  to: MeshNode;
}

const meshNodes: MeshNode[] = [
  { id: "khulna", label: "Khulna Gateway", x: 172, y: 174, tone: "#50d5f0" },
  { id: "barisal", label: "Barisal Node", x: 238, y: 210, tone: "#18d6c2" },
  { id: "bhola", label: "Bhola Shelter", x: 276, y: 270, tone: "#5fe08f" },
  { id: "cox", label: "Cox's Bazar", x: 326, y: 370, tone: "#f4c85b" },
  { id: "satkhira", label: "Satkhira Sensor", x: 128, y: 246, tone: "#a69bff" },
  { id: "boat", label: "Fishing Fleet", x: 212, y: 348, tone: "#ff9a57" },
];

const meshLinks: MeshLink[] = [
  { id: "khulna-barisal", from: meshNodes[0], to: meshNodes[1] },
  { id: "barisal-bhola", from: meshNodes[1], to: meshNodes[2] },
  { id: "bhola-cox", from: meshNodes[2], to: meshNodes[3] },
  { id: "satkhira-khulna", from: meshNodes[4], to: meshNodes[0] },
  { id: "satkhira-boat", from: meshNodes[4], to: meshNodes[5] },
  { id: "boat-bhola", from: meshNodes[5], to: meshNodes[2] },
];

export function AnimatedBangladeshMap() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_20%,rgba(80,213,240,0.18),transparent_32%),radial-gradient(circle_at_76%_78%,rgba(24,169,153,0.16),transparent_30%)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <p className="type-mono text-[0.68rem] uppercase text-cyan-100/60">Digital twin preview</p>
          <h2 className="type-title text-lg text-white">Coastal Bangladesh Mesh</h2>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold text-emerald-100">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(95,224,143,0.8)]" />
          Live-ready
        </div>
      </div>

      <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-slate-950/35">
        <svg className="h-full w-full" role="img" viewBox="0 0 440 420" aria-label="Animated placeholder map of coastal Bangladesh with LoRa mesh nodes">
          <defs>
            <linearGradient id="coastGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#50d5f0" stopOpacity="0.42" />
              <stop offset="52%" stopColor="#18a999" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#f4c85b" stopOpacity="0.2" />
            </linearGradient>
            <filter id="meshGlow" x="-35%" y="-35%" width="170%" height="170%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M184 48 C210 78 194 112 220 136 C252 166 238 198 274 220 C304 240 292 276 326 296 C356 318 346 362 380 386 L270 394 C254 362 224 348 202 324 C170 288 142 278 114 256 C88 236 78 198 104 172 C132 144 132 108 146 82 C154 66 166 56 184 48Z"
            fill="url(#coastGradient)"
            stroke="rgba(167,239,251,0.72)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0.25 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />

          <path d="M56 350 C126 332 178 346 238 374 C282 394 336 392 402 374" fill="none" stroke="rgba(80,213,240,0.2)" strokeWidth="18" />
          <path d="M38 318 C124 304 184 322 260 348 C314 366 360 358 412 334" fill="none" stroke="rgba(24,169,153,0.16)" strokeWidth="12" />

          {meshLinks.map((link, index) => (
            <motion.line
              animate={{ pathLength: 1, opacity: [0.32, 0.8, 0.32] }}
              initial={{ pathLength: 0, opacity: 0 }}
              key={link.id}
              stroke="rgba(80,213,240,0.68)"
              strokeDasharray="6 8"
              strokeLinecap="round"
              strokeWidth="2"
              transition={{ duration: 2.8, delay: index * 0.16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              x1={link.from.x}
              x2={link.to.x}
              y1={link.from.y}
              y2={link.to.y}
            />
          ))}

          {meshNodes.map((node, index) => (
            <motion.g
              filter="url(#meshGlow)"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.42, delay: 0.55 + index * 0.12 }}
              key={node.id}
            >
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="15"
                fill={node.tone}
                opacity="0.16"
                animate={{ r: [12, 22, 12], opacity: [0.22, 0.02, 0.22] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.2 }}
              />
              <circle cx={node.x} cy={node.y} r="5.5" fill={node.tone} stroke="rgba(255,255,255,0.78)" strokeWidth="1.5" />
              <text x={node.x + 10} y={node.y - 10} fill="rgba(237,247,248,0.72)" fontSize="10" fontWeight="600">
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>

        <motion.div
          className="absolute left-4 top-4 rounded-md border border-cyan-200/15 bg-slate-950/48 px-3 py-2 backdrop-blur-xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-100">
            <Satellite className="h-4 w-4" aria-hidden="true" />
            AI risk model syncing
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-4 rounded-md border border-emerald-200/15 bg-slate-950/50 px-3 py-2 backdrop-blur-xl"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-100">
            <Activity className="h-4 w-4" aria-hidden="true" />
            30 nodes simulated
          </div>
        </motion.div>
      </div>

      <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["Cyclone corridor", "Watch"],
          ["Marine route", "Stable"],
          ["Shelter mesh", "Online"],
        ].map(([label, value]) => (
          <div className="rounded-md border border-white/10 bg-white/[0.055] p-3" key={label}>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Waves className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
              {label}
            </div>
            <p className="mt-1 text-sm font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
