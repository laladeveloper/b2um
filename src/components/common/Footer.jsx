
import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
     <section className="app-afterHeader app-footer-container ">
       <ol>
          <li className=" uppercase text-lg">Authentication</li>
          <li><Link id="link" to="/login">Login</Link></li>
          <li><Link id="link" to="/register">Create an account</Link></li>
          {/* <li><Link id="link" to="/fp">Forgotten password</Link></li> */}
        </ol>
       <ol>
          <li className=" uppercase text-lg">Funtionalities</li>
          <li><Link id="link" to="/seller">Start selling</Link></li>
          <li><Link id="link" to="/category/Trending items">See Items</Link></li>
          <li><Link id="link" to="/">Search Items in B2UM</Link></li>
        </ol>
       <ol>
          <li className=" uppercase text-lg">Contact</li>
          <li><Link id="link" to="mailto:yourmail@gmail.com">support@b2um.com</Link></li>
          <li><Link id="link" to="https://facebook.com/b2um">Facebook</Link></li>
          {/* <li><Link id="link" to="#">+1234567890</Link></li> */}
       </ol>
       <ol>
          <li className=" uppercase text-lg">Refrences</li>
          <li><Link id="link" to="/">Landing page</Link></li>
          <li><Link id="link" to="/auth/register">Signin/Signup</Link></li>
          <li><Link id="link" to="/notification">Listings</Link></li>
       </ol>
     </section>
  )
}
