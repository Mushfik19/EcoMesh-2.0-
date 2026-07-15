import { motion } from "framer-motion";

export interface TechnologyBadge {
  name: string;
  category: "device" | "mesh" | "backend" | "ai" | "database" | "frontend" | "realtime";
}

const architectureTechnologies: TechnologyBadge[] = [
  { name: "ESP32", category: "device" },
  { name: "LoRa SX1276", category: "mesh" },
  { name: "Node.js", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Python", category: "ai" },
  { name: "TensorFlow", category: "ai" },
  { name: "MySQL", category: "database" },
  { name: "React", category: "frontend" },
  { name: "Leaflet", category: "frontend" },
  { name: "WebSocket", category: "realtime" },
];

const badgeTone = {
  ai: "border-violet-300/24 bg-violet-300/10 text-violet-100",
  backend: "border-blue-300/24 bg-blue-300/10 text-blue-100",
  database: "border-amber-300/24 bg-amber-300/10 text-amber-100",
  device: "border-emerald-300/24 bg-emerald-300/10 text-emerald-100",
  frontend: "border-cyan-300/24 bg-cyan-300/10 text-cyan-100",
  mesh: "border-teal-300/24 bg-teal-300/10 text-teal-100",
  realtime: "border-rose-300/24 bg-rose-300/10 text-rose-100",
} as const;

export interface TechnologyBadgesProps {
  technologies?: TechnologyBadge[];
}

export function TechnologyBadges({ technologies = architectureTechnologies }: TechnologyBadgesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((technology, index) => (
        <motion.span
          className={`rounded-md border px-3 py-2 text-sm font-semibold ${badgeTone[technology.category]}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: index * 0.025 }}
          key={technology.name}
        >
          {technology.name}
        </motion.span>
      ))}
    </div>
  );
}
