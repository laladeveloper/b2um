import React from "react";
import Header from "../../components/common/Header";
import SearchH from "../../components/category/Search.jsx";
import "./messages.css";
import data from "../../datasets/messages.json";
import { Link } from "react-router-dom";

function Lists({ data }) {
  function showactive() {
    const i = data.isRead ? "mv1-l-content mv1-l-content-a" : "mv1-l-content";
    return i;
  }
  return (
    <Link className="messages-view1-list-cont" to={"/messages/" + data.user}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.8em",
          alignItems: "center",
        }}
      >
        <div>
          <img src={data.poster} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <span
            className={"mv1-l-content"}
            style={{
              fontWeight: 700,
              color: "rgba(0,0,0,0.8)",
              overflow: "hidden",
            }}
          >
            {data.user}
          </span>
          <span className={showactive()} style={{ overflow: "hidden" }}>
            {data.lastconversasion}
          </span>
        </div>
      </div>
      <span className="mv1-l-content">{data.time}</span>
    </Link>
  );
}

export default function Messages() {
  return (
    <div>
      <Header active={"chat"} />
      <div style={{ marginTop: "6em" }} className="messagess-view1-body">
        <h2
          style={{
            color: "rgba(0,0,0,0.8)",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontWeight: "800",
            marginBottom: "1rem",
          }}
        >
          Messages
        </h2>
        <SearchH placeholder={"search messages"} />
        {/* <h4
          style={{
            color: "rgba(0,0,0,0.8)",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontFamily: "nunitobold",
            margin: 15,
          }}
        >
          All messages
        </h4> */}
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "1rem",
            marginBottom: "1rem",
            fontSize:"1.5rem"
          }}
        >
          {/* {data.map((element, index) => (
            <Lists key={index} data={element} />
          ))} */}
          There are no new message
        </div>
      </div>
    </div>
  );
}
