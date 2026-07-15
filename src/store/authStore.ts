import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { EcoMeshRole } from "@/store/onboardingRoleStore";

export type AuthRole = EcoMeshRole | "administrator";

export interface AuthProfileSnapshot {
  [key: string]: string;
}

export interface AuthAccount {
  id: string;
  username: string;
  fullName: string;
  phone: string;
  email: string;
  password: string;
  role: AuthRole | null;
  verified: boolean;
  onboardingComplete: boolean;
  profile: AuthProfileSnapshot;
  steps: Record<string, AuthProfileSnapshot>;
  createdAt: string;
  updatedAt: string;
}

export interface PendingAuthSession {
  accountId: string;
  identifier: string;
  otpCode: string;
  purpose: "register" | "login";
}

export interface AuthRegisterInput {
  name: string;
  phone: string;
  email: string;
  password: string;
  username?: string;
}

export interface AuthLoginInput {
  identifier: string;
  password: string;
}

export interface AuthVerifyInput {
  otp: string;
}

export interface AuthStepInput {
  step: string;
  payload: AuthProfileSnapshot;
}

export interface AuthState {
  accounts: AuthAccount[];
  currentAccountId: string | null;
  pendingSession: PendingAuthSession | null;
  lastError: string | null;
  registerAccount: (input: AuthRegisterInput) => { nextStep: "otp-verification"; account: AuthAccount };
  loginAccount: (input: AuthLoginInput) => { nextStep: "otp-verification" | "dashboard"; account: AuthAccount };
  verifyOtp: (input: AuthVerifyInput) => {
    nextStep: "role-selection" | "role-registration" | "profile-setup" | "location-selection" | "emergency-contact" | "device-registration" | "approval-workflow" | "dashboard";
    account: AuthAccount;
  };
  saveStep: (input: AuthStepInput) => {
    nextStep: "role-selection" | "role-registration" | "profile-setup" | "location-selection" | "emergency-contact" | "device-registration" | "approval-workflow" | "dashboard";
  };
  completeSession: (accountId: string) => void;
  setError: (message: string | null) => void;
  logout: () => void;
  ensureSeedAccounts: () => void;
}

const MOCK_OTP_CODE = "132424";
const ADMIN_USERNAME = "mushfik";
const ADMIN_PASSWORD = "1324";

function now() {
  return new Date().toISOString();
}

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}-${Date.now().toString(36)}`;
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function generateUsername(name: string, phone: string) {
  const cleaned = normalizeText(name)
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .join(".");
  const suffix = phone.replace(/\D/g, "").slice(-4) || "0000";
  return `${cleaned || "eco.user"}.${suffix}`;
}

function ensureSeedAdmin(accounts: AuthAccount[]) {
  const hasAdmin = accounts.some((account) => account.username === ADMIN_USERNAME);
  if (hasAdmin) return accounts;

  const admin: AuthAccount = {
    createdAt: now(),
    email: "mushfik@ecomesh.local",
    fullName: "Mushfik Arman",
    id: "acct-admin-mushfik",
    onboardingComplete: true,
    password: ADMIN_PASSWORD,
    phone: "+8801000000000",
    profile: {
      department: "Platform Administration",
      designation: "Administrator",
      officeLocation: "EcoMesh Control Room",
    },
    role: "administrator",
    steps: {
      "role-selection": { role: "administrator" },
      "role-registration": { username: ADMIN_USERNAME },
      "profile-setup": { organization: "EcoMesh Core Team", language: "Bangla" },
    },
    updatedAt: now(),
    username: ADMIN_USERNAME,
    verified: true,
  };

  return [admin, ...accounts];
}

function getLatestRoleStep(account: AuthAccount) {
  const orderedSteps = [
    "role-selection",
    "role-registration",
    "profile-setup",
    "location-selection",
    "emergency-contact",
    "device-registration",
    "approval-workflow",
  ];

  for (let index = orderedSteps.length - 1; index >= 0; index -= 1) {
    const step = orderedSteps[index];
    if (account.steps[step]) {
      return step;
    }
  }

  return null;
}

function findAccount(accounts: AuthAccount[], identifier: string) {
  const value = normalizeText(identifier);
  return accounts.find(
    (account) =>
      normalizeText(account.username) === value ||
      normalizeText(account.phone) === value ||
      normalizeText(account.email) === value,
  );
}

function createAccount(input: AuthRegisterInput): AuthAccount {
  const username = normalizeText(input.username || generateUsername(input.name, input.phone));
  return {
    createdAt: now(),
    email: input.email.trim(),
    fullName: input.name.trim(),
    id: createId("acct"),
    onboardingComplete: false,
    password: input.password,
    phone: input.phone.trim(),
    profile: {},
    role: null,
    steps: {
      register: {
        email: input.email.trim(),
        fullName: input.name.trim(),
        phone: input.phone.trim(),
        username,
      },
    },
    updatedAt: now(),
    username,
    verified: false,
  };
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accounts: ensureSeedAdmin([]),
      currentAccountId: null,
      pendingSession: null,
      lastError: null,
      registerAccount(input) {
        const { accounts } = get();
        const duplicate = findAccount(accounts, input.username || input.phone) || findAccount(accounts, input.email);
        if (duplicate) {
          throw new Error("An account with this username, phone number, or email already exists.");
        }

        const account = createAccount(input);
        set((state) => ({
          accounts: ensureSeedAdmin([...state.accounts, account]),
          currentAccountId: null,
          lastError: null,
          pendingSession: {
            accountId: account.id,
            identifier: account.username,
            otpCode: MOCK_OTP_CODE,
            purpose: "register",
          },
        }));

        return { nextStep: "otp-verification" as const, account };
      },
      loginAccount(input) {
        const account = findAccount(get().accounts, input.identifier);
        if (!account || account.password !== input.password) {
          throw new Error("Invalid username, phone number, or password.");
        }

        const nextStep = account.verified && account.onboardingComplete ? ("dashboard" as const) : ("otp-verification" as const);
        set({
          currentAccountId: nextStep === "dashboard" ? account.id : null,
          lastError: null,
          pendingSession: nextStep === "dashboard"
            ? null
            : {
                accountId: account.id,
                identifier: input.identifier,
                otpCode: MOCK_OTP_CODE,
                purpose: "login",
              },
        });

        return { nextStep, account };
      },
      verifyOtp(input) {
        const session = get().pendingSession;
        if (!session) {
          throw new Error("No pending verification session was found.");
        }
        if (input.otp.trim() !== session.otpCode) {
          throw new Error("The verification code is not valid.");
        }

        const account = get().accounts.find((item) => item.id === session.accountId);
        if (!account) {
          throw new Error("The account could not be restored for verification.");
        }

        const latestStep = getLatestRoleStep(account);
        const resolvedNextStep = account.role
          ? account.onboardingComplete
            ? ("dashboard" as const)
            : ((latestStep === "role-registration"
                ? "profile-setup"
                : latestStep === "profile-setup"
                  ? "location-selection"
                  : latestStep === "location-selection"
                    ? "emergency-contact"
                    : latestStep === "emergency-contact"
                      ? "device-registration"
                      : latestStep === "device-registration"
                        ? "approval-workflow"
                        : "role-registration") as const)
          : ("role-selection" as const);

        set((state) => ({
          accounts: state.accounts.map((item) =>
            item.id === account.id
              ? {
                  ...item,
                  verified: true,
                  updatedAt: now(),
                }
              : item,
          ),
          currentAccountId: account.id,
          lastError: null,
          pendingSession: null,
        }));

        return { nextStep: resolvedNextStep, account: { ...account, verified: true } };
      },
      saveStep({ payload, step }) {
        const currentAccountId = get().currentAccountId;
        if (!currentAccountId) {
          throw new Error("No authenticated account is active.");
        }

        const account = get().accounts.find((item) => item.id === currentAccountId);
        if (!account) {
          throw new Error("Could not locate the active account.");
        }

        const normalizedStep = step.replace(/\s+/g, "-");
        const nextAccount: AuthAccount = {
          ...account,
          profile: {
            ...account.profile,
            ...payload,
          },
          role: normalizedStep === "role-selection" ? (payload.role as AuthRole | undefined) ?? account.role : account.role,
          steps: {
            ...account.steps,
            [normalizedStep]: { ...payload },
          },
          updatedAt: now(),
          onboardingComplete: normalizedStep === "approval-workflow" ? true : account.onboardingComplete,
        };

        set((state) => ({
          accounts: state.accounts.map((item) => (item.id === currentAccountId ? nextAccount : item)),
          lastError: null,
        }));

        const nextStep = normalizedStep === "role-selection"
          ? (payload.role === "administrator" ? ("dashboard" as const) : ("role-registration" as const))
          : normalizedStep === "role-registration"
            ? ("profile-setup" as const)
            : normalizedStep === "profile-setup"
              ? ("location-selection" as const)
              : normalizedStep === "location-selection"
                ? ("emergency-contact" as const)
                : normalizedStep === "emergency-contact"
                  ? ("device-registration" as const)
                  : normalizedStep === "device-registration"
                    ? ("approval-workflow" as const)
                    : ("dashboard" as const);

        return { nextStep };
      },
      completeSession(accountId) {
        set({
          currentAccountId: accountId,
          pendingSession: null,
        });
      },
      setError(message) {
        set({ lastError: message });
      },
      logout() {
        set({
          currentAccountId: null,
          lastError: null,
          pendingSession: null,
        });
      },
      ensureSeedAccounts() {
        set((state) => ({
          accounts: ensureSeedAdmin(state.accounts),
        }));
      },
    }),
    {
      name: "ecomesh-auth-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accounts: state.accounts,
        currentAccountId: state.currentAccountId,
        pendingSession: state.pendingSession,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        state.ensureSeedAccounts();
      },
    },
  ),
);

export const authSeed = {
  adminPassword: ADMIN_PASSWORD,
  adminUsername: ADMIN_USERNAME,
  mockOtp: MOCK_OTP_CODE,
};
