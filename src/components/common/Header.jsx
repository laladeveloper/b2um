import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import Logo from "./Logo.jsx";
import { LuHome } from "react-icons/lu"; 
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";

function Footer({ active }) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // const chectState = useSelector((state) => state);

  const tabstyle = {
    display: "flex",
    border: "none",
    borderRadius:"10%",
    backgroundColor: "transparent",
    outline: "none",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(10,10,10,0.8)",
    textDecoration: "none",
    fontSize: "14.5px",
    fontFamily: "nunito",
    padding:"0.62rem",
    // margin:"0.62rem"
  };
  const activeText = "#fff";
  const activeBg = "rgba(102, 103, 104, 0.47)";
  return (
    <div className="header-container header-footer ">
      {isAuthenticated ? (
        <>
          <Link
            to="/"
            style={{
              ...tabstyle,
              color: active === "home" ? activeText : "rgba(10,10,10,0.8)",
             fontWeight:"bold"
            }}
          >
            <LuHome size={26} />
            <span  >Home</span>
          </Link>
          <Link
            to="/messages"
            style={{
              ...tabstyle,
              color: active === "chat" ? activeText : "rgba(10,10,10,0.8)",
              
            }}
          >
            <BiMessageRoundedDetail size={26} />
            <span>Chat</span>
          </Link>
          <Link
            to="/notification"
            style={{
              ...tabstyle,
              color:
                active === "notification"
                  ? activeText
                  : "rgba(10,10,10,0.8)",
             
            }}
          >
            <FaRegBell size={26} />
            <span>Notification</span>
          </Link>
          <Link
            to="/profile"
            style={{
              ...tabstyle,
              color: active === "profile" ? activeText : "rgba(10,10,10,0.8)",
             
            }}
          >
            <button
              style={{
                backgroundColor: "dodgerblue",
                border: "none",
                outline: "none",
                width: "25px",
                color: "white",
                height: "25px",
                borderRadius: "50%",
              }}
            >
              
              {user.username.charAt(0).toUpperCase()}
            </button>
            <span>Profile</span>
          </Link>
        </>
      ) : (
        <>
          <button className="header-footer-btn bg-cyan-100 border-cyan-500 border-2">
            <Link to="/seller" style={{ textDecoration: "none" }} id="link">
              Sell
            </Link>
          </button>
          <button className="header-footer-btn htbtn-fill  bg-cyan-100 border-cyan-500 border-2">
            <Link to="/login" style={{ textDecoration: "none" }} id="link">
              Login/Sign up
            </Link>
          </button>
        </>
      )}
    </div>
  );
}

export default function Header({ hidefooter, active }) {
  const dispatch = useDispatch();
  // const [ isAuthenticated, setIsAuthenticated] = useState(false)
 const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(loading);
  return (
    <>
      <div className="header-container">
        <Logo />
        {isAuthenticated ? (
          <div className="header-for-larges">
            <Link
              to="/"
              style={{
                fontSize: "15px",
                color: active === "home" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
                textDecoration: "none",
              }}
              id="link"
            >
              <button
                className="header-btn htbn-p"
                style={{ border: "none", fontWeight: 600 }}
              >
                <LuHome size={26} />
                <span>Home</span>
              </button>
            </Link>
            <Link
              to="/messages"
              style={{
                fontSize: "15px",
                color: active === "chat" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
                textDecoration: "none",
              }}
            >
              <button
                className="header-btn htbtn"
                style={{ border: "none", fontWeight: 600 }}
              >
                <BiMessageRoundedDetail size={26} />
                <span>Chat</span>
              </button>
            </Link>
            <Link
              to="/notification"
              style={{
                fontSize: "15px",
                color:
                  active === "notification" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
                textDecoration: "none",
              }}
            >
              <button
                className="header-btn htbtn"
                style={{
                  border: "none",
                  fontSize: "15px",
                  color:
                    active === "notification"
                      ? "#2AFFE2"
                      : "rgba(10,10,10,0.8)",
                  fontWeight: 600,
                }}
              >
                <FaRegBell size={26} />
                <span>Notification</span>
              </button>
            </Link>
            <Link
              to="/profile"
              className="header-btn htbtn"
              style={{
                fontSize: "15px",
                color: active === "profile" ? "#2AFFE2" : "rgba(10,10,10,0.8)",
                textDecoration: "none",
                border: "none",
                padding: "1px",
              }}
            >
              <button
                // className="header-btn htbtn"
                style={{
                  backgroundColor: "#2AFFE2",
                  border: "none",
                  outline: "none",
                  width: "45px",
                  color: "white",
                  height: "45px",
                  borderRadius: "50%",
                }}
              >
                {user.username.charAt(0).toUpperCase()}
              </button>
              {/* <span>Profile</span> */}
            </Link>
          </div>
        ) : (
          <div className="header-for-larges">
            <Link to="/seller" style={{ textDecoration: "none" }} id="link">
              <button className="header-btn htbn-p hover:bg-cyan-300  hover:text-white">
                Sell
              </button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }} id="link">
              <button className="header-btn htbtn-fill hover:bg-cyan-300 htbtn  hover:text-white ">
                Login/Sign up
              </button>
            </Link>
          </div>
        )}
      </div>
      {hidefooter ? null : <Footer active={active} />}
    </>
  );
}
