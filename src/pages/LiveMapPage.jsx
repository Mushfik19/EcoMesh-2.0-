import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, Circle, CircleMarker, Polyline, TileLayer, Tooltip } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Activity, Anchor, Gauge, Radar, Signal, Waves } from "lucide-react";
import { PanelCard } from "@/components/dashboard/PanelCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AnimatedMarkerBadge } from "@/components/maps/AnimatedMarkerBadge";
import { MapFilterBar } from "@/components/maps/MapFilterBar";
import { MapLegend } from "@/components/maps/MapLegend";
import {
  cycloneZone,
  dummyGpsTrack,
  liveEntities,
  liveMapSummary,
  mapCenter,
  mapLayers,
  mapLegend,
  mapStats,
} from "@/data/mapData";

function buildMapIcon(type, tone) {
  return divIcon({
    className: "bg-transparent border-0",
    html: `
      <div class="map-marker ${type}">
        <span class="map-marker-core ${tone}"></span>
      </div>
    `,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
  });
}

function entityTone(type) {
  if (type === "gateway") return "bg-cyan-300";
  if (type === "village") return "bg-emerald-300";
  if (type === "boat") return "bg-blue-300";
  if (type === "shelter") return "bg-amber-300";
  if (type === "node") return "bg-violet-300";
  return "bg-red-300";
}

export function LiveMapPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleEntities = useMemo(() => {
    if (activeFilter === "all") return liveEntities;
    return liveEntities.filter((entity) => entity.type === activeFilter);
  }, [activeFilter]);

  const gateway = liveEntities.find((entity) => entity.type === "gateway");
  const animatedEntity = liveEntities.find((entity) => entity.type === "boat") ?? gateway;
  const selectedFilterLabel = mapLayers.find((item) => item.key === activeFilter)?.label ?? "All";

  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <div className="border-b border-white/10 bg-surface/70 px-5 py-5 backdrop-blur-xl lg:px-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Radar size={14} aria-hidden="true" />
              Future WebSocket ready
            </div>
            <p className="type-mono text-xs uppercase text-primary">{liveMapSummary.subtitle}</p>
            <h1 className="type-display mt-2 text-3xl sm:text-4xl">{liveMapSummary.title}</h1>
            <p className="type-body mt-2 max-w-3xl text-muted-foreground">
              Dummy GPS positions for gateways, villages, boats, cyclone watch zones, shelters, and LoRa nodes across the coastal belt.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">State</p>
              <p className="type-title mt-1 text-sm">{liveMapSummary.websocketState}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">Last sync</p>
              <p className="type-title mt-1 text-sm">{liveMapSummary.lastSync}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs text-muted-foreground">Filter</p>
              <p className="type-title mt-1 text-sm">{selectedFilterLabel}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 px-5 py-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-[1.45fr_0.55fr]">
          <PanelCard
            title="Live Map"
            eyebrow="Geospatial operations"
            action={<span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">Animated marker</span>}
          >
            <div className="mb-4">
              <MapFilterBar filters={[{ key: "all", label: "All" }, ...mapLayers]} activeFilter={activeFilter} onChange={setActiveFilter} />
            </div>

            <motion.div
              className="overflow-hidden rounded-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.985 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <MapContainer center={mapCenter} zoom={9} scrollWheelZoom className="h-[min(70svh,640px)] min-h-[360px] w-full sm:min-h-[460px]">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Circle center={cycloneZone.center} radius={cycloneZone.radius} pathOptions={{ color: "#ff6b75", fillColor: "#ff6b75", fillOpacity: 0.14, weight: 2 }} />

                <Polyline positions={dummyGpsTrack} pathOptions={{ color: "#18a999", weight: 4, dashArray: "8 10" }} />

                {visibleEntities.map((entity) => (
                  <Marker
                    key={entity.id}
                    position={entity.position}
                    icon={buildMapIcon(entity.type, entity.type === "gateway" ? "bg-cyan-300" : entityTone(entity.type))}
                  >
                    <Popup>
                      <div className="min-w-[180px]">
                        <p className="type-mono text-[11px] uppercase text-primary">{entity.type}</p>
                        <h3 className="type-title mt-1 text-base text-foreground">{entity.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{entity.detail}</p>
                        <p className="mt-3 text-xs text-muted-foreground">GPS {entity.position[0].toFixed(4)}, {entity.position[1].toFixed(4)}</p>
                      </div>
                    </Popup>
                    <Tooltip direction="top" offset={[0, -8]} opacity={1} permanent={false}>
                      {entity.name}
                    </Tooltip>
                  </Marker>
                ))}

                <CircleMarker center={cycloneZone.center} radius={18} pathOptions={{ color: "#ff6b75", fillOpacity: 0.35 }}>
                  <Popup>
                    <p className="type-title text-base">{cycloneZone.name}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{cycloneZone.detail}</p>
                  </Popup>
                </CircleMarker>

                {animatedEntity ? (
                  <Marker
                    position={animatedEntity.position}
                    icon={divIcon({
                      className: "bg-transparent border-0",
                      html: '<div class="animated-marker-wrap"><span class="animated-marker-ripple"></span><span class="animated-marker-dot"></span></div>',
                      iconSize: [28, 28],
                      iconAnchor: [14, 14],
                      popupAnchor: [0, -12],
                    })}
                  >
                    <Popup>
                      <p className="type-title text-base">{animatedEntity.name}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{animatedEntity.detail}</p>
                    </Popup>
                  </Marker>
                ) : null}
              </MapContainer>
            </motion.div>
          </PanelCard>

          <div className="space-y-5">
            <PanelCard title="Legend" eyebrow="Map keys">
              <MapLegend items={mapLegend} />
            </PanelCard>

            <PanelCard title="Dummy GPS" eyebrow="Tracked points">
              <div className="space-y-4">
                {liveEntities.slice(0, 4).map((entity) => (
                  <div key={entity.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-foreground">{entity.name}</span>
                      <span className="text-xs text-muted-foreground">{entity.id}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <AnimatedMarkerBadge tone={entity.type === "gateway" ? "cyan" : entity.type === "village" ? "emerald" : entity.type === "boat" ? "blue" : entity.type === "shelter" ? "amber" : "violet"} />
                      <span>{entity.position[0].toFixed(4)}, {entity.position[1].toFixed(4)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </PanelCard>

            <PanelCard title="Map Summary" eyebrow="Fleet overview">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {mapStats.map((item, index) => (
                  <MetricCard
                    key={item.label}
                    icon={[Activity, Anchor, Waves, Gauge, Signal][index]}
                    label={item.label}
                    value={item.value}
                    unit={item.unit}
                    status={index === 3 ? "stable" : "online"}
                    detail="Derived from dummy coordinates"
                    progress={index === 0 ? 82 : 88 - index * 4}
                  />
                ))}
              </div>
            </PanelCard>
          </div>
        </div>

        <PanelCard title="WebSocket Readiness" eyebrow="Realtime architecture">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="type-title text-xl">Streaming-ready state</h3>
              <p className="type-body mt-3 text-sm text-muted-foreground">
                The map already expects live feed replacements for marker positions, status updates, and route traces. Swap the dummy GPS array with a socket or SSE source later.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-5">
              <h3 className="type-title text-xl">Live entities shown</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {mapLayers.map((layer) => (
                  <span key={layer.key} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-muted-foreground">
                    {layer.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PanelCard>
      </div>
    </div>
  );
}
