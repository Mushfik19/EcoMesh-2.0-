export type EntityStatus = "online" | "offline" | "degraded" | "moving" | "standby" | "maintenance";
export type AlertSeverity = "info" | "warning" | "critical";
export type NetworkLogLevel = "debug" | "info" | "warning" | "critical";

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface MeshNode {
  id: string;
  label: string;
  type: string;
  villageId: string;
  status: EntityStatus;
  firmware: string;
  batteryPercent: number;
  solarChargeWatts: number;
  rssiDbm: number;
  snrDb: number;
  packetDeliveryPercent: number;
  hopCount: number;
  gatewayId: string;
  gps: GeoPoint;
  lastSeen: string;
  sensors: string[];
}

export interface Boat {
  id: string;
  name: string;
  status: EntityStatus;
  crew: number;
  capacity: number;
  batteryPercent: number;
  assignedVillageId: string;
  gps: GeoPoint;
  headingDegrees: number;
  speedKph: number;
}

export interface Village {
  id: string;
  name: string;
  district: string;
  population: number;
  riskLevel: string;
  shelterCapacity: number;
  gps: GeoPoint;
}

export interface AlertEvent {
  id: string;
  type: string;
  severity: AlertSeverity;
  title: string;
  message: string;
  entityId: string;
  zone: string;
  acknowledged: boolean;
  createdAt: string;
  confidence: number;
}

export interface NetworkLog {
  id: string;
  timestamp: string;
  level: NetworkLogLevel;
  event: string;
  source: string;
  latencyMs: number;
  packetLossPercent: number;
  message: string;
}

export interface WeatherRecord {
  date: string;
  temperatureC: number;
  humidityPercent: number;
  pressureHpa: number;
  windKph: number;
  rainfallMm: number;
}

export interface AssetCatalogItem {
  id: string;
  label: string;
  purpose: string;
  status: "generated-in-css" | "future-asset" | "system-icon";
}
