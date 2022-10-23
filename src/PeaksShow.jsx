export function PeaksShow(props) {
  return (
    <div id="peaks-show">
      <div id="carouselExampleControls" className="carousel slide mt-5 mb-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          {props.peak.images.map((image) => (
            <div className="carousel-item active">
              <img src={image.url} className="d-block w-100" alt={props.peak.description} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h2>{props.peak.name}</h2>
      <p>{props.peak.description}</p>
      <p>{props.peak.location}</p>
      <p>{props.peak.elevation} ft</p>
    </div>
  );
}
