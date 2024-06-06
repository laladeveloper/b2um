
import React, { useState } from 'react'
import './profile.css'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../../app/actions/userAction';
import { toast } from 'sonner';

export default function Profile() {
    const { user, token, message } = useSelector((state) => state.user);
    const [fname, setFname] = useState(user.fname);
    const [lname, setLname] = useState(user.lname);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [rule, setRule] = useState(user.role);
    const [isVerifiedSeller, setIsVerifiedSeller] = useState(
      user.isVerifiedSeller
    );
    const [successMsg, setSuccessMsg] = useState("");
    const [editing, setEditing] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changebtn = () => {
      if (editing) {
        toast.info(`Click Below Button to Save changes`);
      } else {
        toast.info(`Click Below Button to Make changes`);
      }
    };
    const loggedout = () => {
      dispatch(logout());
      setSuccessMsg(`Logout Successful`);
      toast.success(successMsg);
      setTimeout(() => {
        dispatch(clearMsgs());
      }, 3000);

      setSuccessMsg("");
      navigate("/");
    };
    const updateData = { fname, lname, username, email };
    const editProfile = async () => {
      if (editing === true) {
        dispatch(updateUser(token, updateData));
        toast.success(`Your changes are saved Succefully`);

        setEditing(!editing);
        return;
      }
      setEditing(!editing);
      toast.info(`Update your Profile as you want`);
    };
  return (
    <div className="sellerpanel-profile">
      <div style={{ paddingTop: "2em" }}>
        <div className="profile-leadcirlce">
          {fname?.charAt(0).toUpperCase()}
        </div>
      </div>

      <div>
        <p
          style={{
            textAlign: "center",
            color: "rbga(0,0,0,0.8)",
            marginTop: "0.5em",
            fontFamily: "nunito",
          }}
        >
          {fname ? (
            <h1 style={{ textAlign: "center", color: "rbga(0,0,0,0.7)" }}>
              {fname + " " + lname}
            </h1>
          ) : (
            <h1 style={{ textAlign: "center", color: "rbga(0,0,0,0.7)" }}>
              {username}
            </h1>
          )}
        </p>
      </div>

      <div className="profile-content-body">
        <div className="profile-meta-body">
          <div className="profile-meta-cont">
            <span>Available Balance </span>
            <span style={{ fontWeight: 700 }}>{user.balance} USD</span>
          </div>
          <div className="profile-meta-cont">
            <span>Points Earned </span>
            <span style={{ fontWeight: 700 }}>{user.points} POINTS</span>
          </div>
        </div>

        <div>
          <div className="profile-lead-inp">
            <div className="profile-lead-inp-title">
              {editing ? "Update Name" : "First & Last Name"}
            </div>
            <div className="profile-lead-inp-subcont sojc0">
              {/* <label htmlFor="fname">First Name</label> */}
              <input
                type="text"
                placeholder={fname}
                name="fname"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                disabled={!editing}
              />
              <input
                type="text"
                placeholder={lname}
                name="lname"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                disabled={!editing}
              />
              <button onClick={changebtn}>
                {" "}
                {editing ? "Change" : "Edit"}{" "}
              </button>
            </div>
          </div>
          {/*  */}

          <div className="profile-lead-inp">
            <div className="profile-lead-inp-title">
              {" "}
              {editing ? "Update Username" : "Username"}
            </div>
            <div className="profile-lead-inp-subcont">
              <input
                type="text"
                name="username"
                id="username"
                placeholder={username}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={!editing}
              />
              <button onClick={changebtn}>
                {" "}
                {editing ? "Change" : "Edit"}
              </button>
            </div>
          </div>
          <div className="profile-lead-inp">
            <div className="profile-lead-inp-title">
              {" "}
              {editing ? "Update Email" : "Email"}{" "}
            </div>
            <div className="profile-lead-inp-subcont">
              <input
                type="text"
                name="email"
                id="email"
                placeholder={email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
              <button >
                
                Send OTP
              </button>
            </div>
          </div>
          {/*  */}

          <div className="profile-lead-inp">
            <div className="profile-lead-inp-title">Change Password</div>
            <div className="profile-lead-inp-subcont sojc0">
              <input type="text" placeholder="OTP" />
              <input type="text" placeholder="New password" />
              <input type="text" placeholder="Confirm password" />
            </div>
              {/* <button>Change</button> */}
          </div>
          {/*  */}
        </div>

        <div>
          <button
            onClick={editProfile}
            className="logout-btn"
            style={{ backgroundColor: "white", marginLeft: "1em" }}
          >
            <span style={{ textDecoration: "none" }} id="link">
              {editing ? "Save Profile" : "Edit Profile"}
            </span>
          </button>
          <button className="logout-btn" onClick={loggedout}>
            <Link to="/" style={{ textDecoration: "none" }} id="link">
              Logout
            </Link>
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
