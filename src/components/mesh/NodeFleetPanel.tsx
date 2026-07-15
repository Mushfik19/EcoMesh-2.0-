import { Battery, RadioTower, Router, Signal } from "lucide-react";
import { KpiTile } from "@/components/ui/KpiTile";
import type { MeshNode } from "@/types/ecosystem";
import { average, formatPercent } from "@/utils/formatters";

export interface NodeFleetPanelProps {
  nodes: MeshNode[];
}

export function NodeFleetPanel({ nodes }: NodeFleetPanelProps) {
  const onlineNodes = nodes.filter((node) => node.status === "online").length;
  const avgBattery = average(nodes.map((node) => node.batteryPercent));
  const avgDelivery = average(nodes.map((node) => node.packetDeliveryPercent));
  const gateways = new Set(nodes.map((node) => node.gatewayId)).size;

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Node fleet summary">
      <KpiTile
        detail={`${onlineNodes} of ${nodes.length} nodes currently reporting`}
        icon={RadioTower}
        label="Node availability"
        tone="emerald"
        value={formatPercent((onlineNodes / Math.max(nodes.length, 1)) * 100)}
      />
      <KpiTile
        detail="Solar-assisted battery reserve across field nodes"
        icon={Battery}
        label="Average battery"
        tone="amber"
        value={formatPercent(avgBattery)}
      />
      <KpiTile
        detail="Packet delivery across the coastal mesh"
        icon={Signal}
        label="Delivery quality"
        tone="cyan"
        value={formatPercent(avgDelivery, 1)}
      />
      <KpiTile
        detail="LoRa gateways actively anchoring field traffic"
        icon={Router}
        label="Gateway clusters"
        tone="violet"
        value={String(gateways)}
      />
    </section>
  );
}
