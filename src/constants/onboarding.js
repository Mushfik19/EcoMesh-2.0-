import {
  BadgeCheck,
  ClipboardCheck,
  Fish,
  HandHeart,
  Microscope,
  Shield,
  Sprout,
  UserCog,
} from "lucide-react";

export const userRoles = [
  {
    id: "fisherman",
    label: "Fisherman",
    icon: Fish,
    description: "Receive marine alerts, boat route guidance, and cyclone warnings.",
  },
  {
    id: "farmer",
    label: "Farmer",
    icon: Sprout,
    description: "Track rain, salinity, flood risk, and crop protection advisories.",
  },
  {
    id: "government-officer",
    label: "Government Officer",
    icon: Shield,
    description: "Monitor district operations, approvals, shelters, and public alerts.",
  },
  {
    id: "ngo",
    label: "NGO",
    icon: HandHeart,
    description: "Coordinate aid, villages, shelters, volunteers, and field response.",
  },
  {
    id: "volunteer",
    label: "Volunteer",
    icon: BadgeCheck,
    description: "Support local incidents, node checks, rescue logistics, and reporting.",
  },
  {
    id: "researcher",
    label: "Researcher",
    icon: Microscope,
    description: "Access climate telemetry, model outputs, and anonymized sensor history.",
  },
  {
    id: "administrator",
    label: "Administrator",
    icon: UserCog,
    description: "Manage users, devices, approvals, policies, and platform settings.",
  },
];

export const onboardingSteps = [
  { id: "register", label: "Registration" },
  { id: "otp", label: "OTP Verification" },
  { id: "role", label: "Role Selection" },
  { id: "profile", label: "Profile Setup" },
  { id: "location", label: "Location Selection" },
  { id: "contact", label: "Emergency Contact" },
  { id: "device", label: "Device Registration" },
  { id: "approval", label: "Approval Workflow" },
];

export const approvalStages = [
  { label: "Identity submitted", status: "complete" },
  { label: "Role reviewed", status: "complete" },
  { label: "Device verified", status: "active" },
  { label: "District approval", status: "pending" },
];

export const defaultUserProfile = {
  name: "Ayesha Rahman",
  phone: "+8801712345678",
  email: "ayesha.rahman@example.org",
  role: "Government Officer",
  organization: "Coastal Resilience Cell",
  district: "Khulna",
  status: "Pending district approval",
};

export const deviceTypes = [
  "LoRa Sensor Node",
  "Gateway",
  "Boat Tracker",
  "Shelter Display",
  "Weather Station",
];

export const onboardingFeatureCards = [
  { label: "Approval workflow", icon: ClipboardCheck },
  { label: "Role-aware access", icon: Shield },
  { label: "Device ownership", icon: UserCog },
];
