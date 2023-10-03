import L from 'leaflet'

const DriverMarker = L.icon({
   // iconUrl: require('../assets/red.svg'),
    iconRetinaUrl: require('../assets/icon copy.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor:null,
    iconSize: [35,35],
    className: 'leaflet-venue-icon'
})

export default DriverMarker