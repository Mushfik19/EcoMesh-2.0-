import { authSeed, useAuthStore } from "@/store/authStore";

const wait = (ms = 320) => new Promise((resolve) => window.setTimeout(resolve, ms));

const createResponse = (payload) => ({
  ok: true,
  requestId: `REQ-${Math.floor(100000 + Math.random() * 899999)}`,
  payload,
});

function normalizeAuthResult(result) {
  return result;
}

export const onboardingApi = {
  async registerUser(formData) {
    await wait();
    const result = normalizeAuthResult(useAuthStore.getState().registerAccount({
      name: formData.name || formData.fullName || "",
      phone: formData.phone || formData.phoneNumber || "",
      email: formData.email || formData.officialEmail || "",
      password: formData.password || "",
      username: formData.username || "",
    }));

    return createResponse({
      userId: result.account.id,
      nextStep: result.nextStep,
      username: result.account.username,
      phone: result.account.phone,
    });
  },

  async login(credentials) {
    await wait();
    const result = normalizeAuthResult(useAuthStore.getState().loginAccount({
      identifier: credentials.identifier || credentials.phone || "",
      password: credentials.password || "",
    }));

    return createResponse({
      accountId: result.account.id,
      identifier: credentials.identifier || credentials.phone || "",
      nextStep: result.nextStep,
      requiresOtp: result.nextStep === "otp-verification",
    });
  },

  async verifyOtp(data) {
    await wait();
    const result = normalizeAuthResult(useAuthStore.getState().verifyOtp({
      otp: data.otp || "",
    }));

    return createResponse({
      verified: true,
      nextStep: result.nextStep,
      role: result.account.role,
      accountId: result.account.id,
    });
  },

  async saveOnboardingStep(step, payload) {
    await wait();
    const result = normalizeAuthResult(useAuthStore.getState().saveStep({
      step,
      payload,
    }));

    return createResponse({
      step,
      nextStep: result.nextStep,
      savedAt: new Date().toISOString(),
      payload,
    });
  },

  async registerDevice(payload) {
    await wait();
    return createResponse({
      deviceId: payload.nodeId || "LN-MOCK-001",
      approvalStatus: "pending-review",
      payload,
    });
  },

  async getApprovalStatus() {
    await wait(240);
    return createResponse({
      status: "pending",
      reviewer: "Khulna District Operations Desk",
      estimatedReview: "24 hours",
    });
  },

  authSeed,
};
