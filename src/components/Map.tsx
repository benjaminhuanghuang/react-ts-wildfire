import React, { useState } from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import LocationMarker from "./LocationMaker";
import LocationInfoBox from "./LocationInfoBox";

import { Event, LocationInfo } from "../models";

interface MapProps {
  center?: Coords;
  zoom?: number;
  eventData: Event[];
}
const Map: React.FC<MapProps> = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState<LocationInfo>();

  const markers: (JSX.Element | null)[] = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      return <LocationMarker lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: event.id, title: event.title })}/>;
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDghcKDXcAVRek4PbjpHP8rHjBod75A-ec" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
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
