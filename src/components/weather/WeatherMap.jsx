import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const pointColor = {
  station: "#50d5f0",
  rain: "#18d6c2",
  wind: "#a69bff",
  marine: "#77b7ff",
  cyclone: "#ff6b75",
};

export function WeatherMap({ center, points }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <MapContainer center={center} zoom={8} scrollWheelZoom={false} className="h-[min(58svh,520px)] min-h-[340px] w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((point) => (
          <CircleMarker
            key={point.id}
            center={[point.lat, point.lon]}
            radius={point.type === "cyclone" ? 18 : 10}
            pathOptions={{
              color: pointColor[point.type],
              fillColor: pointColor[point.type],
              fillOpacity: point.type === "cyclone" ? 0.22 : 0.72,
              weight: 2,
            }}
          >
            <Popup>
              <p className="type-title text-base">{point.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{point.value}</p>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
