import React, { useEffect, useState } from "react";
import "./Heroswiper.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { TbGiftCard } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { ImCommand } from "react-icons/im";
import { RiCoinsLine } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import { LuUsers, LuUser2 } from "react-icons/lu";
import { BsDisc } from "react-icons/bs";
import { getAllCategories } from "../../app/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../assets/baseURL";
export default function Heroswiper() {
  const dispatch = useDispatch();
  // const { allCategories } = useSelector((state) => state.category);
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/category/products`);
        console.log(response.data);
        setAllCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const size = 30;
  return (
    <div className="heroswippercontainer">
      {/* <div className="sitem">
        <button
          className="itembox"
          style={{ backgroundColor: "rgba(0,180,0,0.8" }}
        >
          <Link id="link" style={{ color: "white" }} to="/trending/game-topup">
            <FaPlus size={size} />
          </Link>
        </button>
        <span>Game topup</span>
      </div> */}
{console.log(allCategories)}
      {allCategories?.map((item) => (
        <div
          className="sitem"
          key={item._id}
          // style={{ backgroundColor: "rgba(0,180,0,0.8)" }}
        >
          <Link
            className="itembox"
            style={{
              color: "white",
              backgroundColor: `rgb(${item._id.length * item.name.length}, ${
                item.name.length * item.description.length
              }, ${item.name.length * item._id.length})`,
            }}
            to={`/${item.name}`}
          >
            <img className="cicon" src={item.icon.url} alt="icon" />
          </Link>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

//
