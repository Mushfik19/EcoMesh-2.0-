import type { AssetCatalogItem } from "@/types/ecosystem";

export const iconCatalog: AssetCatalogItem[] = [
  {
    id: "mesh-node",
    label: "Mesh Node",
    purpose: "Used for LoRa node status, gateway links, and field device inventory.",
    status: "system-icon",
  },
  {
    id: "cyclone-alert",
    label: "Cyclone Alert",
    purpose: "Used for high-risk weather warnings and emergency escalation cards.",
    status: "system-icon",
  },
  {
    id: "digital-twin",
    label: "Digital Twin",
    purpose: "Used for simulation, map, and future Three.js scene controls.",
    status: "system-icon",
  },
];
