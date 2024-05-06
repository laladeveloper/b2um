
import React from 'react'
import Header from './Header.jsx'
import '../../../assets/styles/home.css'
import Card from './Card.jsx'

function Card1({data}) {
  return (
    <div className='home-main-card1-body'>
      <Header title={data.title} id={''} col={'white'} />
      <div className='home-main-card1-container'>
       {data.data.map((element, index) => <Card key={index} data={element}/>)}
      </div>
    </div>
  )
} 

function Card2({data}) {
  return (
    <div className='home-main-card2-body'>
      <Header title={data.title} id={''} col={'rgba(0,0,0,0.8)'} />
      <div className='home-main-card1-container'>
       {data.data.map((element, index) => <Card key={index} data={element} col={'rgba(0,0,0,0.8)'}/>)}
      </div>
    </div>
  )
}

export default function Cardsection({data}) {
  return (
    <>
      {data.map((element, index) => {
        if (element.title === 'Trending Game Top Up') {
          return <Card1 key={index} data={element} />
        } 
        else if (element.title === 'Trending Gift Cards' || element.title === 'Trending Video Games') {
          return <Card2 key={index} data={element} />
        } 
        else if (element.title === 'Trending Coaching' || element.title === 'Trending Items' || element.title === 'Trending Accounts') {
          return <Card1 key={index} data={element} />
        } 
      })}
    </>
  )
}

// 