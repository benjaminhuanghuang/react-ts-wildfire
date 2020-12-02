import { LocationInfo } from "../models";

interface LocationInfoBoxProps {
  info: LocationInfo;
}

const LocationInfoBox: React.FC<LocationInfoBoxProps> = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
