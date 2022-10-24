export function PeaksNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Product Added");
    const params = new FormData(event.target);
    props.onCreatePeak(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>New Peak</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="text" id="title" name="name" className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label for="image" className="form-label">
            Peak Image
          </label>
          <input type="text" id="image" name="image" className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label for="location" className="form-label">
            Location
          </label>
          <input type="text" id="location" name="location" className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label for="elevation" className="form-label">
            Elevation(ft)
          </label>
          <input type="number" id="elevation" name="elevation" className="form-control"></input>
        </div>
        <div className="col-md-12">
          <label for="description" className="form-label">
            Description
          </label>
          <input type="text" id="description" name="description" className="form-control"></input>
        </div>
        <div className="col-12">
          <input type="submit" id="submit" name="submit" className="btn btn-primary"></input>
        </div>
      </form>
    </div>
  );
}
