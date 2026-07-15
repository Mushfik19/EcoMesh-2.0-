import {
  Bell,
  BookOpen,
  CloudSun,
  Database,
  FileText,
  GitBranch,
  Home,
  Map,
  Radar,
  RadioTower,
  Settings,
  ShieldAlert,
  User,
  Users,
  Waves,
} from "lucide-react";
import { paths } from "@/routes/paths";
import type { AuthRole } from "@/store/authStore";

export interface NavbarLinkItem {
  label: string;
  href: string;
}

export interface DropdownItem {
  label: string;
  href?: string;
  icon: typeof Home;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  tone: "info" | "warning" | "critical";
}

export const landingLinks: NavbarLinkItem[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Technology", href: "#technology" },
  { label: "Live Demo", href: "#live-demo" },
  { label: "Documentation", href: "#documentation" },
  { label: "About", href: "#about" },
];

export const commonDropdownItems: DropdownItem[] = [
  { label: "My Profile", href: paths.userProfile, icon: User },
  { label: "Dashboard", href: paths.dashboard, icon: Home },
  { label: "Settings", href: paths.settings, icon: Settings },
  { label: "Notifications", href: paths.notifications, icon: Bell },
  { label: "My Devices", href: paths.myDevices, icon: RadioTower },
];

export const roleTools: Record<AuthRole, DropdownItem[]> = {
  administrator: [
    { label: "Architecture", href: paths.architecture, icon: GitBranch },
    { label: "Documentation", href: paths.documentation, icon: FileText },
  ],
  fisherman: [
    { label: "Weather", href: paths.weather, icon: CloudSun },
    { label: "Live Map", href: paths.liveMap, icon: Map },
    { label: "Alerts", href: paths.alerts, icon: Bell },
  ],
  farmer: [
    { label: "Weather", href: paths.weather, icon: CloudSun },
    { label: "AI Prediction", href: paths.aiPrediction, icon: Radar },
    { label: "Analytics", href: paths.analytics, icon: Database },
  ],
  "government-officer": [
    { label: "Analytics", href: paths.analytics, icon: Database },
    { label: "Architecture", href: paths.architecture, icon: GitBranch },
    { label: "Alerts", href: paths.alerts, icon: ShieldAlert },
  ],
  ngo: [
    { label: "Live Map", href: paths.liveMap, icon: Map },
    { label: "Alerts", href: paths.alerts, icon: ShieldAlert },
    { label: "Documentation", href: paths.documentation, icon: BookOpen },
  ],
  volunteer: [
    { label: "Live Map", href: paths.liveMap, icon: Map },
    { label: "Simulation", href: paths.simulation, icon: Waves },
    { label: "Alerts", href: paths.alerts, icon: ShieldAlert },
  ],
  researcher: [
    { label: "Analytics", href: paths.analytics, icon: Database },
    { label: "Digital Twin", href: paths.digitalTwin, icon: Users },
    { label: "Documentation", href: paths.documentation, icon: BookOpen },
  ],
};

export const notifications: NotificationItem[] = [
  { id: "n1", title: "Cyclone watch updated", message: "Barguna coastal belt moved to elevated response readiness.", time: "2 min ago", tone: "critical" },
  { id: "n2", title: "Gateway health stable", message: "GW-03 resumed route stabilization after packet jitter.", time: "12 min ago", tone: "info" },
  { id: "n3", title: "Volunteer task issued", message: "Two field verification tasks are ready for review.", time: "27 min ago", tone: "warning" },
];

export function getRoleLabel(role: AuthRole | null | undefined) {
  const labels: Record<AuthRole, string> = {
    administrator: "Administrator",
    fisherman: "Fisherman",
    farmer: "Farmer",
    "government-officer": "Government Officer",
    ngo: "NGO",
    researcher: "Researcher",
    volunteer: "Volunteer",
  };

  return role ? labels[role] : "Pending role";
}
