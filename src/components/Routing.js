import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";

export const Routing = ({ places }) => {
  const map = useMap();

  useEffect(() => {
    if (places.length > 1) {
      let waypoints = places.map((place) =>
        L.latLng(place.coordinates[0], place.coordinates[1])
      );
      L.Routing.control({
        waypoints,
      }).addTo(map);
    }
  }, [map, places]);

  return null;
};
