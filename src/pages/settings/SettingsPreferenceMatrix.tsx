import { Bell, Languages, LockKeyhole, MapPinned } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PreferenceItem {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  enabled: boolean;
}

const preferenceItems: PreferenceItem[] = [
  {
    id: "sms-alerts",
    label: "SMS alert escalation",
    description: "Send critical cyclone and flood alerts through telecom channels when app delivery is unavailable.",
    enabled: true,
    icon: Bell,
  },
  {
    id: "bangla-first",
    label: "Bangla-first interface",
    description: "Prioritize Bangla labels for field users while keeping English available for command teams.",
    enabled: true,
    icon: Languages,
  },
  {
    id: "operator-lock",
    label: "Operator session lock",
    description: "Require renewed OTP verification for sensitive workflow changes.",
    enabled: true,
    icon: LockKeyhole,
  },
  {
    id: "risk-map",
    label: "Risk map overlays",
    description: "Display shelter capacity, storm surge corridors, and LoRa node health on maps.",
    enabled: true,
    icon: MapPinned,
  },
];

export function SettingsPreferenceMatrix() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {preferenceItems.map((item) => {
        const Icon = item.icon;

        return (
          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-4" key={item.id}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
                {item.enabled ? "On" : "Off"}
              </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
