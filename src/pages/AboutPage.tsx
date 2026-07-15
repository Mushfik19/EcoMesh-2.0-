import {
  Anchor,
  BrainCircuit,
  Building2,
  Code2,
  GraduationCap,
  HeartHandshake,
  Info,
  Landmark,
  Leaf,
  Mail,
  MapPinned,
  RadioTower,
  Rocket,
  ShieldAlert,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";
import { AboutInfoCard, TeamMemberCard } from "@/components/about/AboutInfoCard";
import { ContentPageHero, ContentSection, ContentShell } from "@/components/content/ContentSection";

const impactMetrics = [
  { label: "Communities modeled", value: "12", detail: "Village, shelter, and local hazard contexts represented in demo data." },
  { label: "LoRa nodes", value: "30", detail: "Field telemetry dataset with battery, RSSI, SNR, gateway, and packet health." },
  { label: "Weather records", value: "365", detail: "Daily climate history powering trend and risk visualization." },
];

const targetUsers = [
  { title: "Fishermen", description: "Receive cyclone warnings, marine weather, safe-route guidance, and emergency communication support.", icon: Anchor },
  { title: "Farmers", description: "Track rainfall, flood risk, crop-relevant weather signals, and localized climate advisories.", icon: Leaf },
  { title: "Government Officers", description: "Monitor coastal zones, network health, alerts, risk scores, and response coordination status.", icon: Landmark },
  { title: "NGOs", description: "Coordinate relief planning, community monitoring, field reports, and volunteer activity.", icon: Building2 },
  { title: "Volunteers", description: "Support rescue operations, receive emergency tasks, and submit field intelligence during disasters.", icon: HeartHandshake },
  { title: "Researchers", description: "Explore sensor history, AI predictions, weather trends, and digital twin simulation outputs.", icon: BrainCircuit },
];

const teamMembers = [
  {
    name: "Project Lead",
    role: "Frontend Architecture & Product Design",
    focus: "Owns the mission-control experience, routing, component architecture, responsive UI, and hackathon presentation flow.",
  },
  {
    name: "IoT Systems Lead",
    role: "Edge Devices & LoRa Mesh",
    focus: "Defines ESP32 node behavior, LoRa SX1276 topology, gateway responsibilities, and field telemetry assumptions.",
  },
  {
    name: "AI Research Lead",
    role: "Prediction & Climate Intelligence",
    focus: "Shapes flood, cyclone, rainfall, and network-risk prediction logic for future TensorFlow and Python services.",
  },
  {
    name: "Operations Lead",
    role: "Disaster Response Workflows",
    focus: "Maps government, NGO, volunteer, fisherman, and farmer workflows into practical product features.",
  },
];

const whyEcoMesh = [
  "Works as a frontend-only demo today while preserving API-ready boundaries for tomorrow.",
  "Combines IoT operations, climate forecasting, AI recommendations, onboarding, maps, alerts, and digital twin concepts in one product.",
  "Focuses on coastal Bangladesh and the blue economy rather than a generic smart-city dashboard.",
  "Uses realistic mock datasets so judges can evaluate workflows without depending on unstable external services.",
];

const expectedImpact = [
  { label: "Faster warnings", value: "Minutes", detail: "Reduce the time between local signal detection and community-facing alerts." },
  { label: "Better coordination", value: "One view", detail: "Unify weather, mesh, alerts, boats, shelters, villages, and response activity." },
  { label: "Stronger resilience", value: "Offline-aware", detail: "Model LoRa mesh behavior for degraded connectivity and emergency conditions." },
  { label: "Research value", value: "Reusable data", detail: "Prepare structured telemetry and predictions for climate adaptation analysis." },
];

export function AboutPage() {
  return (
    <ContentShell>
      <ContentPageHero
        eyebrow="Mission context"
        title="About EcoMesh 2.0"
        description="EcoMesh 2.0 is an Edge-AI, LoRa Mesh, and Digital Twin platform concept for climate-resilient coastal Bangladesh, designed to help communities, responders, and institutions act earlier during climate threats."
        icon={Info}
        stats={impactMetrics}
      />

      <main className="space-y-5 px-5 py-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-2">
          <ContentSection
            eyebrow="Mission"
            title="Protect lives through resilient climate intelligence"
            description="EcoMesh aims to transform local sensor signals, weather data, and AI predictions into practical alerts and operational decisions for people living and working along the coast."
          >
            <AboutInfoCard
              icon={ShieldAlert}
              title="Mission statement"
              description="Deliver a reliable, human-centered disaster management interface that keeps fishermen, farmers, communities, and response teams informed before high-risk weather turns into emergency conditions."
            />
          </ContentSection>

          <ContentSection
            eyebrow="Vision"
            title="A connected safety network for the blue economy"
            description="The long-term vision is a deployable coastal mesh where low-power devices, AI prediction, and digital twin simulation support safer livelihoods and smarter response planning."
          >
            <AboutInfoCard
              icon={Waves}
              title="Vision statement"
              description="Build a climate-resilient operating layer for Bangladesh's coastal belt where community warnings, marine decisions, shelter readiness, and government coordination happen from one trusted platform."
            />
          </ContentSection>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <ContentSection
            eyebrow="Problem Statement"
            title="Coastal warnings are often fragmented"
            description="Cyclones, storm surge, flooding, salinity, rainfall extremes, and weak connectivity create a high-risk environment where communities need localized intelligence, not only broad regional forecasts."
          >
            <div className="space-y-3">
              {[
                "Remote coastal communities can lose mobile or internet connectivity during severe weather.",
                "Fishermen and farmers often need local, role-specific guidance rather than generic warning messages.",
                "Government, NGO, and volunteer teams may operate with separate information channels during emergencies.",
                "Sensor data, weather history, incident alerts, and prediction outputs are rarely presented in one clear interface.",
              ].map((problem, index) => (
                <motion.div className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} key={problem}>
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-rose-300/12 text-rose-100">
                    <span className="type-mono text-xs">{index + 1}</span>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{problem}</p>
                </motion.div>
              ))}
            </div>
          </ContentSection>

          <ContentSection
            eyebrow="Our Solution"
            title="A mission-control platform for climate response"
            description="EcoMesh combines field telemetry, LoRa mesh status, climate intelligence, AI prediction, user onboarding, maps, simulation, and digital twin readiness into a single product experience."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <AboutInfoCard icon={RadioTower} title="Self-healing mesh concept" description="LoRa nodes and gateways are modeled to keep essential telemetry moving during degraded connectivity." />
              <AboutInfoCard icon={BrainCircuit} title="Edge-AI decision support" description="Prediction surfaces estimate risk, confidence, and recommended actions for flood, cyclone, and network events." />
              <AboutInfoCard icon={MapPinned} title="Operational map view" description="Villages, boats, shelters, gateways, cyclone cells, and LoRa nodes become visible in one map workflow." />
              <AboutInfoCard icon={Rocket} title="Demo-ready frontend" description="The application is production-styled, responsive, and stable with realistic mock data for hackathon judging." />
            </div>
          </ContentSection>
        </div>

        <ContentSection
          eyebrow="Why EcoMesh"
          title="Why this project is different"
          description="EcoMesh is not just a weather dashboard. It connects climate intelligence with field networking, community roles, and disaster operations."
        >
          <div className="grid gap-3 md:grid-cols-2">
            {whyEcoMesh.map((item, index) => (
              <div className="rounded-lg border border-primary/15 bg-primary/8 p-4" key={item}>
                <p className="type-mono text-xs uppercase text-primary">Reason {String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection eyebrow="Expected Impact" title="Impact goals">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {expectedImpact.map((impact) => (
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5" key={impact.label}>
                <p className="type-mono text-xs uppercase text-muted-foreground">{impact.label}</p>
                <p className="type-title mt-3 text-3xl text-primary">{impact.value}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{impact.detail}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          eyebrow="Target Users"
          title="Designed for everyone in the response chain"
          description="Each user group has different information needs, so EcoMesh models role-specific onboarding and workflows."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {targetUsers.map((user) => (
              <AboutInfoCard key={user.title} {...user} />
            ))}
          </div>
        </ContentSection>

        <ContentSection
          eyebrow="Meet the Team"
          title="Project team"
          description="The team structure below reflects the responsibilities needed to take EcoMesh from hackathon demo to deployable platform."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </ContentSection>

        <div className="grid gap-5 xl:grid-cols-3">
          <ContentSection eyebrow="Supervisor" title="Academic supervision">
            <AboutInfoCard
              icon={GraduationCap}
              title="Supervisor placeholder"
              description="Supervisor name and designation will be added after final academic confirmation. This section is prepared for advisor attribution in the final submission."
            />
          </ContentSection>

          <ContentSection eyebrow="University" title="Institution">
            <AboutInfoCard
              icon={Building2}
              title="University placeholder"
              description="University name, department, and lab affiliation will be added for the final hackathon or academic presentation deck."
            />
          </ContentSection>

          <ContentSection eyebrow="Contact" title="Project links">
            <div className="space-y-3">
              <AboutInfoCard
                icon={Mail}
                title="Contact"
                description="Email: ecomesh-team@example.com. Replace this with the official project contact before public submission."
              />
              <AboutInfoCard
                icon={Code2}
                title="GitHub placeholder"
                description="Repository link will be added after the source is prepared for public or private review."
              />
            </div>
          </ContentSection>
        </div>

        <ContentSection eyebrow="Closing Note" title="Built for an international hackathon demo">
          <div className="rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(80,213,240,0.12),rgba(24,169,153,0.08))] p-6">
            <p className="type-body max-w-4xl text-lg leading-8 text-cyan-50/88">
              EcoMesh 2.0 presents a credible product vision: a resilient coastal intelligence network where sensors, mesh connectivity, AI prediction, and human workflows come together to protect communities and strengthen climate adaptation.
            </p>
          </div>
        </ContentSection>
      </main>
    </ContentShell>
  );
}
