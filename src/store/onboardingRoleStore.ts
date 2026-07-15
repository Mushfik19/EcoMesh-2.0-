import { create } from "zustand";

export type EcoMeshRole =
  | "fisherman"
  | "farmer"
  | "government-officer"
  | "ngo"
  | "volunteer"
  | "researcher"
  | "administrator";

interface OnboardingRoleState {
  selectedRole: EcoMeshRole | null;
  setSelectedRole: (role: EcoMeshRole) => void;
  clearSelectedRole: () => void;
}

export const useOnboardingRoleStore = create<OnboardingRoleState>((set) => ({
  selectedRole: null,
  setSelectedRole: (role) => set({ selectedRole: role }),
  clearSelectedRole: () => set({ selectedRole: null }),
}));
