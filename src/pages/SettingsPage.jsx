import { Bell, Globe2, Lock, Map, RadioTower } from "lucide-react";
import { PanelCard } from "@/components/dashboard/PanelCard";

const settingsGroups = [
  { label: "Notifications", detail: "SMS, app alerts, siren escalation, and digest settings.", icon: Bell },
  { label: "Language and region", detail: "Bangla/English display, district defaults, and local time.", icon: Globe2 },
  { label: "Security", detail: "OTP policy, trusted devices, and session controls.", icon: Lock },
  { label: "Map layers", detail: "Weather, cyclone, shelter, node, boat, and risk overlays.", icon: Map },
  { label: "Device preferences", detail: "Gateway, LoRa node, QR scanner, and maintenance options.", icon: RadioTower },
];

export function SettingsPage() {
  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <div className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <p className="type-mono text-xs uppercase text-primary">Settings</p>
        <h1 className="type-display mt-2 text-3xl sm:text-4xl">Operator settings</h1>
        <p className="type-body mt-2 max-w-3xl text-muted-foreground">Frontend-ready settings surface for future user, device, alert, and security APIs.</p>
      </div>
      <div className="grid grid-cols-12 gap-5 px-5 py-6 lg:px-8">
        {settingsGroups.map((group) => {
          const Icon = group.icon;
          return (
            <PanelCard key={group.label} title={group.label} eyebrow="Preference" className="col-span-12 md:col-span-6 xl:col-span-4">
              <Icon className="text-primary" size={22} aria-hidden="true" />
              <p className="type-body mt-4 text-sm text-muted-foreground">{group.detail}</p>
              <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <span className="text-sm text-muted-foreground">Enabled</span>
                <button type="button" className="h-6 w-11 rounded-full bg-primary p-1" aria-label={`Toggle ${group.label}`}>
                  <span className="block h-4 w-4 translate-x-5 rounded-full bg-primary-foreground" />
                </button>
              </div>
            </PanelCard>
          );
        })}
      </div>
    </div>
  );
}
