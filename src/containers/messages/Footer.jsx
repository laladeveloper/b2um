
import React from "react"
import { BsSend } from "react-icons/bs";
import "./messages.css"

export default function Footer({username}) {
  return (
    <div className="messagess-view2-footer-cont">
      <div className="messagess-view2-footer-cont-support px-2">
        <textarea
          placeholder={`Reply to ${username}....`}
          className="rounded-lg  border-2 p-1"
        ></textarea>
        <BsSend size={26} />
      </div>
    </div>
  );
}
