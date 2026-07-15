import type { LucideIcon } from "lucide-react";

export type DashboardSeverity = "info" | "warning" | "critical";
export type DashboardStatus = "online" | "stable" | "degraded" | "healing";
export type StatTone = "cyan" | "emerald" | "amber" | "rose" | "violet" | "slate";

export interface DashboardHeader {
  region: string;
  title: string;
  subtitle: string;
  missionTime: string;
  operator: string;
  syncState: string;
}

export interface DashboardStat {
  id: string;
  label: string;
  value: number | string;
  unit?: string;
  trend?: string;
  detail: string;
  status?: DashboardStatus;
  tone: StatTone;
  progress?: number;
  icon: LucideIcon;
}

export interface WeatherPoint {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: string;
  tone: StatTone;
}

export interface WeatherSummaryData {
  condition: string;
  narrative: string;
  riskIndex: number;
  metrics: WeatherPoint[];
}

export interface NetworkCluster {
  id: string;
  name: string;
  online: number;
  degraded: number;
  offline: number;
  packetDelivery: number;
  latencyMs: number;
}

export interface AlertSummaryItem {
  id: string;
  severity: DashboardSeverity;
  title: string;
  zone: string;
  timeAgo: string;
  confidence: number;
}

export interface ActivityItem {
  id: string;
  time: string;
  title: string;
  description: string;
  status: DashboardStatus;
}

export interface MapEntity {
  id: string;
  label: string;
  type: "gateway" | "node" | "boat" | "shelter";
  x: number;
  y: number;
  status: DashboardStatus;
}

export interface DashboardData {
  header: DashboardHeader;
  stats: DashboardStat[];
  weather: WeatherSummaryData;
  clusters: NetworkCluster[];
  alerts: AlertSummaryItem[];
  activities: ActivityItem[];
  mapEntities: MapEntity[];
}

export interface DashboardQueryState {
  data: DashboardData | null;
  error: Error | null;
  isLoading: boolean;
  refresh: () => Promise<void>;
}
