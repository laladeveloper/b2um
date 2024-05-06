
import React, {useState} from 'react'
import Header from '../../components/common/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import './auth.css'


function Flow1({continuesignup}) {
  return (
       <div className='authcont'>
       <h2>Forgotten Password</h2>
       <input type='email' className='auth-input' placeholder='Email address'/>
        <p style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>We would send a 6 digit otp to this email for verification.</span></p>
       <button onClick={continuesignup} className='auth-trigger'>Send Verification code</button>
     </div>
  )
}


function Flow2() {
  const [time, settime] = useState(60)
  const startcout = setInterval(() => {
   let i = time -1
   settime(i)
  } , 1000)
  if (settime === 0) {
    clearInterval(startcout)
  }
//    console.log(time)

  return (
       <div className='authcont'>
       <h2>Email One-time Password (OTP)</h2>
       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0, marginTop:'-3%'}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Enter the OTP sent to you at da*****@gmail.com</span></p> 
       <input type='text' className='auth-input' placeholder='Enter otp'/>
       <input type='password' className='auth-input' placeholder='New Password'/>
       <input type='password' className='auth-input' placeholder='Confirm New Password'/>

       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Requesting in {1}sec...</span></p>

       <button className='auth-trigger'>Reset my Password?</button>
     </div>
  )
}



export default function Fp() {
  const [flow, setFlow] =  useState(1)
  return (
    <div className='authbody'>
     <Header hidefooter={true} isloggedorauth={true} />
     {flow === 1  ? <Flow1 continuesignup={()=> setFlow(2)} /> : flow === 2  ? <Flow2 /> : null}
     <Footer />
    </div>
  )
}
