import type { LucideIcon } from "lucide-react";
import { Cpu, RadioTower, ShieldAlert, Waves } from "lucide-react";

export interface LandingNavItem {
  label: string;
  href: string;
}

export interface HeroSignal {
  label: string;
  value: string;
  detail: string;
}

export interface HeroCapability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const landingNavItems: LandingNavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Technology", href: "#technology" },
  { label: "Live Demo", href: "#live-demo" },
  { label: "Documentation", href: "#documentation" },
  { label: "About", href: "#about" },
];

export const heroSignals: HeroSignal[] = [
  {
    label: "Nodes online",
    value: "30+",
    detail: "field devices across coastal districts",
  },
  {
    label: "Forecast window",
    value: "72h",
    detail: "risk outlook for flood and cyclone decisions",
  },
  {
    label: "Alert latency",
    value: "< 8s",
    detail: "from mesh signal to operator dashboard",
  },
];

export const heroCapabilities: HeroCapability[] = [
  {
    title: "Edge AI Warnings",
    description: "Local inference keeps cyclone, flood, and marine risk alerts available when cloud links degrade.",
    icon: Cpu,
  },
  {
    title: "Resilient LoRa Mesh",
    description: "Village nodes, boats, and shelters reroute automatically across coastal response corridors.",
    icon: RadioTower,
  },
  {
    title: "Disaster Command View",
    description: "Government, NGO, and volunteer teams share one operational picture during fast-moving events.",
    icon: ShieldAlert,
  },
  {
    title: "Blue Economy Intelligence",
    description: "Marine weather, safe fishing guidance, and community telemetry support safer coastal livelihoods.",
    icon: Waves,
  },
];
