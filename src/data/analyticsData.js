export const analyticsSummary = {
  region: "Coastal monitoring corridor",
  title: "Analytics Command",
  subtitle: "Historical trends, AI confidence, and operational health for the EcoMesh coastal network.",
  updatedAt: "13 Jul 2026, 16:58 BDT",
};

export const analyticsSeries = [
  { time: "10:00", temperature: 29.4, humidity: 76, pressure: 1007, battery: 91, signal: 94, prediction: 58, rainfall: 4, nodeHealth: 96, aiConfidence: 82 },
  { time: "11:00", temperature: 29.9, humidity: 78, pressure: 1006, battery: 90, signal: 93, prediction: 61, rainfall: 7, nodeHealth: 95, aiConfidence: 83 },
  { time: "12:00", temperature: 30.4, humidity: 80, pressure: 1005, battery: 89, signal: 92, prediction: 63, rainfall: 10, nodeHealth: 94, aiConfidence: 84 },
  { time: "13:00", temperature: 30.8, humidity: 82, pressure: 1004, battery: 88, signal: 91, prediction: 66, rainfall: 16, nodeHealth: 93, aiConfidence: 86 },
  { time: "14:00", temperature: 31.2, humidity: 83, pressure: 1003, battery: 87, signal: 90, prediction: 69, rainfall: 22, nodeHealth: 92, aiConfidence: 87 },
  { time: "15:00", temperature: 31.7, humidity: 85, pressure: 1002, battery: 85, signal: 89, prediction: 72, rainfall: 29, nodeHealth: 91, aiConfidence: 88 },
  { time: "16:00", temperature: 32.1, humidity: 86, pressure: 1001, battery: 84, signal: 88, prediction: 75, rainfall: 34, nodeHealth: 90, aiConfidence: 89 },
  { time: "17:00", temperature: 32.4, humidity: 87, pressure: 1000, battery: 83, signal: 87, prediction: 78, rainfall: 41, nodeHealth: 89, aiConfidence: 90 },
];

export const analyticsHighlights = [
  { label: "Temperature", value: "32.4 C", delta: "+1.7" },
  { label: "Humidity", value: "87%", delta: "+11" },
  { label: "Pressure", value: "1000 hPa", delta: "-7" },
  { label: "Battery", value: "83%", delta: "-8" },
  { label: "Signal", value: "87%", delta: "-7" },
  { label: "Rainfall", value: "41 mm", delta: "+37" },
];

export const chartDefinitions = [
  { key: "temperature", label: "Temperature", unit: "C", accent: "var(--chart-orange)" },
  { key: "humidity", label: "Humidity", unit: "%", accent: "var(--chart-cyan)" },
  { key: "pressure", label: "Pressure", unit: "hPa", accent: "var(--chart-slate)" },
  { key: "battery", label: "Battery", unit: "%", accent: "var(--chart-green)" },
  { key: "signal", label: "Signal", unit: "%", accent: "var(--chart-violet)" },
  { key: "prediction", label: "Prediction", unit: "%", accent: "var(--chart-red)" },
  { key: "rainfall", label: "Rainfall", unit: "mm", accent: "var(--chart-blue)" },
  { key: "nodeHealth", label: "Node Health", unit: "%", accent: "var(--chart-teal)" },
  { key: "aiConfidence", label: "AI Confidence", unit: "%", accent: "var(--chart-yellow)" },
];

export const analyticsInsights = [
  "Rising humidity and rainfall converge with falling pressure across the afternoon window.",
  "Battery health remains stable, but long-duration storm conditions may accelerate depletion.",
  "AI confidence climbs in step with the prediction model as weather signals become more certain.",
];

export const nodeHealthBreakdown = [
  { name: "Online", value: 78, fill: "var(--chart-green)" },
  { name: "Degraded", value: 14, fill: "var(--chart-yellow)" },
  { name: "Offline", value: 8, fill: "var(--chart-red)" },
];
