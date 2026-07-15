import { RoleCard } from "@/components/onboarding/RoleCard";
import { roleOptions } from "@/data/roleOptions";
import type { EcoMeshRole } from "@/store/onboardingRoleStore";

interface RoleGridProps {
  selectedRole: EcoMeshRole | null;
  onSelect: (role: EcoMeshRole) => void;
}

export function RoleGrid({ selectedRole, onSelect }: RoleGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" role="radiogroup" aria-label="EcoMesh role selection">
      {roleOptions.map((role) => (
        <div key={role.id} role="radio" aria-checked={selectedRole === role.id}>
          <RoleCard role={role} selected={selectedRole === role.id} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}
