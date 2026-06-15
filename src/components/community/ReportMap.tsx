import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, Popup, useMap } from 'react-leaflet';
import { KERALA_BOUNDS, KERALA_MAX_BOUNDS } from '../../lib/keralaBounds';
import { REPORT_CATEGORY_META } from '../../lib/reports';
import { ReportMarkerPopup } from './ReportMarkerPopup';
import type { CommunityReport, Lang } from '../../types';

type ReportMapProps = {
  reports: CommunityReport[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  votedIds: Set<string>;
  onVote: (id: string) => void;
  onOpenDetails: (id: string) => void;
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

/** Radius scales with votes so high-vote reports stand out. */
function voteRadius(votes: number): number {
  if (votes >= 50) return 20;
  if (votes >= 30) return 16;
  if (votes >= 15) return 12;
  if (votes >= 5) return 9;
  return 7;
}

export function ReportMap({
  reports,
  selectedId,
  onSelect,
  votedIds,
  onVote,
  onOpenDetails,
  lang,
}: ReportMapProps) {
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
      <ResizeHandler />

      {reports.map((r) => {
        const meta = REPORT_CATEGORY_META[r.category];
        const isSelected = r.id === selectedId;
        const radius = voteRadius(r.votes) + (isSelected ? 4 : 0);
        return (
          <CircleMarker
            key={r.id}
            center={[r.lat, r.lng]}
            radius={radius}
            pathOptions={{
              color: isSelected ? '#12183A' : '#ffffff',
              weight: isSelected ? 2.5 : 1.5,
              fillColor: meta.color,
              fillOpacity: isSelected ? 1 : 0.78,
            }}
            eventHandlers={{ click: () => onSelect(r.id) }}
          >
            {/* Minimal hover tooltip — area name only */}
            <Tooltip
              direction="top"
              offset={[0, -4]}
              opacity={1}
              className="leaflet-tooltip-toofan"
            >
              {r.areaLabel[lang]}
            </Tooltip>

            {/* Click popup — rich card */}
            <Popup
              offset={[0, -radius]}
              closeButton={false}
              className="toofan-popup"
              autoPan
            >
              <ReportMarkerPopup
                report={r}
                hasVoted={votedIds.has(r.id)}
                onVote={onVote}
                onOpenDetails={onOpenDetails}
              />
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
