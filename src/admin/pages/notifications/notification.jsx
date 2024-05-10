
import React from 'react'
import './notification.css'
import data from '../../../datasets/notifications.json'
import svg  from '../../../assets/New notifications-pana.svg'
import { BsTrash } from "react-icons/bs";

function Lists({data}) {
  return (
    <div className="notification-body">
      <h3>
        {data.header}
        <span style={{ fontSize: "15px" }} id="link">
          Loadmore
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
            <BsTrash size={26} />
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
    <div className='notification'>
      <div className='notification-lead-poster'>
        <img src={svg} />
      </div>
      <h1 className='notification-lead-title'>Notifications</h1>
      <div style={{marginBottom:'1em'}}>You have 6 new notifications</div>

      <div className='notificationpanel-messages-body'>
        {data.map((element,index) => <Lists  key={index} data={element} />)}
      </div>
    </div>
  )
}
