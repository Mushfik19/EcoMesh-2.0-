import type { AssetCatalogItem } from "@/types/ecosystem";

export const mapLayerCatalog: AssetCatalogItem[] = [
  {
    id: "bangladesh-coast-outline",
    label: "Bangladesh coast outline",
    purpose: "Vector-ready coastline placeholder for live map and digital twin overlays.",
    status: "generated-in-css",
  },
  {
    id: "cyclone-track-overlay",
    label: "Cyclone track overlay",
    purpose: "Future GeoJSON layer for simulated cyclone movement across coastal zones.",
    status: "future-asset",
  },
  {
    id: "shelter-capacity-overlay",
    label: "Shelter capacity overlay",
    purpose: "Future operational map layer for evacuation planning and relief routing.",
    status: "future-asset",
  },
];
