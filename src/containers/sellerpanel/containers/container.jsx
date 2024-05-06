import React from 'react'
import Messages from '../subcontainers/messages/messages.jsx'
import './container.css'
import Notification from '../subcontainers/notifications/notification.jsx'
import Home from '../subcontainers/home/home.jsx'
import Profile from '../subcontainers/profile/profile.jsx'
import Create from '../subcontainers/create/create.jsx'

export default function Container({active = 'home'}) {
  return (
    <div className='seller-panel-container'>
      {active === 'home' ? <Home /> :
       active === 'messages' ? <Messages /> :
       active === 'create' ? <Create /> :
       active === 'notification' ? <Notification /> :
       active === 'profile' ? <Profile /> :
       null
      }
    </div>
  )
}
