import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer.jsx";
import Header from "../../components/common/Header.jsx";
import "./auth.css";
import Se from "./se.jsx";
import { loginUser } from "../../app/actions/userAction.js";
import { toast } from "sonner";
import { clearMsgs } from "../../app/reducers/userReducer.js";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const successMsg = useSelector((state) => state.user.success);
  const failureMsg = useSelector((state) => state.user.failure);
  // const isLoading = useSelector((state) => state.user.isLoading);
 
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Add this line

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [showpassword, setShowPassword] = useState(false);
  const showpass = () => {
    setShowPassword(!showpassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!username || !password) {
        toast.error("Please fill all the fields");
        
        setIsLoading(false);
        return;
      }
     console.log(username, password);
      dispatch(loginUser(username, password));
     
    } catch (error) {
      // If registration fails, set error message
      console.log(`register ${error}`);
      toast.error(error.message || "Login failed. Please try again.");
       setIsLoading(false);
    }
  };
  useEffect(() => {
    if (failureMsg) {
      toast.error(failureMsg);
    }
    if (successMsg) {
      toast.success(successMsg);
    }
     setIsLoading(false);
    setTimeout(() => {
      dispatch(clearMsgs());
    }, 2500);

    if (isAuthenticated) {
      // Redirect to the intended route or home page
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }

  }, [navigate, isAuthenticated, successMsg, failureMsg,location.state]);

  return (
    <div className="authbody">
      <Header hidefooter={true} isloggedorauth={true} />
      <div className="authcont">
        <h2>Welcome Back😊!</h2>

        <form onSubmit={handleSubmit} method="post">
          <input
            type="text"
            className="auth-input"
            placeholder="Email or username"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type={showpassword ? "text" : "password"}
            className="auth-input"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              padding: 0,

            }}
            className="showpassword"
          >
            <Link to="/forgetpswrd" className="already-h-a-n ">
              Forgot password
            </Link>
            {password && (
              <h6 className=" cursor-pointer mt-2 mb-2" onClick={showpass}>
                show password
              </h6>
            )}
          </p>
         
          <button className="auth-trigger" onClick={handleSubmit}>
            {isLoading ? "Loading ..." : "Login"}
            
          </button>
        </form>
        {/* login form end */}
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            // padding: 15,
          }}
        >
          <span
            style={{
              cursor: "pointer",
              fontWeight: 600,
              color: "rgba(10,10,10,0.7)",
            }}
          >
            Or
          </span>
        </p>

        {/* <Se /> */}

        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 0,
          }}
        >
          <Link to="/register" className="already-h-a-n">
            New to B2UM? Sign up
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
