import type { ReactNode } from "react";
import { RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import type { DashboardHeader } from "@/features/dashboard/types/dashboard.types";

export interface DashboardLayoutProps {
  children: ReactNode;
  header: DashboardHeader;
  isRefreshing?: boolean;
  onRefresh: () => void;
}

export function DashboardLayout({ children, header, isRefreshing = false, onRefresh }: DashboardLayoutProps) {
  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <header className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="type-mono text-xs uppercase text-primary">{header.region}</p>
            <h1 className="type-display mt-2 text-3xl sm:text-4xl">{header.title}</h1>
            <p className="type-body mt-2 max-w-3xl text-muted-foreground">{header.subtitle}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">Mission time</p>
              <p className="type-title mt-1 text-sm">{header.missionTime}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">Operator</p>
              <p className="type-title mt-1 text-sm">{header.operator}</p>
            </div>
            <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-4 py-3">
              <p className="text-xs text-emerald-100/70">Sync</p>
              <p className="type-title mt-1 text-sm text-emerald-100">{header.syncState}</p>
            </div>
            <button className="btn btn-primary h-full" onClick={onRefresh} type="button" disabled={isRefreshing}>
              <RefreshCw className={isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4"} aria-hidden="true" />
              Refresh
            </button>
          </div>
        </div>
      </header>

      <motion.main className="space-y-5 px-5 py-6 lg:px-8" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        {children}
      </motion.main>
    </div>
  );
}
