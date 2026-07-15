import { dashboardMockData, dashboardPrediction, dashboardSystemSignals } from "@/features/dashboard/mock-data/dashboard.mock";
import type { DashboardData } from "@/features/dashboard/types/dashboard.types";

export interface DashboardPayload {
  dashboard: DashboardData;
  prediction: typeof dashboardPrediction;
  systemSignals: typeof dashboardSystemSignals;
}

const DASHBOARD_MOCK_LATENCY_MS = 180;

export const dashboardService = {
  async getDashboard(): Promise<DashboardPayload> {
    await new Promise((resolve) => {
      setTimeout(resolve, DASHBOARD_MOCK_LATENCY_MS);
    });

    return {
      dashboard: dashboardMockData,
      prediction: dashboardPrediction,
      systemSignals: dashboardSystemSignals,
    };
  },
};
