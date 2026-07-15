import { BrainCircuit, CloudRain, ShieldAlert, Waves } from "lucide-react";
import { KpiTile } from "@/components/ui/KpiTile";
import { LoadingSkeleton } from "@/components/common/LoadingSkeleton";
import { useMockQuery } from "@/hooks/useMockQuery";
import { mockDataService } from "@/services/mockDataService";
import { average, formatPercent } from "@/utils/formatters";

export function ClimateIntelligenceBrief() {
  const { data: weatherRecords, isLoading } = useMockQuery(mockDataService.getWeatherRecords);

  if (isLoading || !weatherRecords) {
    return <LoadingSkeleton />;
  }

  const latestWeek = weatherRecords.slice(-7);
  const avgRain = average(latestWeek.map((record) => record.rainfallMm));
  const avgWind = average(latestWeek.map((record) => record.windKph));
  const avgHumidity = average(latestWeek.map((record) => record.humidityPercent));

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Climate intelligence brief">
      <KpiTile detail="Seven-day rainfall signal from local weather history" icon={CloudRain} label="Rainfall pressure" tone="cyan" value={`${avgRain.toFixed(1)}mm`} />
      <KpiTile detail="Marine and cyclone readiness input" icon={Waves} label="Wind average" tone="violet" value={`${avgWind.toFixed(1)} kph`} />
      <KpiTile detail="Humidity trend for flood and heat stress models" icon={BrainCircuit} label="Model humidity" tone="emerald" value={formatPercent(avgHumidity)} />
      <KpiTile detail="Composite brief prepared for future AI API integration" icon={ShieldAlert} label="Decision support" tone="amber" value="Ready" />
    </section>
  );
}
