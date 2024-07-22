
import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import { BsWhatsapp } from "react-icons/bs"

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
          <li><Link id="link" to="support@b2um.com">support@b2um.com</Link></li>
          <li><Link id="link" to="/contact">Contact Us</Link></li>
          <li >
            <a className="flex items-center" target="_blank" href="//api.whatsapp.com/send?phone=447360508493&text=Hey B2UM team ,How are you">
             <BsWhatsapp/><span className="ml-2">  +447360508493</span> 
            </a>
         
        </li>
       </ol>
       <ol>
          <li className=" uppercase text-lg">Refrences</li>
          <li><Link id="link" to="/">Landing page</Link></li>
          <li><Link id="link" to="/privacy">Privacy Policy </Link></li>
          <li><Link id="link" to="/terms">Terms & Conditions</Link></li>
       </ol>
     </section>
  )
}
