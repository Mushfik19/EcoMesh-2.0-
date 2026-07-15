export const aiPredictionSummary = {
  region: "Coastal forecasting corridor",
  title: "AI Prediction",
  subtitle: "Dummy inference outputs for flood, cyclone, weather risk, and operator recommendations.",
  updatedAt: "13 Jul 2026, 17:08 BDT",
};

export const riskGauge = {
  value: 74,
  label: "Composite risk",
  level: "Elevated",
  description: "Calculated from pressure, rainfall, humidity, wind, and signal degradation signals.",
};

export const probabilities = [
  { label: "Flood Probability", value: 68, tone: "danger", trend: "+7" },
  { label: "Cyclone Probability", value: 54, tone: "amber", trend: "+4" },
];

export const weatherForecast = [
  { time: "18:00", temperature: 31.8, humidity: 87, pressure: 1000, rainfall: 41, wind: 38 },
  { time: "20:00", temperature: 31.0, humidity: 89, pressure: 998, rainfall: 48, wind: 44 },
  { time: "22:00", temperature: 30.4, humidity: 91, pressure: 996, rainfall: 56, wind: 51 },
  { time: "00:00", temperature: 29.7, humidity: 93, pressure: 994, rainfall: 62, wind: 57 },
  { time: "02:00", temperature: 29.1, humidity: 94, pressure: 993, rainfall: 68, wind: 61 },
  { time: "04:00", temperature: 28.8, humidity: 95, pressure: 992, rainfall: 71, wind: 64 },
];

export const predictionTimeline = [
  { label: "T-6h", value: 58 },
  { label: "T-4h", value: 61 },
  { label: "T-2h", value: 66 },
  { label: "Now", value: 74 },
  { label: "T+2h", value: 79 },
  { label: "T+4h", value: 85 },
];

export const confidenceSeries = [
  { label: "Morning", value: 76 },
  { label: "Noon", value: 81 },
  { label: "Afternoon", value: 87 },
  { label: "Now", value: 91 },
];

export const aiRecommendation = {
  headline: "Trigger shelter readiness and broadcast the early warning route.",
  bullets: [
    "Increase sampling on exposed weather nodes.",
    "Prioritize gateway power on the southern mesh edge.",
    "Notify shelter operators and community coordinators.",
    "Keep rescue boat routing visible in the live map layer.",
  ],
};
