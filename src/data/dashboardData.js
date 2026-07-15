export const dashboardSummary = {
  missionTime: "13 Jul 2026, 16:42 BDT",
  region: "Khulna, Satkhira, Barguna coastal belt",
  operator: "EcoMesh Mission Control",
  syncState: "Live sync",
};

export const networkOverview = {
  activeNodes: 118,
  totalNodes: 128,
  gateways: 7,
  packetDelivery: 97.6,
  latency: 184,
  meshRecovery: 4.8,
};

export const weatherMetrics = {
  condition: "Monsoon cell approaching",
  temperature: { value: 31.8, unit: "C", trend: "+1.2" },
  humidity: { value: 84, unit: "%", trend: "+4" },
  pressure: { value: 1002, unit: "hPa", trend: "-6" },
  wind: { value: 38, unit: "km/h", trend: "+9" },
  rain: { value: 62, unit: "mm", trend: "+18" },
};

export const healthMetrics = [
  { label: "Battery", value: 76, unit: "%", status: "stable", detail: "18 nodes below 35%" },
  { label: "Signal", value: 91, unit: "%", status: "online", detail: "RSSI median -89 dBm" },
  { label: "Gateway", value: 6, unit: "/7", status: "degraded", detail: "Koyra relay unstable" },
  { label: "Nodes", value: 118, unit: "/128", status: "online", detail: "10 in sleep or degraded" },
];

export const riskScore = {
  value: 72,
  level: "Elevated",
  drivers: ["Rainfall intensity", "Pressure drop", "Gateway jitter", "Tide window"],
};

export const alerts = [
  { id: "ALT-2048", severity: "critical", title: "Cyclone-band wind spike", zone: "Barguna South", time: "2 min ago" },
  { id: "ALT-2047", severity: "warning", title: "Gateway packet jitter", zone: "Koyra Relay", time: "8 min ago" },
  { id: "ALT-2046", severity: "info", title: "Twin scenario completed", zone: "Simulation Core", time: "17 min ago" },
];

export const aiPrediction = {
  confidence: 89,
  label: "Likely localized flooding within 6 hours",
  recommendation: "Preserve gateway power, increase sampling interval, and pre-stage community alert route.",
};

export const recentActivity = [
  { time: "16:41", event: "Node SK-042 rerouted via SK-037 after RSSI degradation." },
  { time: "16:36", event: "Rainfall anomaly detected by edge model in Satkhira cluster." },
  { time: "16:22", event: "Gateway GW-03 switched to conservation mode." },
  { time: "16:10", event: "Digital twin flood scenario exported to dashboard." },
];

export const systemHealth = [
  { label: "Telemetry ingest", value: 98, status: "online" },
  { label: "Twin simulation", value: 86, status: "healing" },
  { label: "Alert pipeline", value: 94, status: "online" },
  { label: "Edge model drift", value: 12, status: "degraded", inverse: true },
];

export const nodeClusters = [
  { name: "Satkhira", online: 42, degraded: 4, offline: 1 },
  { name: "Khulna", online: 36, degraded: 3, offline: 2 },
  { name: "Barguna", online: 40, degraded: 2, offline: 1 },
];
