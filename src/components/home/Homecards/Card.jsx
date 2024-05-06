
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({data,col}) {
 return (
   <Link className="card" to={"/trending/" + data.title}>
     <div
       className="card-cont"
       style={{ backgroundImage: `url(${data && data.poster})` }}
     >
       <button className="card-btn">{data.offers} offers</button>
     </div>
     <span style={{ color: col }}>{data.title} </span>
   </Link>
 );
}
// 