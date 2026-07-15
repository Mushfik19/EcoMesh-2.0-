export const digitalTwinSummary = {
  region: "Bangladesh coastal twin",
  title: "Digital Twin",
  subtitle: "Placeholder visualization for the future Three.js scene of coast, boats, sensors, weather, mesh links, gateways, and signal lines.",
  updatedAt: "13 Jul 2026, 17:18 BDT",
};

export const twinSceneLayers = [
  { key: "coast", label: "3D Bangladesh Coast", state: "Ready", tone: "primary" },
  { key: "boats", label: "Boats", state: "Moving", tone: "blue" },
  { key: "sensors", label: "Sensors", state: "Live", tone: "green" },
  { key: "weather", label: "Weather Animation", state: "Simulated", tone: "cyan" },
  { key: "mesh", label: "Mesh Network", state: "Mapped", tone: "violet" },
  { key: "gateway", label: "Gateway", state: "Stable", tone: "amber" },
  { key: "signal", label: "Signal Lines", state: "Tracing", tone: "red" },
];

export const twinMetrics = [
  { label: "Active Objects", value: 48, unit: "nodes", status: "online" },
  { label: "Signal Paths", value: 126, unit: "lines", status: "healing" },
  { label: "Weather Cells", value: 8, unit: "zones", status: "stable" },
  { label: "Mesh Links", value: 94, unit: "routes", status: "online" },
];

export const twinEntities = [
  { name: "Gateway GW-01", type: "Gateway", detail: "Primary uplink on virtual coastline" },
  { name: "Boat B-17", type: "Boat", detail: "Search and rescue path simulation" },
  { name: "Sensor LN-12", type: "Sensor", detail: "Humidity and tide probe" },
  { name: "Sensor LN-24", type: "Sensor", detail: "Wind and rainfall probe" },
  { name: "Village Cluster", type: "Village", detail: "Community shelter proximity zone" },
];

export const twinArchitecture = [
  "Scene state container for camera, layers, and entity transforms",
  "Future Three.js canvas mount point with WebGL lifecycle hooks",
  "Dummy telemetry bridge for boats, gateways, sensors, and weather cells",
  "Signal line renderer that can later become animated geometry or shaders",
  "Simulation control layer for play, pause, speed, and scenario switching",
];

export const twinSimulationModes = [
  { label: "Idle", description: "Scene framed for later WebGL integration." },
  { label: "Storm", description: "Weather layers intensify across the coastal belt." },
  { label: "Flood", description: "Lowland zones and signal paths become constrained." },
  { label: "Recovery", description: "Mesh reroutes and services return to normal." },
];
