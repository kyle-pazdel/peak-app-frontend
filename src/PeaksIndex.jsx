export function PeaksIndex(props) {
  return (
    <div id="peaks-index" className="row">
      <h1>All Peaks</h1>
      {props.peaks.map((peak) => (
        <div className="peaks card m-1" key={peak.id} style={{ width: "18rem" }}>
          <div className="card-body bg-custom-1">
            <img src={peak.images[0].url} className="card-img-top" alt={peak.description} />
            <h2 className="card-title bg-custom-1">{peak.name}</h2>
            <button className="btn btn-primary" onClick={() => props.onSelectPeak(peak)}>
              More Info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
