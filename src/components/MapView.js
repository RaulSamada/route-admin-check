import React, { useState } from "react";

import { CircleMarker, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Clients from "./Clients";
import data from "../assets/data.json";
import { Routing } from './Routing';

//{ lat: "23.123573", lng: "-82.406451" }

const MapView = () => {
 
  const places = data.drivers[0].places;
  const driver = data.drivers[0].coordinates;
 
  const [state, setState] = useState({
    currentLocation: driver,
    zoom: 13,
  });
  const [routeLine, setRouteLine] = useState(null);

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Clients places={places} />
      <Routing places={places} />
      <CircleMarker center={driver} pathOptions={'blue'} radius={20} />
    </MapContainer>
  );
};

export default MapView;
