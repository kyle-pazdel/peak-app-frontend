export function PeaksShow(props) {
  return (
    <div id="peaks-show">
      {props.peak.images.map((image) => (
        <img src={image.url} alt={props.peak.description} />
      ))}
      <h2>{props.peak.name}</h2>
      <p>{props.peak.description}</p>
      <p>{props.peak.location}</p>
      <p>{props.peak.elevation} ft</p>
    </div>
  );
}
