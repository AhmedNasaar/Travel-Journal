export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.mainImg.src}
          alt={props.mainImg.alt}
        />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src={props.markerImg.src}
          alt={props.markerImg.alt}
        />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
