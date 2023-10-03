import React from "react";
import { Marker, Popup } from "react-leaflet";
import NotSelectedIcon from "./NotSelectedIcon";

const Clients = (props) => {
  const { places } = props;

  const markers = places.map((place) => (
    <Marker
      key={place.clientName}
      position={place.coordinates}
      icon={NotSelectedIcon}
    >
      <Popup>
        <div>
          <p>{place.clientName}</p>
          <p>Pedido:</p>
          <ul>
            {place.delivery.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Popup>
    </Marker>
  ));

  return markers;
};
export default Clients;
