
import React from "react"
import data from "../../datasets/chats.json"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import "./messages.css"
import { useParams } from "react-router-dom"
import { BsCheck2, BsCheck2All } from "react-icons/bs";

function Lists({data}) {
  let chatbody = {
    backgroundColor : data.whoami === "you" ? "#2AFFE2" : "white",
    color : data.whoami === "you" ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.8)"
  }
  return (
    <div
      className="messages-view2-chat-body"
      style={{
        justifyContent: data.whoami === "you" ? "flex-end" : "flex-start",
      }}
    >
      <div className="messages-view2-chat-main-chat-cont" style={chatbody}>
        <div>{data.body}</div>
        <div
          className="messages-view2-chat-main-chat-meta-cont"
          style={{
            justifyContent: data.whoami === "you" ? "flex-end" : "flex-start",
          }}
        >
          <span>
            {data.isseen ? <BsCheck2All size={20} /> : <BsCheck2 size={20} />}
          </span>
          <span>{data.time}</span>
        </div>
      </div>
    </div>
  );
}

export default function MessagesMain() {
  const {id} = useParams()
  return (
    <div>
      <div style={{marginTop:"6em"}} className="messagess-view1-body">
       <Header data={{id:id, ...data}} />
       <h2>{id}</h2>
       {data.chats.map((element,index) => <Lists key={index} data={element} />)}
       <Footer username={id}/>
      </div>
    </div>
  )
}
