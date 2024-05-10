import React from 'react'
import './messages.css'
import data from '../../../../datasets/messages.json'
import { Link } from 'react-router-dom'
import svg  from '../../../../assets/Messaging-pana (1).svg'

function Lists({data}) {
  function showactive() {
    const i = data.isRead ? 'mv1-l-content mv1-l-content-a' : 'mv1-l-content'
    return i
  }
  return (
   <Link className='sellerpanel-messages-cont' to={'/messages/'+  data.user}>
   <div style={{display:'flex', flexDirection:'row',gap:'0.8em', alignItems:'center'}}>
    <div><img src={data.poster} /></div>
    <div style={{display:'flex', flexDirection:'column',gap:'0px', alignItems:'flex-start', justifyContent:'center'}}>
      <span className={'mv1-l-content'} style={{fontWeight:700,color:'rgba(0,0,0,0.8)',overflow:'hidden'}}>{data.user}</span>
      <span className={showactive()} style={{overflow:'hidden', textAlign:'left'}}>{data.lastconversasion.length > 70 ? data.lastconversasion.slice(0,70)+'...' : data.lastconversasion}</span>
    </div>
    </div>
    <span className='mv1-l-content'>{data.time}</span>
   </Link>
  )
}

export default function Messages() {
  return (
    <div className='messages'>
      <div className='message-lead-poster'>
        <img src={svg} />
      </div>
      <h1 className='lead-title'>Messages</h1>
      <div style={{marginBottom:'1em'}}>You have 2 new messages</div>

      <div className='sellerpanel-messages-body'>
        {data.map((element,index) => <Lists  key={index} data={element} />)}
      </div>
    </div>
  )
}
