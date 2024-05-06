import React from 'react'
import './sellerpanel.css'
import Navigation from './containers/navigation.jsx'
import Container from './containers/container.jsx'
import Header from './containers/header.jsx'

export default function Sellerpanel({active}) {
  return (
    <div className='seller-panel'>
      <Header />
      <Navigation active={active} />
      <Container active={active} />
    </div>
  )
}
