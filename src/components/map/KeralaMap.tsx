import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { KERALA_BOUNDS, KERALA_MAX_BOUNDS } from '../../lib/keralaBounds';
import { severityColor, markerRadius, districtName } from '../../lib/district';
import type { District, Lang } from '../../types';

type KeralaMapProps = {
  districts: District[];
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  /** Id of the district to show a pulsing ring on (top district or selected). */
  pulseId: string | null;
  lang: Lang;
};

function FitKerala() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(KERALA_BOUNDS, { padding: [20, 20] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

function SelectionController({
  districts,
  selectedId,
}: {
  districts: District[];
  selectedId: string | null;
}) {
  const map = useMap();
  useEffect(() => {
    if (!selectedId) {
      map.flyToBounds(KERALA_BOUNDS, { padding: [20, 20], duration: 0.6 });
      return;
    }
    const d = districts.find((x) => x.id === selectedId);
    if (d) map.flyTo([d.lat, d.lng], 9, { duration: 0.6 });
  }, [selectedId, districts, map]);
  return null;
}

function ResizeHandler() {
  const map = useMap();
  useEffect(() => {
    const container = map.getContainer();
    const observer = new ResizeObserver(() => map.invalidateSize());
    observer.observe(container);
    return () => observer.disconnect();
  }, [map]);
  return null;
}

/** Build a Leaflet divIcon that renders the animated pulse ring. */
function makePulseIcon(color: string): L.DivIcon {
  return L.divIcon({
    className: '',
    html: `<span class="toofan-pulse-ring" style="--ring:${color};"></span>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
}

export function KeralaMap({
  districts,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
  pulseId,
  lang,
}: KeralaMapProps) {
  const pulseDistrict = pulseId ? districts.find((d) => d.id === pulseId) ?? null : null;

  return (
    <MapContainer
      center={[10.4, 76.2]}
      zoom={7}
      zoomControl={false}
      attributionControl
      scrollWheelZoom
      maxBounds={KERALA_MAX_BOUNDS}
      maxBoundsViscosity={1.0}
      minZoom={7}
      style={{ height: '100%', width: '100%', background: '#dceaf5' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <FitKerala />
      <SelectionController districts={districts} selectedId={selectedId} />
      <ResizeHandler />

      {/* Pulse ring on top/selected district */}
      {pulseDistrict && (
        <Marker
          key={`pulse-${pulseDistrict.id}`}
          position={[pulseDistrict.lat, pulseDistrict.lng]}
          icon={makePulseIcon(severityColor(pulseDistrict.severity))}
          interactive={false}
          zIndexOffset={-10}
        />
      )}

      {/* Selection halo */}
      {selectedId &&
        districts
          .filter((d) => d.id === selectedId)
          .map((d) => (
            <CircleMarker
              key={`halo-${d.id}`}
              center={[d.lat, d.lng]}
              radius={markerRadius(d.case_count) + 10}
              interactive={false}
              pathOptions={{
                stroke: false,
                fillColor: severityColor(d.severity),
                fillOpacity: 0.15,
              }}
            />
          ))}

      {/* District markers */}
      {districts.map((d) => {
        const isSelected = d.id === selectedId;
        const isHovered = d.id === hoveredId;
        const active = isSelected || isHovered;
        return (
          <CircleMarker
            key={d.id}
            center={[d.lat, d.lng]}
            radius={markerRadius(d.case_count) + (active ? 2 : 0)}
            pathOptions={{
              color: isSelected ? '#12183A' : '#ffffff',
              weight: isSelected ? 2.5 : 1.5,
              fillColor: severityColor(d.severity),
              fillOpacity: active ? 0.95 : 0.82,
            }}
            eventHandlers={{
              click: () => onSelect(d.id),
              mouseover: () => onHover(d.id),
              mouseout: () => onHover(null),
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -4]}
              opacity={1}
              className="leaflet-tooltip-toofan"
            >
              <span className="font-semibold">{districtName(d, lang)}</span>
              {' · '}
              {d.case_count.toLocaleString()}
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
