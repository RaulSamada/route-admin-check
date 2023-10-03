import React, { useState } from "react";

import { CircleMarker, MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Clients from "./Clients";
import data from "../assets/data.json";
import { Routing } from './Routing';
import { DriverMarker } from "./DriverMarker";
import DriverUbi from "./DriverUbi";

//{ lat: "23.123573", lng: "-82.406451" }

const MapView = () => {
 
  const places = data.drivers[0].places;
  
  const driver = data.drivers[0];
  
  const [state, setState] = useState({
    currentLocation: driver.coordinates,
    zoom: 13,
  });

  var drawing_route = state.currentLocation

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Clients places={places} />

      if (driver.route != null) {
        <>
        <DriverUbi driver={driver} />
        <Polyline positions={driver.route} color = 'blue' />
        </>
      }


      {/* {driver.route && driver.route.forEach(element => {
    drawing_route = drawing_route.concat(element)
  })}
  {drawing_route && <Polyline positions={drawing_route} color={'blue'} />} */}  
      {/* {driver.route != null && <Polyline positions={drawing_route} color={'blue'} />} */}
      {/*<Routing places={places} driver={driver}/>*/}
    </MapContainer>
  );
};

export default MapView;
