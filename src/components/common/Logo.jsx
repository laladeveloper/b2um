
import data from '../../assets/b2um copycc copy.png'
import {Link} from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center m-0">
      <img src={data} className="logo" /> <span className="text-4xl font-bold text-red-600" > B2UM </span>
    </Link>
  );
} 