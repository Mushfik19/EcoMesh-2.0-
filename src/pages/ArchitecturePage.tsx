import {
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  LayoutDashboard,
  RadioTower,
  Router,
  Satellite,
  ShieldCheck,
} from "lucide-react";
import { ArchitectureFlow } from "@/components/architecture/ArchitectureFlow";
import { ArchitectureLayerCard } from "@/components/architecture/ArchitectureLayerCard";
import { TechnologyBadges } from "@/components/architecture/TechnologyBadges";
import { ContentCard, ContentPageHero, ContentSection, ContentShell } from "@/components/content/ContentSection";

const architectureLayers = [
  {
    layer: "Layer 1",
    title: "Edge Devices",
    description:
      "ESP32-powered sensing devices collect rainfall, humidity, pressure, tide, salinity, battery, and signal telemetry from vulnerable coastal locations.",
    icon: Cpu,
    responsibilities: ["Sensor sampling and local buffering", "Battery and solar health monitoring", "Field-ready QR/device identity"],
  },
  {
    layer: "Layer 2",
    title: "LoRa Mesh Network",
    description:
      "LoRa SX1276 radios move low-bandwidth telemetry across village nodes using resilient hop paths when cellular or internet access is unstable.",
    icon: RadioTower,
    responsibilities: ["Long-range rural communication", "Self-healing route participation", "Low-power disaster operation"],
  },
  {
    layer: "Layer 3",
    title: "Gateway",
    description:
      "Gateways bridge field traffic to internet services, prioritize urgent alert packets, and maintain store-and-forward behavior during backhaul disruption.",
    icon: Router,
    responsibilities: ["Packet aggregation and filtering", "Priority alert forwarding", "Gateway health and latency reporting"],
  },
  {
    layer: "Layer 4",
    title: "Backend",
    description:
      "Node.js and FastAPI services are planned to manage devices, users, weather feeds, alert workflows, analytics APIs, and MySQL persistence.",
    icon: Cloud,
    responsibilities: ["Device registry and auth APIs", "WeatherAPI and incident services", "Historical telemetry storage"],
  },
  {
    layer: "Layer 5",
    title: "AI Engine",
    description:
      "Python and TensorFlow models convert sensor streams, pressure drops, rainfall trends, and marine signals into flood and cyclone risk predictions.",
    icon: BrainCircuit,
    responsibilities: ["Risk scoring and confidence", "Flood and cyclone classification", "Operator recommendations"],
  },
  {
    layer: "Layer 6",
    title: "Digital Twin Dashboard",
    description:
      "The React dashboard visualizes maps, forecasts, alerts, mesh status, simulations, and future 3D digital twin scenes for mission operations.",
    icon: LayoutDashboard,
    responsibilities: ["Live map and command dashboard", "Digital twin simulation surface", "Government and community workflows"],
  },
];

const overviewCards = [
  {
    icon: Satellite,
    title: "Coastal telemetry backbone",
    description: "EcoMesh converts distributed field signals into usable operational intelligence for climate-exposed coastal communities.",
    meta: "System overview",
  },
  {
    icon: ShieldCheck,
    title: "Disaster response coordination",
    description: "Alerts, forecasts, maps, and predictions support government officers, NGOs, volunteers, fishermen, and farmers from one platform.",
    meta: "Mission value",
  },
  {
    icon: Database,
    title: "Backend-ready frontend",
    description: "The current implementation runs on typed mock data while preserving service boundaries for future APIs and realtime streams.",
    meta: "Implementation",
  },
];

export function ArchitecturePage() {
  return (
    <ContentShell>
      <ContentPageHero
        eyebrow="System blueprint"
        title="EcoMesh 2.0 Architecture"
        description="A layered architecture for edge devices, LoRa mesh communication, gateway synchronization, backend APIs, AI prediction, and a digital twin command dashboard for coastal Bangladesh."
        icon={GitBranch}
        stats={[
          { label: "Device layer", value: "ESP32", detail: "Low-power sensing and LoRa packet creation at the edge." },
          { label: "Mesh radio", value: "SX1276", detail: "Long-range communication designed for coastal field conditions." },
          { label: "Command UI", value: "React", detail: "Mission-control dashboard with maps, alerts, forecasts, and simulation." },
        ]}
      />

      <main className="space-y-5 px-5 py-6 lg:px-8">
        <ContentSection
          eyebrow="System Overview"
          title="From coastal sensors to community action"
          description="EcoMesh 2.0 is designed as an end-to-end climate intelligence pipeline. Field devices observe local conditions, the LoRa mesh keeps telemetry moving, gateways synchronize data, backend services normalize it, AI models classify risk, and dashboards turn the result into decisions."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {overviewCards.map((card) => (
              <ContentCard key={card.title} {...card} />
            ))}
          </div>
        </ContentSection>

        <ContentSection
          eyebrow="Animated architecture flow"
          title="Operational data path"
          description="The core data path moves from physical sensors to the dashboard and finally to the government and community users who need to act."
        >
          <ArchitectureFlow />
        </ContentSection>

        <ContentSection
          eyebrow="Architecture layers"
          title="Six-layer platform model"
          description="Each layer has a focused responsibility so the frontend, backend, device network, and AI engine can evolve independently."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {architectureLayers.map((layer) => (
              <ArchitectureLayerCard key={layer.title} {...layer} />
            ))}
          </div>
        </ContentSection>

        <div className="grid gap-5 xl:grid-cols-[0.72fr_1.28fr]">
          <ContentSection eyebrow="Technology Badges" title="Implementation stack">
            <TechnologyBadges />
          </ContentSection>

          <ContentSection
            eyebrow="Integration strategy"
            title="Backend and realtime readiness"
            description="The UI is already separated into typed services, reusable components, and feature modules. Future backend work can connect WeatherAPI.com, device registry APIs, AI inference APIs, MySQL persistence, and WebSocket telemetry without redesigning the screens."
          >
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Node.js + FastAPI", "API layer for auth, device registry, alerts, weather normalization, and operator workflows."],
                ["Python + TensorFlow", "AI pipeline for flood probability, cyclone watch scoring, signal anomaly detection, and recommendation generation."],
                ["MySQL", "Structured storage for users, nodes, villages, alerts, forecast history, and incident response records."],
                ["React + Leaflet + WebSocket", "Realtime mission dashboard with map overlays, telemetry updates, and command-center visualizations."],
              ].map(([title, detail]) => (
                <article className="rounded-lg border border-white/10 bg-white/[0.045] p-4" key={title}>
                  <h3 className="type-title text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>
          </ContentSection>
        </div>
      </main>
    </ContentShell>
  );
}
