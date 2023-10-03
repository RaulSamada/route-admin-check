import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";


var marker,circle;

export const Routing = ({ places, driver }) => {
  const map = useMap();

  useEffect(() => {
    if (places.length > 1) {
      let waypoints = places.map((place) =>
        L.latLng(place.coordinates[0], place.coordinates[1])
      );

      let startPoint = L.latLng(driver.coordinates);
    waypoints.unshift(startPoint);

      L.Routing.control({
        waypoints,
      }).addTo(map);
    }
  }, [map, places]);
/*
  setInterval(() => {
    L.Routing.control({
      waypoints: [
        L.latLng (getPosition(driver,map)),
        L.latLng (places.array.forEach(element => {
          element
        }))
      ]
    })
    getPosition(driver,map)
  },5000)
  */
  return null;
};

function getPosition(driver,map){
  if (driver.coordinates !== undefined) {

    if(marker){
      map.removeLayer(marker)
    }
    if(circle){
      map.removeLayer(circle)
    }

     marker = L.marker(driver.coordinates)
     circle = L.circle(driver.coordinates, {radius: 20})

    var featureGroup = L.featureGroup([marker,circle]).addTo(map)
    map.fitBounds(featureGroup.getBounds())
  }else console.log('esto no esta pinchando')
}