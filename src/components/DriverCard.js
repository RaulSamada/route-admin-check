
export function DriverCard({ DriverName , onRoad }) {
  const available = onRoad ? "En Ruta" : "Disponible";
  const imageSrc = `https://unavatar.io/${DriverName}`;

  return (
    <article className="driver-card">
      <header className="driver-header">
        <img className="driver-img" src={imageSrc} />
        <strong>{DriverName}</strong>
        <span className={onRoad ? "working" : "available"}>{available}</span>
      </header>
    </article>
  );
}
