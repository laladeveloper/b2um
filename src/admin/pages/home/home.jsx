import React, { useEffect } from "react";
import "./home.css";
// import svg from "../../../assets/Creative thinking-bro.svg";

import svg1 from "../../../assets/Coins-rafiki.svg";
import svg2 from "../../../assets/save time-rafiki.svg";
import svg3 from "../../../assets/Feedback-rafiki.svg";
// import data from "../../../datasets/feedbacks.json"
import data from "../../../datasets/feedbacks.json";

import { FaAngleLeft, FaAngleRight, FaUsers } from "react-icons/fa";
import items from "../../../datasets/selleritems.json";
import Card from "../../../components/home/Homecards/Card";
import Header from "../../../components/home/Homecards/Header";
import { getUsers } from "../../../app/actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../app/actions/categoryAction";
import { Link } from "react-router-dom";

function Lists({ data }) {
  return (
    <div className="home-feedbacks-lists">
      <div className="home-feedbacks-lists-header">
        <div className="home-feedbacks-lists-header-username">{data.name}</div>
        <div className="home-feedbacks-lists-header-sub2">
          <div
            style={{
              color: "rgba(0,0,0,0.7)",
              fontSize: "14px",
              fontFamily: "nunitobold",
            }}
          >
            {data.date}
          </div>
          <button className="home-feedbacks-lists-header-btn">Remove</button>
        </div>
      </div>
      <div>{data.content}</div>
    </div>
  );
}

function Cards({ data }) {
  return (
    <div className="home-main-card2-body">
      <Header title={data.title} id={""} col={"rgba(0,0,0,0.8)"} />
      <div className="home-main-card1-container">
        {data.data.map((element, index) => (
          <Card key={index} data={element} col={"rgba(0,0,0,0.8)"} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.admin);
  const { allCategories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAllCategories())
  }, []);
  return (
    <div className="home ">
      <div className="banner-lead-home-fp">
        <h1 className="home-lead-title">Dashboard</h1>

        <div className="home-lead-card-fp">
          <Link to="/admin/users">
          <div className="home-lead-cardcont cursor-pointer">
            <FaUsers size={30} color="blue" />
            <div>Active Users:{allUsers ? <> {allUsers.length} </> : 0} </div>
          </div>
          </Link>
         {/* <Link to="/admin/all/categories">
         </Link> */}
          <div className="home-lead-cardcont cursor-pointer">
            <img src={svg2} />
            <div>Listed Categories: { allCategories ? allCategories.length : 0 }</div>
          </div>
          
          <div className="home-lead-cardcont">
            <img src={svg3} />
            <div>230 total feedbacks</div>
          </div>
         
        </div>
      </div>
    

      <div>
        <div className="home-feedbacks-header">
          <h3 className="home-feedbacks-header-title">Feedbacks</h3>
          <span className="home-feedbacks-header-sub2">
            <FaAngleLeft size={26} />
            1
            <FaAngleRight size={26} />
          </span>
        </div>

        <div>
          {data.map((element, index) => (
            <Lists key={index} data={element} />
          ))}
        </div>
      </div>
      {/*  */}

      <div style={{ marginTop: "3.5em" }}>
        <h3
          className="home-feedbacks-header-title"
          style={{ width: "92%", margin: "auto", marginBottom: "1em" }}
        >
          Your items
        </h3>
        <div>
          {items.map((elem, index) => (
            <Cards key={index} data={elem} />
          ))}
        </div>
      </div>
    </div>
  );
}
