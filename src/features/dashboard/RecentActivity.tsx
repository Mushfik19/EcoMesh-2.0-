import { statusClasses } from "@/features/dashboard/constants/dashboard.constants";
import type { ActivityItem } from "@/features/dashboard/types/dashboard.types";
import { cn } from "@/lib/cn";

export interface RecentActivityProps {
  activities: ActivityItem[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-5 shadow-panel backdrop-blur-xl">
      <div className="mb-5">
        <p className="type-mono text-xs uppercase text-primary">Operations log</p>
        <h2 className="type-title mt-1 text-2xl">Recent Activity</h2>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <article className="grid grid-cols-[4.25rem_1fr] gap-4" key={activity.id}>
            <time className="type-mono pt-1 text-xs text-primary">{activity.time}</time>
            <div className="border-l border-white/10 pl-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{activity.title}</h3>
                <span className={cn("rounded-md border px-2 py-0.5 text-[0.68rem] font-bold", statusClasses[activity.status])}>
                  {activity.status}
                </span>
              </div>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{activity.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
