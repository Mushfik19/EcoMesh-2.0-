import { BellRing, RadioTower, ShieldAlert } from "lucide-react";
import { PanelCard } from "@/components/dashboard/PanelCard";

const notifications = [
  {
    title: "Cyclone watch escalated",
    description: "Barguna coastal belt moved to elevated response readiness.",
    meta: "2 minutes ago",
    icon: ShieldAlert,
  },
  {
    title: "Gateway health stable",
    description: "GW-03 resumed route stabilization after packet jitter.",
    meta: "12 minutes ago",
    icon: RadioTower,
  },
  {
    title: "Volunteer task issued",
    description: "Two field verification tasks are ready for review.",
    meta: "27 minutes ago",
    icon: BellRing,
  },
];

export function NotificationsPage() {
  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <div className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <p className="type-mono text-xs uppercase text-primary">Notifications</p>
        <h1 className="type-display mt-2 text-3xl sm:text-4xl">Operational alerts</h1>
        <p className="type-body mt-2 max-w-3xl text-muted-foreground">Mission-critical notices, system updates, and coordination signals for the current session.</p>
      </div>
      <div className="grid gap-4 px-5 py-6 lg:px-8 xl:grid-cols-3">
        {notifications.map((item) => {
          const Icon = item.icon;
          return (
            <PanelCard key={item.title} title={item.title} eyebrow={item.meta}>
              <div className="flex gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            </PanelCard>
          );
        })}
      </div>
    </div>
  );
}
