import React, {  useState } from "react";
import Footer from "../../components/common/Footer.jsx";
import Header from "../../components/common/Header";
import Searchmain from "../../components/common/Search.jsx";
import About from "../../components/home/About.jsx";
import Hero from "../../components/home/Hero.jsx";
import Heroswiper from "../../components/home/Heroswiper.jsx";
import Cardsection from "../../components/home/Homecards/Cardsection.jsx";
import PaymentMethod from "../../components/home/PaymentMethod.jsx";
import data from "../../datasets/Homecarddata.json";
import "./home.css";
import Loader from "../../Loader.jsx";
import { Suspense } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isinsearch, setisinserch] = useState(false);
  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}
        <Header active={"home"} />
        <div className="main">
          <Hero
            opensearch={() => (setisinserch(true), console.log("working"))}
          />
          <Heroswiper />
          <Cardsection data={data} />
          <About />
          <PaymentMethod />
          <Footer />
        </div>
        {isinsearch ? <Searchmain close={() => setisinserch(false)} /> : null}
      {/* </Suspense> */}
    </div>
  );
}
