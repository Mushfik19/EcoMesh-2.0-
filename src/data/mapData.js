export const liveMapSummary = {
  title: "Coastal Live Map",
  subtitle: "Dummy GPS overlays for gateways, villages, boats, cyclone watch, shelters, and LoRa nodes.",
  websocketState: "WebSocket ready",
  lastSync: "2 sec ago",
};

export const mapCenter = [22.2947, 89.7083];

export const mapLayers = [
  { key: "gateway", label: "Gateway" },
  { key: "village", label: "Villages" },
  { key: "boat", label: "Boats" },
  { key: "cyclone", label: "Cyclone" },
  { key: "shelter", label: "Shelters" },
  { key: "node", label: "LoRa Nodes" },
];

export const mapLegend = [
  { key: "gateway", label: "Gateway", color: "bg-cyan-300" },
  { key: "village", label: "Village", color: "bg-emerald-300" },
  { key: "boat", label: "Boat", color: "bg-blue-300" },
  { key: "cyclone", label: "Cyclone", color: "bg-red-300" },
  { key: "shelter", label: "Shelter", color: "bg-amber-300" },
  { key: "node", label: "LoRa Node", color: "bg-violet-300" },
];

export const liveEntities = [
  {
    id: "gw-01",
    type: "gateway",
    name: "Gateway GW-01",
    position: [22.3112, 89.7411],
    status: "online",
    detail: "Primary uplink relay",
  },
  {
    id: "gw-02",
    type: "gateway",
    name: "Gateway GW-02",
    position: [22.2448, 89.6602],
    status: "degraded",
    detail: "Reduced signal corridor",
  },
  {
    id: "vil-01",
    type: "village",
    name: "Dacope Village",
    position: [22.5421, 89.5383],
    status: "online",
    detail: "Community node cluster",
  },
  {
    id: "vil-02",
    type: "village",
    name: "Koyra Village",
    position: [22.3818, 89.2323],
    status: "online",
    detail: "River-side settlement",
  },
  {
    id: "boat-01",
    type: "boat",
    name: "Rescue Boat B-17",
    position: [22.3078, 89.4245],
    status: "moving",
    detail: "Heading toward shelter route",
  },
  {
    id: "boat-02",
    type: "boat",
    name: "Boat B-21",
    position: [22.1635, 89.5061],
    status: "moving",
    detail: "Patrolling floodplain edge",
  },
  {
    id: "shelter-01",
    type: "shelter",
    name: "Shelter S-04",
    position: [22.3515, 89.6869],
    status: "ready",
    detail: "Capacity 86%",
  },
  {
    id: "shelter-02",
    type: "shelter",
    name: "Shelter S-09",
    position: [22.4691, 89.3398],
    status: "ready",
    detail: "Generator online",
  },
  {
    id: "node-01",
    type: "node",
    name: "LoRa Node LN-12",
    position: [22.2922, 89.7094],
    status: "online",
    detail: "Temperature / humidity",
  },
  {
    id: "node-02",
    type: "node",
    name: "LoRa Node LN-24",
    position: [22.2895, 89.7342],
    status: "online",
    detail: "Wind / rain sensing",
  },
];

export const cycloneZone = {
  name: "Cyclone watch zone",
  center: [22.258, 89.612],
  radius: 32000,
  severity: "warning",
  detail: "Projected surge corridor",
};

export const dummyGpsTrack = [
  [22.2602, 89.5101],
  [22.2758, 89.5627],
  [22.2892, 89.6111],
  [22.3014, 89.6684],
  [22.3134, 89.7123],
];

export const mapStats = [
  { label: "Gateway", value: 2, unit: "active" },
  { label: "Villages", value: 2, unit: "tracked" },
  { label: "Boats", value: 2, unit: "moving" },
  { label: "Shelters", value: 2, unit: "ready" },
  { label: "LoRa Nodes", value: 2, unit: "live" },
];
