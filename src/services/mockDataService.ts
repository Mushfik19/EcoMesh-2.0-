import alertsJson from "@/data/json/alerts.json";
import boatsJson from "@/data/json/boats.json";
import networkLogsJson from "@/data/json/network-logs.json";
import nodesJson from "@/data/json/nodes.json";
import villagesJson from "@/data/json/villages.json";
import weatherJson from "@/data/json/weather-records-365.json";
import { appConfig } from "@/config/appConfig";
import type { AlertEvent, Boat, MeshNode, NetworkLog, Village, WeatherRecord } from "@/types/ecosystem";

function wait(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function withMockLatency<T>(payload: T): Promise<T> {
  await wait(appConfig.mockLatencyMs);
  return payload;
}

export const mockDataService = {
  getNodes: () => withMockLatency(nodesJson as MeshNode[]),
  getBoats: () => withMockLatency(boatsJson as Boat[]),
  getVillages: () => withMockLatency(villagesJson as Village[]),
  getAlerts: () => withMockLatency(alertsJson as AlertEvent[]),
  getNetworkLogs: () => withMockLatency(networkLogsJson as NetworkLog[]),
  getWeatherRecords: () => withMockLatency(weatherJson as WeatherRecord[]),
};
