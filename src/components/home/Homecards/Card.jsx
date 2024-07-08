import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ data, col }) {
  return (
    <Link className="card" to={"/trending/" + data.name}>
      {console.log(data)}
      <div
        className="card-cont"
        style={{ backgroundImage: `url(${data && data?.category?.icon?.url})` }}
      >
        {/* <button className="card-btn">{data.offers} offers</button> */}
      </div>
      <span style={{ color: col }}>{data.name} </span>
    </Link>
  );
}
//
