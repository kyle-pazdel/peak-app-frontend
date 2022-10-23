export function PeaksIndex(props) {
  return (
    <div id="peaks-index" className="row">
      <h1>All Peaks</h1>
      {props.peaks.map((peak) => (
        <div className="peaks bg-dark card m-1" key={peak.id} style={{ width: "18rem" }}>
          {/* {peak.images.map((image) => (
            <img src={image.url} alt={peak.description} />
          ))} */}
          <div className="card-body bg-custom-1">
            <img src={peak.images[0].url} className="card-img-top" alt={peak.description} />
            <h2 className="card-title bg-custom-1">{peak.name}</h2>
            <p className="card-text bg-custom-1">{peak.description}</p>
            <p>{peak.location}</p>
            <p>{peak.elevation}</p>
            <button className="btn btn-primary">MoreInfo</button>
          </div>
        </div>
      ))}
    </div>
  );
}
