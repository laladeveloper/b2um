import React from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import PaymentForm from './PaymentForm'
const Checkout = () => {
  return (
    <>
    <Header/>
    <div className=" mt-20 xsm:mt-20 sm:mt-24 md:mt-32 lg:mt-36"> 
        
        <PaymentForm/>
    </div>
    <Footer/>
    </>
  )
}

export default Checkout