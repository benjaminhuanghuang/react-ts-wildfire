import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

interface LocationMarkerProps {
  lat?: number;
  lng?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
