export function PeaksShow(props) {
  return (
    <div id="peaks-show">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          {props.peak.images.map((image) => (
            <div class="carousel-item active">
              <img src={image.url} class="d-block w-100" alt={props.peak.description} />
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h2>{props.peak.name}</h2>
      <p>{props.peak.description}</p>
      <p>{props.peak.location}</p>
      <p>{props.peak.elevation} ft</p>
    </div>
  );
}
