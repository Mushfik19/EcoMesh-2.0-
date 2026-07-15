import { Battery, RadioTower, Search } from "lucide-react";
import { STATUS_STYLES } from "@/constants/platform";
import { useNodeFilters } from "@/hooks/useNodeFilters";
import { cn } from "@/lib/cn";
import type { MeshNode } from "@/types/ecosystem";
import { formatDateTime, formatPercent } from "@/utils/formatters";

export interface NodeTableProps {
  nodes: MeshNode[];
}

export function NodeTable({ nodes }: NodeTableProps) {
  const { filteredNodes, query, setQuery, setStatus, status } = useNodeFilters(nodes);

  return (
    <section className="rounded-lg border border-white/10 bg-surface/72 p-4 shadow-panel backdrop-blur-xl">
      <div className="flex flex-col gap-4 border-b border-border pb-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="type-mono text-xs uppercase text-primary">Field devices</p>
          <h2 className="type-title mt-1 text-2xl">LoRa Node Inventory</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative">
            <span className="sr-only">Search nodes</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              className="h-10 rounded-md border border-border bg-background pl-9 pr-3 text-sm outline-none transition focus:border-primary"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search node, gateway"
              value={query}
            />
          </label>
          <label>
            <span className="sr-only">Filter by node status</span>
            <select
              className="h-10 rounded-md border border-border bg-background px-3 text-sm outline-none transition focus:border-primary"
              onChange={(event) => setStatus(event.target.value)}
              value={status}
            >
              <option value="all">All statuses</option>
              <option value="online">Online</option>
              <option value="degraded">Degraded</option>
              <option value="offline">Offline</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr className="border-b border-border">
              <th className="py-3 pr-4 font-semibold">Node</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Signal</th>
              <th className="px-4 py-3 font-semibold">Battery</th>
              <th className="px-4 py-3 font-semibold">Gateway</th>
              <th className="px-4 py-3 font-semibold">Last seen</th>
            </tr>
          </thead>
          <tbody>
            {filteredNodes.map((node) => (
              <tr className="border-b border-border/70 last:border-0" key={node.id}>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/12 text-primary">
                      <RadioTower className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{node.label}</p>
                      <p className="text-xs text-muted-foreground">{node.id} · {node.type}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={cn("rounded-md px-2.5 py-1 text-xs font-bold capitalize", STATUS_STYLES[node.status] ?? STATUS_STYLES.degraded)}>
                    {node.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <p className="font-semibold">{node.rssiDbm} dBm</p>
                  <p className="text-xs text-muted-foreground">SNR {node.snrDb} dB · {formatPercent(node.packetDeliveryPercent, 1)}</p>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-amber-300" aria-hidden="true" />
                    <span className="font-semibold">{formatPercent(node.batteryPercent)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{node.solarChargeWatts}W solar</p>
                </td>
                <td className="px-4 py-4 font-semibold">{node.gatewayId}</td>
                <td className="px-4 py-4 text-muted-foreground">{formatDateTime(node.lastSeen)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
