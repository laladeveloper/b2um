
import React from "react"
import "./Heroswiper.css"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa6";
import { TbGiftCard } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { ImCommand } from "react-icons/im";
import { RiCoinsLine } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import { LuUsers, LuUser2 } from "react-icons/lu";
import { BsDisc } from "react-icons/bs";
export default function Heroswiper() {
  const size = 30;
  return (
    <div className="heroswippercontainer">
      <div>
        <button style={{ backgroundColor: "rgba(0,180,0,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/game-topup">
            <FaPlus size={size} />
          </Link>
        </button>
        <span>Game topup</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(120,10,200,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/gift-cards">
            <TbGiftCard size={size} />
          </Link>
        </button>
        <span>Gift cards</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(120,10,20,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/video-game">
            <IoVideocamOutline size={size} />
          </Link>
        </button>
        <span>Video games</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(22,120,20,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/software">
            <ImCommand size={size} />
          </Link>
        </button>
        <span>Software</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(250,10,30,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/game-coins">
            <RiCoinsLine size={size} />
          </Link>
        </button>
        <span>Game coins</span>
      </div>
      <div>
        <Link id="link" style={{ color: "white" }} to="/trending/items">
          <button style={{ backgroundColor: "rgba(200,130,200,0.8" }}>
            <GoPackage size={size} />
          </button>
        </Link>
        <span>Items</span>
      </div>
      <div>
        <button style={{ backgroundColor: "rgba(220,200,20,0.8" }}>
          <Link id="link" style={{ color: "white" }} to="/trending/accounts">
            <LuUser2 size={size} />
          </Link>
        </button>
        <span>Accounts</span>
      </div>
      <div onClick={() => (window.location.href = "/auth/register")}>
        <button style={{ backgroundColor: "rgba(120,120,120,0.8" }}>
          <Link id="link" style={{ color: "white" }}>
            <LuUsers size={size} />
          </Link>
        </button>
        <span>Game pal</span>
      </div>
      <div onClick={() => (window.location.href = "/auth/register")}>
        <button style={{ backgroundColor: "rgba(20,100,250,0.8" }}>
          <Link id="link" style={{ color: "white" }}>
            <BsDisc size={size} />
          </Link>
        </button>
        <span>Coaching</span>
      </div>
    </div>
  );
}

// 