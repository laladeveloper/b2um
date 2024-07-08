import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../app/actions/prdctAction.js";
import { getAllCategories } from "../../app/actions/categoryAction.js";

export default function Home() {
  const dispatch = useDispatch();

  // const { allproducts } = useSelector((state) => state.product);
  const { allCategories } = useSelector((state) => state.category);

  const [isLoading, setIsLoading] = useState(true);
  const [isinsearch, setisinserch] = useState(false);

  // console.log(allproducts);
  console.log(allCategories);
  useEffect(() => {
    // dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}
      <Header active={"home"} />
      <div className="main">
        <Hero opensearch={() => (setisinserch(true), console.log("working"))} />
        <Heroswiper />
        <Cardsection data={allCategories} />
        <About />
        <PaymentMethod />
        <Footer />
      </div>
      {isinsearch ? <Searchmain close={() => setisinserch(false)} /> : null}
      {/* </Suspense> */}
    </div>
  );
}
