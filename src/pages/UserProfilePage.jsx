import { BadgeCheck, Building2, MapPin, Phone, ShieldCheck, User } from "lucide-react";
import { PanelCard } from "@/components/dashboard/PanelCard";
import { StatusPill } from "@/components/dashboard/StatusPill";
import { defaultUserProfile } from "@/constants/onboarding";

export function UserProfilePage() {
  const profile = defaultUserProfile;
  const rows = [
    { label: "Name", value: profile.name, icon: User },
    { label: "Phone", value: profile.phone, icon: Phone },
    { label: "Organization", value: profile.organization, icon: Building2 },
    { label: "District", value: profile.district, icon: MapPin },
    { label: "Role", value: profile.role, icon: ShieldCheck },
    { label: "Status", value: profile.status, icon: BadgeCheck },
  ];

  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <div className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <p className="type-mono text-xs uppercase text-primary">User Profile</p>
        <h1 className="type-display mt-2 text-3xl sm:text-4xl">Operator identity</h1>
        <p className="type-body mt-2 max-w-3xl text-muted-foreground">Mock user profile prepared for future account, approval, role, and organization APIs.</p>
      </div>
      <div className="grid grid-cols-12 gap-5 px-5 py-6 lg:px-8">
        <PanelCard title="Profile" eyebrow="Identity" className="col-span-12 xl:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <Icon className="text-primary" size={19} aria-hidden="true" />
                  <p className="mt-3 text-xs text-muted-foreground">{row.label}</p>
                  <p className="type-title mt-1 text-lg">{row.value}</p>
                </div>
              );
            })}
          </div>
        </PanelCard>
        <PanelCard title="Access" eyebrow="Approval" className="col-span-12 xl:col-span-5">
          <div className="space-y-4">
            <StatusPill status="degraded" label="Pending approval" />
            <p className="type-body text-muted-foreground">This profile can later hydrate from `/me`, role permissions, district approval, and registered device ownership APIs.</p>
            <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
              <p className="type-title text-lg">Future backend integration</p>
              <p className="mt-2 text-sm text-muted-foreground">JWT session, profile update, organization membership, emergency contacts, and audit history.</p>
            </div>
          </div>
        </PanelCard>
      </div>
    </div>
  );
}
