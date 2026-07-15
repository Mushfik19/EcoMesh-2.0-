import { Cpu, Waves, Signal, Satellite, Wind, Anchor } from "lucide-react";

const entityIcons = {
  coast: Waves,
  boats: Anchor,
  sensors: Satellite,
  weather: Wind,
  mesh: Signal,
  gateway: Cpu,
  signal: Signal,
};

function SceneNode({ label, status, tone, top, left, pulseDelay = "0s" }) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ top, left }}
    >
      <span className={`scene-node scene-node-${tone}`} style={{ animationDelay: pulseDelay }} />
      <span className="mt-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
        {status}
      </span>
      <span className="mt-1 text-[11px] text-white/70">{label}</span>
    </div>
  );
}

export function TwinScenePlaceholder({ layers }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#061116] shadow-command">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(80,213,240,0.18),transparent_35%),linear-gradient(180deg,rgba(7,16,20,0.1),rgba(7,16,20,0.95))]" />
      <div className="absolute inset-0 twin-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />

      <div className="relative min-h-[620px] p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="type-mono text-xs uppercase text-primary">Future Three.js canvas</p>
            <h3 className="type-title mt-1 text-2xl text-white">3D Bangladesh Coast</h3>
          </div>
          <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
            Placeholder visualization
          </div>
        </div>

        <div className="relative mx-auto h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(5,20,28,0.2)_0%,rgba(10,43,57,0.4)_34%,rgba(7,16,20,0.92)_100%)]">
          <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(80,213,240,0.22),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(24,169,153,0.22))]" />
          <div className="absolute inset-0 coast-silhouette opacity-80" />

          <div className="absolute left-[10%] top-[68%] h-[1px] w-[70%] bg-cyan-300/30" />
          <div className="absolute left-[18%] top-[54%] h-[1px] w-[52%] bg-emerald-300/30" />
          <div className="absolute left-[24%] top-[42%] h-[1px] w-[44%] bg-violet-300/30" />
          <div className="absolute left-[30%] top-[30%] h-[1px] w-[36%] bg-amber-300/30" />

          <div className="absolute inset-0">
            <SceneNode label="Gateway" status="GW-01" tone="gateway" top="22%" left="55%" pulseDelay="0s" />
            <SceneNode label="Boat" status="B-17" tone="boats" top="56%" left="32%" pulseDelay="0.4s" />
            <SceneNode label="Sensor" status="LN-12" tone="sensors" top="38%" left="68%" pulseDelay="0.8s" />
            <SceneNode label="Sensor" status="LN-24" tone="sensors" top="62%" left="74%" pulseDelay="1.2s" />
            <SceneNode label="Mesh" status="Links" tone="mesh" top="46%" left="48%" pulseDelay="1.6s" />
            <SceneNode label="Signal" status="Trace" tone="signal" top="50%" left="61%" pulseDelay="2s" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur">
              <p className="text-xs text-white/60">Scene mode</p>
              <p className="type-title mt-1 text-lg text-white">Future WebGL ready</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur">
              <p className="text-xs text-white/60">Motion</p>
              <p className="type-title mt-1 text-lg text-white">Weather and boats placeholder</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur">
              <p className="text-xs text-white/60">Signals</p>
              <p className="type-title mt-1 text-lg text-white">Mesh + gateway lines</p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {layers.map((layer) => {
            const Icon = entityIcons[layer.key] ?? Cpu;
            return (
              <div key={layer.key} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <Icon size={18} className="text-primary" aria-hidden="true" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/60">
                    {layer.state}
                  </span>
                </div>
                <p className="mt-4 type-title text-lg text-white">{layer.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
