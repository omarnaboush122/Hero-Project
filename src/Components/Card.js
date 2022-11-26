const Card = (props) => {
  let badgeText;
  if(props.openSpots ===0) {
    badgeText = "SOLD OUT";
  } else if(props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
    { badgeText && <div className="card-badge">{badgeText}</div> }
      <img src={props.coverImg} className="card-image" alt="img" />
      <div className="card-stats">
        <img src="./images/Star 1.png" alt="star" className="card-star" />
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
