
import { Link } from "react-router-dom";

export default function Card({ data, col }) {
  return (
    <Link
      className="card block p-2 w-[49%] h-[170px] text-white no-underline md:w-[24%] md:h-[200px]"
      to={"/trending/" + data.name +"/" + data.name }
    >
      <div
        className="card-cont bg-[#e1e1e1] bg-no-repeat bg-contain w-full h-full md:h-[85%] rounded-[10px] p-2 cursor-pointer"
        style={{ backgroundImage: `url(${data && data?.category?.icon?.url})` }}
      >
        <button className="card-btn float-right border-none outline-none text-white bg-[rgba(0,0,0,0.5)] p-1 rounded-[5px]">
          {data.stock} offers
        </button>
      </div>
      <span className="block text-center text-lg font-semibold mt-2" style={{ color: col }}>
        {data.name}
      </span>
    </Link>
  );
}

