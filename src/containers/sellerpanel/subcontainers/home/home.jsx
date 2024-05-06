
import React from "react"
import "./home.css"
import svg1 from "../../../../assets/Coins-rafiki.svg"
import svg2 from "../../../../assets/save time-rafiki.svg"
import svg3 from "../../../../assets/Feedback-rafiki.svg"
import data from "../../../../datasets/feedbacks.json" 
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import items from "../../../../datasets/selleritems.json"
import Card from "../../../../components/home/Homecards/Card"
import Header from "../../../../components/home/Homecards/Header"

function Lists({data}) {
  return (
    <div className="home-feedbacks-lists">
      <div className="home-feedbacks-lists-header">
         <div className="home-feedbacks-lists-header-username">{data.name}</div>
         <div className="home-feedbacks-lists-header-sub2">
           <div style={{color:"rgba(0,0,0,0.7)", fontSize:"14px", fontFamily:"nunitobold"}}>{data.date}</div>
           <button className="home-feedbacks-lists-header-btn">Remove</button>
         </div>
      </div>
      <div>{data.content}</div>
    </div>
  )
}

function Cards({data}) {
  return (
    <div className="home-main-card2-body">
      <Header title={data.title} id={""} col={"rgba(0,0,0,0.8)"} />
      <div className="home-main-card1-container">
       {data.data.map((element, index) => <Card key={index} data={element} col={"rgba(0,0,0,0.8)"}/>)}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="home ">
      <div className="banner-lead-home-fp">
        <h1 className="home-lead-title">Dashboard</h1>

        <div className="home-lead-card-fp">
          <div className="home-lead-cardcont">
            <img src={svg1} />
            <div>230 total sales</div>
          </div>
          {/*  */}

          <div className="home-lead-cardcont">
            <img src={svg2} />
            <div>last soled 4 days ago</div>
          </div>
          {/*  */}

          <div className="home-lead-cardcont">
            <img src={svg3} />
            <div>230 total feedbacks</div>
          </div>
          {/*  */}
        </div>
      </div>
      {/*  */}

      <div>
        <div className="home-feedbacks-header">
          <h3 className="home-feedbacks-header-title">Feedbacks</h3>
          <span className="home-feedbacks-header-sub2">
            <FaAngleLeft size={26}/>
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
