import {
  Activity,
  AlertTriangle,
  BarChart3,
  BookOpen,
  CloudSun,
  Cpu,
  FileText,
  GitBranch,
  Home,
  Info,
  Map,
  Network,
  Radar,
  RadioTower,
  Settings,
  UserCircle,
} from "lucide-react";
import { paths } from "@/routes/paths";

export const primaryNavigation = [
  { label: "Landing", path: paths.landing, icon: Home },
  { label: "Dashboard", path: paths.dashboard, icon: Activity },
  { label: "Live Map", path: paths.liveMap, icon: Map },
  { label: "Nodes", path: paths.nodes, icon: RadioTower },
  { label: "Weather", path: paths.weather, icon: CloudSun },
  { label: "Analytics", path: paths.analytics, icon: BarChart3 },
  { label: "AI Prediction", path: paths.aiPrediction, icon: Radar },
  { label: "Alerts", path: paths.alerts, icon: AlertTriangle },
  { label: "Digital Twin", path: paths.digitalTwin, icon: Cpu },
  { label: "Simulation", path: paths.simulation, icon: Network },
];

export const secondaryNavigation = [
  { label: "User Profile", path: paths.userProfile, icon: UserCircle },
  { label: "Architecture", path: paths.architecture, icon: GitBranch },
  { label: "Documentation", path: paths.documentation, icon: FileText },
  { label: "Settings", path: paths.settings, icon: Settings },
  { label: "About", path: paths.about, icon: Info },
  { label: "Reference", path: paths.documentation, icon: BookOpen },
];
