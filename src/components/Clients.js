import React from "react";
import { Marker } from "react-leaflet";
import NotSelectedIcon from "./NotSelectedIcon";

const Clients = (props) => {
  const { places } = props;

  const markers = places.map((place) => (
    <Marker key={place.name} position={place.coordinates} icon={NotSelectedIcon} />
  ));

  return markers;
};
export default Clients;
