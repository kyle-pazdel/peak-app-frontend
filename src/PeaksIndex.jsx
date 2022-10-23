export function PeaksIndex(props) {
  return (
    <div id="peaks-index">
      <h1>All Peaks</h1>
      {props.peaks.map((peak) => (
        <div className="peaks" key={peak.id}>
          {peak.images.map((image) => (
            <img src={image.url} alt={peak.description} />
          ))}
          <h2>{peak.name}</h2>
          <p>{peak.description}</p>
          <p>{peak.location}</p>
          <p>{peak.elevation}</p>
        </div>
      ))}
      <p>Peaks Go Here!</p>
    </div>
  );
}
