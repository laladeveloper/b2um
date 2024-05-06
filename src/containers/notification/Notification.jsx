import React from "react";
import Header from "../../components/common/Header";
import data from "../../datasets/notifications.json";
import "./notification.css";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Lists({ data }) {
  return (
    <div className="notification-body">
      <h3>
        {data.header}
        <span style={{ fontSize: "15px" }} id="link">
          Load more
        </span>
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          gap: "0.7em",
        }}
      >
        {data.data.map((element, index) => (
          <div key={index} className="notification-list-cont">
            <FaRegTrashCan size={26} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignContent: "center",
                gap: "0.4em",
              }}
            >
              <span style={{ fontFamily: "nunitobold" }}>{element.title}</span>
              <span>{element.id}</span>
            </div>
            <span>${element.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Notification() {
  return (
    <div>
      <Header active={"notification"} />
      {/* <div style={{marginTop: '6em'}}>
        {data.map(element => <Lists key={element.header} data={element} />)}
      </div> */}
      <div style={{ marginTop: "6em" }}>
        <div className="notification-body">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              gap: "0.7em",
            }}
          >
            <div className="notification-list-cont">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignContent: "center",
                  gap: "0.4em",
                }}
              >
                <span style={{ fontFamily: "nunitobold" }}>
                  There is nothing in notifications
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="center">
          <Link to="/" > Move to home </Link>{" "}
        </h1>
      </div>
    </div>
  );
}
