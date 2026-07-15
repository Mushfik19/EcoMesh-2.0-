import { useCallback, useEffect, useRef, useState } from "react";
import { dashboardMockData, dashboardPrediction, dashboardSystemSignals } from "@/features/dashboard/mock-data/dashboard.mock";
import { dashboardService } from "@/features/dashboard/services/dashboardService";
import type { DashboardPayload } from "@/features/dashboard/services/dashboardService";

export interface DashboardDataState {
  data: DashboardPayload | null;
  error: Error | null;
  isLoading: boolean;
  refresh: () => Promise<void>;
}

export function useDashboardData(): DashboardDataState {
  const [data, setData] = useState<DashboardPayload | null>({
    dashboard: dashboardMockData,
    prediction: dashboardPrediction,
    systemSignals: dashboardSystemSignals,
  });
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const payload = await dashboardService.getDashboard();
      if (mountedRef.current) {
        setData(payload);
      }
    } catch (caughtError) {
      if (mountedRef.current) {
        setError(caughtError instanceof Error ? caughtError : new Error("Unable to load dashboard data"));
      }
    } finally {
      if (mountedRef.current) {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { data, error, isLoading, refresh };
}
