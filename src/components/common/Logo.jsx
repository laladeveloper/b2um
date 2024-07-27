
import data from '../../assets/b2um.png'
import {Link} from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center m-1">
      <img src={data} className="logo" /> 
    </Link>
  );
} 