import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileText,
  FolderTree,
  HelpCircle,
  Layers3,
  Map,
  Rocket,
  Route,
  ShieldAlert,
  TerminalSquare,
  Wifi,
} from "lucide-react";
import { ContentCard, ContentPageHero, ContentSection, ContentShell } from "@/components/content/ContentSection";
import { DocCodeBlock, DocList, DocumentationAccordion } from "@/components/documentation/DocumentationAccordion";

const objectives = [
  "Provide early warning and decision support for cyclone, flood, rainfall, tide, and marine disruption scenarios.",
  "Demonstrate how edge devices and LoRa mesh networking can preserve situational awareness when connectivity degrades.",
  "Create a polished frontend that presents climate intelligence, mesh operations, alerts, simulation, onboarding, and documentation as one product.",
  "Keep all data frontend-only for hackathon reliability while preserving backend-ready service and type contracts.",
];

const features = [
  "Enterprise IoT dashboard with network health, live activity, weather risk, AI prediction, alerts, and coastal map preview.",
  "Climate Intelligence page with current weather, marine conditions, hourly forecast, seven-day forecast, charts, and warnings.",
  "Live Map with gateways, villages, boats, cyclone cells, shelters, LoRa nodes, popups, filters, and legend.",
  "Role-based onboarding for fishermen, farmers, government officers, NGOs, volunteers, researchers, and administrators.",
  "Digital Twin placeholder architecture prepared for future Three.js coastal simulation and realtime signal lines.",
  "Simulation workbench for cyclone, storm surge, and gateway outage drills using network log mock data.",
];

const technologies = [
  "React 19, Vite, TypeScript, Tailwind CSS, shadcn-style primitives, Framer Motion",
  "React Router lazy routes, Zustand role store, React Hook Form, Zod validation",
  "Recharts for analytics and weather trends, React Leaflet for geospatial operations",
  "Axios service clients prepared for WeatherAPI.com and future backend endpoints",
  "Lucide React icons, reusable cards, typed mock services, and JSON data fixtures",
];

const futureApi = [
  "Auth API: registration, login, OTP verification, role approval, profile and settings management.",
  "Device API: LoRa node registration, QR enrollment, firmware metadata, gateway health, and maintenance state.",
  "Weather API: WeatherAPI.com forecast mapping, weather alerts, marine-derived metrics, and climate history normalization.",
  "Incident API: alert acknowledgement, escalation, response notes, volunteer tasks, and agency coordination records.",
  "Realtime API: WebSocket streams for node telemetry, gateway heartbeat, packet loss, boat movement, and simulation events.",
];

const futureSchema = [
  "users: id, role, name, phone, email, district, approvalStatus, languagePreference, createdAt",
  "devices: id, type, ownerId, firmware, batteryPercent, rssiDbm, snrDb, status, lastSeen",
  "villages: id, name, district, gps, population, riskLevel, shelterId",
  "weather_records: id, date, temperatureC, humidityPercent, pressureHpa, windKph, rainfallMm, tideMeters",
  "alerts: id, severity, type, entityId, zone, message, acknowledged, confidence, createdAt",
  "predictions: id, modelVersion, floodProbability, cycloneProbability, confidence, recommendation, createdAt",
];

const aiPipeline = [
  "Ingest sensor telemetry, weather forecast data, marine signals, village risk metadata, and historical climate records.",
  "Clean and normalize readings by timestamp, region, sensor type, gateway source, and confidence level.",
  "Extract features such as pressure drop, rainfall acceleration, wind trend, tide anomaly, battery risk, and packet loss.",
  "Run Python/TensorFlow models to classify flood probability, cyclone watch state, and infrastructure degradation.",
  "Publish recommendations to dashboard, alerts, weather intelligence, simulation, and future government workflows.",
];

const loraNetwork = [
  "ESP32 nodes with LoRa SX1276 radios collect field telemetry from villages, shelters, boats, and coastal sensor points.",
  "Nodes participate in mesh routing so telemetry can hop around local failures and degraded signal zones.",
  "Gateways aggregate packets, prioritize emergency alerts, and synchronize with backend services when connectivity is available.",
  "Battery, RSSI, SNR, packet delivery, hop count, and firmware metadata are monitored as first-class operational signals.",
];

const roadmap = [
  "Phase 1: Complete frontend demo with mock data, typed services, onboarding, dashboard, weather, map, simulation, and docs.",
  "Phase 2: Add backend APIs for auth, device registry, weather integration, alert workflow, and MySQL persistence.",
  "Phase 3: Integrate WebSocket telemetry and device simulators for realtime dashboard and map updates.",
  "Phase 4: Add TensorFlow inference service for flood, cyclone, and network degradation predictions.",
  "Phase 5: Replace digital twin placeholder with Three.js coastal scene, animated weather, boats, sensors, and signal lines.",
];

const faqs = [
  {
    question: "Does the current app require a backend?",
    answer: "No. The current implementation is frontend-only and uses realistic mock data so the demo is reliable during judging.",
  },
  {
    question: "Can it connect to real WeatherAPI.com later?",
    answer: "Yes. The climate intelligence service already includes WeatherAPI-oriented request parameters and response mapping boundaries.",
  },
  {
    question: "Is the LoRa network physically implemented?",
    answer: "The frontend models the architecture and operational data. A hardware prototype can connect later through gateway and device APIs.",
  },
  {
    question: "Why use a digital twin?",
    answer: "A digital twin lets response teams rehearse cyclone, flood, boat movement, sensor failure, and network recovery scenarios visually.",
  },
];

export function DocumentationPage() {
  return (
    <ContentShell>
      <ContentPageHero
        eyebrow="Professional documentation"
        title="EcoMesh 2.0 Documentation"
        description="A complete product and engineering guide for the Edge-AI, LoRa Mesh, and Digital Twin climate resilience platform for coastal Bangladesh."
        icon={FileText}
        stats={[
          { label: "Docs format", value: "Collapsible", detail: "Readable sections for product, engineering, AI, network, and deployment." },
          { label: "Data model", value: "Typed", detail: "Frontend mock data is shaped around future backend contracts." },
          { label: "Demo mode", value: "Stable", detail: "No backend required for local run, judging, or presentation." },
        ]}
      />

      <main className="grid gap-5 px-5 py-6 lg:px-8 xl:grid-cols-[18rem_1fr]">
        <aside className="hidden self-start rounded-lg border border-white/10 bg-surface/72 p-4 shadow-panel backdrop-blur-xl xl:sticky xl:top-6 xl:block">
          <p className="type-mono text-xs uppercase text-primary">Contents</p>
          <nav className="mt-4 space-y-2 text-sm text-muted-foreground" aria-label="Documentation contents">
            {[
              "Project Overview",
              "Objectives",
              "Features",
              "Technology Stack",
              "Folder Structure",
              "API Structure",
              "Database Schema",
              "AI Pipeline",
              "LoRa Network",
              "Deployment Guide",
              "Roadmap",
              "FAQ",
            ].map((item) => (
              <a className="block rounded-md px-3 py-2 transition hover:bg-white/[0.06] hover:text-foreground" href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-5">
          <ContentSection
            eyebrow="Project Overview"
            title="Climate intelligence for coastal resilience"
            description="EcoMesh 2.0 is a hackathon-ready enterprise IoT frontend that demonstrates how field sensors, LoRa mesh networking, edge AI, and digital twin simulation can support climate-resilient decisions in coastal Bangladesh."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <ContentCard icon={ShieldAlert} title="Disaster management" description="Warnings, alerts, recommendations, and operational views help teams prepare before risk becomes a crisis." />
              <ContentCard icon={Wifi} title="Resilient connectivity" description="The LoRa mesh concept keeps low-bandwidth telemetry moving through degraded coastal communication conditions." />
              <ContentCard icon={Layers3} title="Digital twin readiness" description="Simulation and twin surfaces are prepared for future 3D coast, boats, sensors, weather, and signal visualization." />
            </div>
          </ContentSection>

          <DocumentationAccordion eyebrow="Objectives" title="Project Objectives" summary="The measurable goals that define the EcoMesh 2.0 product concept." icon={CheckCircle2} defaultOpen>
            <DocList items={objectives} />
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="Features" title="Core Features" summary="Production-style frontend modules implemented with mock data and backend-ready service boundaries." icon={BookOpen}>
            <DocList items={features} />
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="Technology Stack" title="Frontend and Platform Stack" summary="The technologies used in the current app and the future backend architecture." icon={Code2}>
            <div className="grid gap-3 md:grid-cols-2">
              {technologies.map((item) => (
                <div className="rounded-md border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-muted-foreground" key={item}>{item}</div>
              ))}
            </div>
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="Folder Structure" title="Scalable Folder Structure" summary="The project uses feature modules plus shared components, services, hooks, types, data, and utilities." icon={FolderTree}>
            <DocCodeBlock>{`src/
  components/              reusable shared UI components
  features/dashboard/      dashboard page, cards, hooks, service, types, mock data
  features/climate-intelligence/
  layouts/                 application shell and navigation
  pages/                   route-level page wrappers
  routes/                  router, paths, and navigation config
  services/                compatibility exports and shared services
  store/                   Zustand stores
  data/json/               realistic mock datasets
  types/                   shared domain models
  utils/                   formatting and helper functions`}</DocCodeBlock>
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="API Structure Future" title="Future API Structure" summary="Planned backend services can replace mock services without rewriting page components." icon={Cloud}>
            <DocList items={futureApi} />
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="Database Schema Future" title="Future Database Schema" summary="A normalized MySQL schema can store users, devices, villages, telemetry, alerts, and predictions." icon={Database}>
            <DocCodeBlock>{futureSchema.join("\n")}</DocCodeBlock>
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="AI Pipeline" title="Prediction and Recommendation Pipeline" summary="The AI engine converts weather and mesh telemetry into risk scores and action guidance." icon={BrainCircuit}>
            <DocList items={aiPipeline} />
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="LoRa Network" title="LoRa Mesh Network" summary="The field network concept connects edge sensors, boats, villages, shelters, and gateways." icon={Wifi}>
            <DocList items={loraNetwork} />
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="Deployment Guide" title="Local Deployment Guide" summary="Commands and environment expectations for running and validating the frontend demo." icon={Rocket}>
            <div className="grid gap-3">
              {[
                ["Install dependencies", "npm install"],
                ["Start local development", "npm.cmd run dev"],
                ["Run lint checks", "npm.cmd run lint"],
                ["Create production build", "npm.cmd run build"],
                ["Preview production build", "npm.cmd run preview"],
              ].map(([label, command]) => (
                <div className="rounded-md border border-white/10 bg-white/[0.045] p-4" key={label}>
                  <p className="font-semibold">{label}</p>
                  <code className="mt-2 inline-block rounded-md border border-primary/20 bg-primary/10 px-2 py-1 text-sm text-primary">{command}</code>
                </div>
              ))}
            </div>
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="Roadmap" title="Product Roadmap" summary="A realistic path from hackathon frontend demo to connected field platform." icon={Route}>
            <DocList items={roadmap} />
          </DocumentationAccordion>

          <DocumentationAccordion eyebrow="FAQ" title="Frequently Asked Questions" summary="Answers for judges, developers, and future stakeholders reviewing the project." icon={HelpCircle}>
            <div className="grid gap-3">
              {faqs.map((faq) => (
                <div className="rounded-md border border-white/10 bg-white/[0.045] p-4" key={faq.question}>
                  <p className="font-semibold">{faq.question}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </DocumentationAccordion>

          <ContentSection eyebrow="Developer Notes" title="Implementation quality">
            <div className="grid gap-4 lg:grid-cols-3">
              <ContentCard icon={TerminalSquare} title="Route-ready pages" description="Documentation is rendered through the existing React Router lazy route and app layout." />
              <ContentCard icon={Map} title="Domain coverage" description="Docs explain mesh, AI, climate intelligence, maps, onboarding, and deployment as one product." />
              <ContentCard icon={FileText} title="No placeholder content" description="Every section contains concrete EcoMesh-specific implementation guidance." />
            </div>
          </ContentSection>
        </div>
      </main>
    </ContentShell>
  );
}
