import "./App.css";

import MapView from "./components/MapView";
import data from './assets/data.json'

function App() {

  const driver = data.drivers[0]

  return (
    <MapView />
  );
}

export default App;
