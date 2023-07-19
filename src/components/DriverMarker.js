import L from "leaflet";
import { Marker, useMap } from "react-leaflet";
import { useEffect, useRef, useState } from "react";

const blueIcon = L.divIcon({
  className: "blue-dot-icon",
  iconSize: [10, 10],
  iconAnchor: [5, 5],
  popupAnchor: [0, -5],
});

export const DriverMarker = ({ driver, routeLine }) => {
  /*
  const map = useMap();
  const markerRef = useRef(null);
  const [driverPosition, setDriverPosition] = useState(driver.coordinates);
  const ALLOWED_DISTANCE = 0.0001;
  
  useEffect(() => {
    if (!routeLine) return;

    // Computes the point on the routeLine that is nearest to current driver position
    const nearestLatLng = L.GeometryUtil.closest(map, routeLine, driverPosition);

    // If the driver is close enough to the nearest point, move the driver to this point
    const driverLatLng = L.latLng(driverPosition);
    if (driverLatLng.distanceTo(nearestLatLng) < ALLOWED_DISTANCE) {
      setDriverPosition([nearestLatLng.lat, nearestLatLng.lng]);
    }
  }, [routeLine, driverPosition]);

  useEffect(() => {
    if (routeLine && routeLine.length > 0) {
      // Aquí asumimos que el conductor sigue la ruta en orden.
      // Podrías modificar esto para que el conductor siga la ruta de una manera diferente si lo prefieres.
      setDriverPosition(routeLine[0]);
    }
  }, [routeLine]);
  
  return <Marker position={driverPosition} icon={blueIcon} />;*/
  
 
  const [driverPosition, setDriverPosition] = useState([driver.coordinates[0],driver.coordinates[1]]);
  const [waypointIndex, setWayPointIndex] = useState(0);

  useEffect(() => {
    if (!routeLine || routeLine.length == 0) return;

    const timer = setInterval(() => {
      if (waypointIndex < routeLine.length) {
        setDriverPosition(routeLine[waypointIndex]);
        setWayPointIndex(waypointIndex + 1);
      }
    }, 2000); //cada 2 seg.

    return () => clearInterval(timer);
  }, [routeLine, waypointIndex]);

  return <Marker position={driverPosition} icon={blueIcon} />;

};
