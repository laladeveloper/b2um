
import React, { useState } from 'react'
import './profile.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Profile() {
  //const { user , isAuthenticated} = useSelector((state)=> state.auth )
  //const [fName, setFName] = useState(user.name.fname);
  //console.log(user.name.fname);
  return (
    <div className='sellerpanel-profile'>
      <div style={{paddingTop:'2em'}}>
        <div className="profile-leadcirlce">
          {" "}
          {('Theguy').charAt(0).toUpperCase()}{" "}
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
          {'Theguy'}
        </p>
      </div>

      <div className="profile-content-body">
        <div className="profile-meta-body">
          <div className="profile-meta-cont">
            <span>Available Balance</span>
            <span style={{ fontWeight: 700 }}>0.00 USD</span>
          </div>
          <div className="profile-meta-cont">
            <span>Points Earned</span>
            <span style={{ fontWeight: 700 }}>202 POINTS</span>
          </div>
        </div>
        {/*  */}

        <div>
          <div className='profile-lead-inp'>
            <div className='profile-lead-inp-title'>Update Name</div>
            <div className='profile-lead-inp-subcont sojc0'>
              <input type='text' placeholder='UserFname' />
              <input type='text' placeholder='UserLname' />
              {/* <button>Change</button> */}
            </div>
          </div>
          {/*  */}

          <div className='profile-lead-inp'>
            <div className='profile-lead-inp-title'>Update Username</div>
            <div className='profile-lead-inp-subcont'>
              <input type='text' placeholder='Theguy' />
              <button>Change</button>
            </div>
          </div>
          {/*  */}

          <div className='profile-lead-inp'>
            <div className='profile-lead-inp-title'>Change Password</div>
            <div className='profile-lead-inp-subcont sojc0'>
              <input type='text' placeholder='New password' />
              <input type='text' placeholder='Confirm password' />
              {/* <button>Change</button> */}
            </div>
          </div>
          {/*  */}
        </div>

        <div>
          <button className="logout-btn" style={{backgroundColor:'white' , marginLeft:'1em'}}>
            <span style={{ textDecoration: "none"}} id="link">
              Save Profile
            </span>
          </button>
          <button className="logout-btn">
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
