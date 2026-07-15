import { Anchor, Building2, HandHeart, Microscope, ShieldAlert, Sprout, UserCog } from "lucide-react";
import type { RoleOption } from "@/components/onboarding/RoleCard";

export const roleOptions: RoleOption[] = [
  {
    id: "fisherman",
    title: "Fisherman",
    icon: Anchor,
    accent: "from-cyan-300 to-emerald-300",
    description: "Receive cyclone warnings, safe fishing recommendations, marine weather, emergency alerts, and boat tracking.",
  },
  {
    id: "farmer",
    title: "Farmer",
    icon: Sprout,
    accent: "from-emerald-300 to-lime-200",
    description: "View weather forecasts, flood risk, crop recommendations, irrigation insights, and market information.",
  },
  {
    id: "government-officer",
    title: "Government Officer",
    icon: Building2,
    accent: "from-sky-300 to-cyan-200",
    description: "Monitor coastal regions, disaster alerts, network status, analytics, and emergency response.",
  },
  {
    id: "ngo",
    title: "NGO",
    icon: HandHeart,
    accent: "from-teal-300 to-blue-200",
    description: "Monitor communities, coordinate relief activities, manage volunteers, and track affected areas.",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    icon: ShieldAlert,
    accent: "from-amber-200 to-cyan-200",
    description: "Receive emergency tasks, submit field reports, and support rescue operations.",
  },
  {
    id: "researcher",
    title: "Researcher",
    icon: Microscope,
    accent: "from-violet-200 to-cyan-200",
    description: "Access sensor data, AI predictions, environmental analytics, and Digital Twin simulations.",
  },
  {
    id: "administrator",
    title: "Administrator",
    icon: UserCog,
    accent: "from-slate-200 to-cyan-200",
    description: "Manage users, devices, approvals, policies, dashboards, and platform settings.",
  },
];
