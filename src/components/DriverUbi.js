import React from "react";
import { Marker, Popup } from "react-leaflet";
import DriverMarker from "./DriverMarker";

const DriverUbi = ({driver}) => {
  return (
    <Marker
      position={driver.coordinates}
      icon={DriverMarker}
    >
      <Popup>
        <div >
          <p>{driver.name}</p>
          <p>Coordenadas: {driver.coordinates.join(', ')}</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default DriverUbi;
