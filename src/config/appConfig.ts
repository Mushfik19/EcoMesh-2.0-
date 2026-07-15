export interface AppConfig {
  appName: string;
  releaseChannel: string;
  region: string;
  defaultLocale: string;
  supportEmail: string;
  mockLatencyMs: number;
}

export const appConfig: AppConfig = {
  appName: "EcoMesh 2.0",
  releaseChannel: "hackathon-demo",
  region: "Coastal Bangladesh",
  defaultLocale: "en-BD",
  supportEmail: "mission-control@ecomesh.demo",
  mockLatencyMs: 220,
};
