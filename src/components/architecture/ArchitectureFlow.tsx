import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowDown, BrainCircuit, Building2, Cloud, Gauge, LayoutDashboard, RadioTower, Router } from "lucide-react";

export interface ArchitectureFlowStep {
  label: string;
  detail: string;
  icon: LucideIcon;
}

const defaultArchitectureFlow: ArchitectureFlowStep[] = [
  {
    label: "Sensors",
    detail: "Weather, tide, battery, RSSI, and village safety signals",
    icon: Gauge,
  },
  {
    label: "LoRa Mesh",
    detail: "Self-healing SX1276 node-to-node communication",
    icon: RadioTower,
  },
  {
    label: "Gateway",
    detail: "ESP32 gateway bridge with store-and-forward behavior",
    icon: Router,
  },
  {
    label: "Backend",
    detail: "Node.js/FastAPI services, MySQL storage, and device APIs",
    icon: Cloud,
  },
  {
    label: "AI Prediction",
    detail: "Python and TensorFlow risk scoring for flood and cyclone windows",
    icon: BrainCircuit,
  },
  {
    label: "Dashboard",
    detail: "React mission-control views with map, alerts, analytics, and twin surfaces",
    icon: LayoutDashboard,
  },
  {
    label: "Government & Community",
    detail: "Shared decisions for officers, NGOs, volunteers, fishermen, and farmers",
    icon: Building2,
  },
];

export interface ArchitectureFlowProps {
  steps?: ArchitectureFlowStep[];
}

export function ArchitectureFlow({ steps = defaultArchitectureFlow }: ArchitectureFlowProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#071014] p-5 shadow-command">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(80,213,240,0.18),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(24,169,153,0.16),transparent_34%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div className="flex flex-col items-center" key={step.label}>
              <motion.article
                className="w-full rounded-lg border border-cyan-200/14 bg-white/[0.07] p-4 backdrop-blur-xl"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-cyan-300/14 text-cyan-100 ring-1 ring-cyan-200/16"
                    animate={{ boxShadow: ["0 0 0 rgba(80,213,240,0)", "0 0 28px rgba(80,213,240,0.24)", "0 0 0 rgba(80,213,240,0)"] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <p className="type-mono text-[0.68rem] uppercase text-cyan-100/60">Step {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="type-title text-xl text-white">{step.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300/78">{step.detail}</p>
                  </div>
                </div>
              </motion.article>

              {!isLast ? (
                <motion.div
                  className="grid h-12 place-items-center text-primary"
                  initial={{ opacity: 0, height: 24 }}
                  whileInView={{ opacity: 1, height: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.32, delay: index * 0.05 + 0.08 }}
                  aria-hidden="true"
                >
                  <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowDown className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
