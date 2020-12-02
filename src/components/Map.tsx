import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import LocationMarker from "./LocationMaker";

interface MapProps {
  center?: Coords;
  zoom?: number;
}
const Map: React.FC<MapProps> = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDghcKDXcAVRek4PbjpHP8rHjBod75A-ec" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center?.lat} lng={center?.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};
export default Map;
