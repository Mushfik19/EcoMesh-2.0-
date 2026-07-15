import { BrainCircuit } from "lucide-react";
import { AlertPanel } from "@/features/dashboard/AlertPanel";
import { DashboardLayout } from "@/features/dashboard/DashboardLayout";
import { LiveMapPreview } from "@/features/dashboard/LiveMapPreview";
import { NetworkStatus } from "@/features/dashboard/NetworkStatus";
import { RecentActivity } from "@/features/dashboard/RecentActivity";
import { StatCard } from "@/features/dashboard/StatCard";
import { WeatherSummary } from "@/features/dashboard/WeatherSummary";
import { useDashboardData } from "@/features/dashboard/hooks/useDashboardData";

function DashboardSkeleton() {
  return (
    <div className="dark min-h-svh bg-background p-5 text-foreground lg:p-8">
      <div className="mb-6 h-32 animate-pulse rounded-lg bg-white/[0.06]" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="h-44 animate-pulse rounded-lg bg-white/[0.06]" key={index} />
        ))}
      </div>
    </div>
  );
}

export function DashboardPage() {
  const { data, error, isLoading, refresh } = useDashboardData();

  if (isLoading && !data) {
    return <DashboardSkeleton />;
  }

  if (error || !data) {
    return (
      <div className="dark grid min-h-svh place-items-center bg-background p-6 text-foreground">
        <div className="max-w-md rounded-lg border border-rose-300/30 bg-rose-300/10 p-6 text-center">
          <h1 className="type-title text-2xl text-rose-100">Dashboard unavailable</h1>
          <p className="mt-3 text-sm text-muted-foreground">{error?.message ?? "Mock dashboard data could not be loaded."}</p>
          <button className="btn btn-primary mt-5" onClick={() => void refresh()} type="button">
            Try again
          </button>
        </div>
      </div>
    );
  }

  const { dashboard, prediction, systemSignals } = data;

  return (
    <DashboardLayout header={dashboard.header} isRefreshing={isLoading} onRefresh={() => void refresh()}>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {dashboard.stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <WeatherSummary weather={dashboard.weather} />
        <section className="rounded-lg border border-primary/20 bg-primary/10 p-5 shadow-panel">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
              <BrainCircuit className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="type-mono text-xs uppercase text-primary">Edge intelligence</p>
              <h2 className="type-title text-xl">{prediction.label}</h2>
            </div>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-background/60">
            <div className="h-full rounded-full bg-primary" style={{ width: `${prediction.confidence}%` }} />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{prediction.recommendation}</p>
          <div className="mt-5 grid gap-3">
            {systemSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-3 py-2" key={signal.label}>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    {signal.label}
                  </span>
                  <span className="font-semibold">{signal.value}%</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <NetworkStatus clusters={dashboard.clusters} />

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <LiveMapPreview entities={dashboard.mapEntities} />
        <AlertPanel alerts={dashboard.alerts} />
      </div>

      <RecentActivity activities={dashboard.activities} />
    </DashboardLayout>
  );
}
