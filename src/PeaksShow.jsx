export function PeaksShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePeak(params);
    event.target.reset();
  };

  return (
    <div>
      <div id="peaks-show">
        {/* <div id="carouselExampleControls" className="carousel slide mt-5 mb-3" data-bs-ride="carousel">
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
        </div> */}
        <h2>{props.peak.name}</h2>
        <p>{props.peak.description}</p>
        <p>{props.peak.location}</p>
        <p>{props.peak.elevation} ft</p>
      </div>
      <div>
        <h1>New Peak</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label for="name" className="form-label">
              Name
            </label>
            <input type="text" id="title" name="name" defaultValue={props.peak.name} className="form-control"></input>
          </div>
          <div className="col-md-6">
            <label for="image" className="form-label">
              Peak Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue="~ add an image here ~"
              className="form-control"
            ></input>
          </div>
          <div className="col-md-6">
            <label for="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={props.peak.location}
              className="form-control"
            ></input>
          </div>
          <div className="col-md-6">
            <label for="elevation" className="form-label">
              Elevation(ft)
            </label>
            <input
              type="number"
              id="elevation"
              name="elevation"
              defaultValue={props.peak.elevation}
              className="form-control"
            ></input>
          </div>
          <div className="col-md-12">
            <label for="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={props.peak.description}
              className="form-control"
            ></textarea>
          </div>
          <div className="col-12">
            <input
              type="submit"
              id="submit"
              name="submit"
              defaultValue={props.submit}
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
