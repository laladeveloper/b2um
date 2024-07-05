import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer.jsx";
import Header from "../../components/common/Header.jsx";
import "./auth.css";
import Se from "./se.jsx";
import { registerUser } from "../../app/actions/userAction.js";
import { toast } from "sonner";
import { clearMsgs } from "../../app/reducers/userReducer.js";

function Flow1({ continuesignup }) {
  const successMsg = useSelector((state) => state.user.success);
  const failureMsg = useSelector((state) => state.user.failure);
  // const isLoading = useSelector((state) => state.user.loading);
  const [isLoading, SetIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationError, setRegistrationError] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggleConfirmPasswordVisibility = () => {
    setShowPassword(!showPassword);
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlefname = (e) => {
    setFname(e.target.value);
  };
  const handlelname = (e) => {
    setLname(e.target.value);
  };
  const handleusername = (e) => {
    setUsername(e.target.value);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handledob = (e) => {
    setDob(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };
  const handleocnfirmpassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  //  console.log(
  //    `this ${fname} ${lname} ${username}  ${email} ${password} ${confirmPassword} `
  //  );

  const userData = { fname, lname, username, email, password };

  const handleSubmit = async (e) => {
    SetIsLoading(true);
    e.preventDefault();
    try {
      if (!fname || !username || !email || !dob || !password) {
        toast.error("Please fill all the fields");
        setTimeout(() => {
          SetIsLoading(false);
        }, 800);
        return;
      }
      if (password !== confirmPassword) {
        toast.error("Confirm password should be same as password");
        setTimeout(() => {
          SetIsLoading(false);
        }, 800);
        return;
      }
      // Dispatch the registerRequest action with userData
      dispatch(registerUser(userData));
      setTimeout(() => {
        SetIsLoading(false);
      }, 800);
      // If registration is successful, set success message and redirect to home page
      // toast.success("Registration successful");
      // navigate("/"); // Redirect to home page
    } catch (error) {
      // If registration fails, set error message
      console.log(`register ${error}`);
      toast.error(error.message || "Registration failed. Please try again.");
      setTimeout(() => {
        SetIsLoading(false);
      }, 800);
    }
  };
  useEffect(() => {
    if (successMsg) {
      toast.success(successMsg);
      navigate("/");
    }
    if (failureMsg) {
      toast.error(failureMsg);
    }

    dispatch(clearMsgs());
    //
  }, [successMsg, failureMsg, dispatch, clearMsgs]);

  return (
    <div className="authcont">
      <h2>Create an account</h2>
      <form action="">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5em",
            width: "100%",
            marginBottom: "1.5em",
          }}
        >
          <input
            onChange={handlefname}
            value={fname}
            type="text"
            name="fname"
            className="auth-input"
            placeholder="First name"
          />
          <input
            onChange={handlelname}
            value={lname}
            type="text"
            name="lname"
            className="auth-input"
            placeholder="Last name"
          />
        </div>
        <input
          onChange={handleusername}
          value={username}
          type="text"
          name="username"
          className="auth-input"
          placeholder="Username"
        />
        {/* <p style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Username cannot be changed after it has been created.</span></p> */}
        <input
          onChange={handleemail}
          value={email}
          type="email"
          name="email"
          className="auth-input"
          placeholder="Email address"
        />
        <label htmlFor="date" className=" m-[8px]">Date of birth</label>
        <input
          onChange={handledob}
          value={dob}
          type="date"
          name="date"
          className="auth-input"
          id="date"
        />
        <input
          onChange={handlepassword}
          value={password}
          type={showPassword ? "text" : "password"}
          name="password"
          className="auth-input"
          placeholder="Password"
        />
        <input
          onChange={handleocnfirmpassword}
          value={confirmPassword}
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          className="auth-input"
          placeholder="Confirm password"
        />
        <span
          className="showpassword flex float-right cursor-pointer select-none"
          onClick={handleToggleConfirmPasswordVisibility}
        >
          {showConfirmPassword ? (
            <h4>Hide Password </h4>
          ) : (
            <h4>Show Password</h4>
          )}
        </span>
        {registrationError && (
          <p style={{ color: "red", textAlign: "center" }}>
            {registrationError}
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="auth-trigger hover:bg-cyan-300"
        >
          {isLoading ? "loading ... " : " Sign Up"}
        </button>
      </form>
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingBottom: "10px",
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
        <Link to={"/login"} className="already-h-a-n hover:text-white">
          Already have an account? Login
        </Link>
      </p>
    </div>
  );
}

function Flow2() {
  const [time, settime] = useState(60);
  const startcout = setInterval(() => {
    let i = time - 1;
    settime(i);
  }, 1000);
  if (settime === 0) {
    clearInterval(startcout);
  }
  //    console.log(time)

  return (
    <div className="authcont">
      <h2>Email One-time Password (OTP)</h2>
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 0,
          marginTop: "-3%",
        }}
      >
        <span
          style={{
            cursor: "pointer",
            fontWeight: 600,
            color: "rgba(10,10,10,0.7)",
          }}
        >
          Enter the OTP sent to you at
          {/* { email} */}
        </span>
      </p>
      <input type="text" className="auth-input" placeholder="Enter otp" />

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
        <span
          style={{
            cursor: "pointer",
            fontWeight: 600,
            color: "rgba(10,10,10,0.7)",
          }}
        >
          Requesting in {1}sec...
        </span>
      </p>

      <button className="auth-trigger">Verify account</button>
    </div>
  );
}

export default function Register() {
  // const [flow, setFlow] = useState(1);
  return (
    <div className="authbody">
      <Header hidefooter={true} />
      <Flow1 />
      <Footer />
    </div>
  );
}
