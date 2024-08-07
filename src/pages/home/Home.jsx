import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../assets/baseURL.js";
import Footer from "../../components/common/Footer.jsx";
import Header from "../../components/common/Header";
import Searchmain from "../../components/common/Search.jsx";
import About from "../../components/home/About.jsx";
import Hero from "../../components/home/Hero.jsx";
import Heroswiper from "../../components/home/Heroswiper.jsx";
import Cardsection from "../../components/home/Homecards/Cardsection.jsx";
import PaymentMethod from "../../components/home/PaymentMethod.jsx";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const [allCategories, setAllCategories] = useState([])
  // const { allCategories } = useSelector((state) => state.category);

  const [isLoading, setIsLoading] = useState(true);
  const [isinsearch, setisinserch] = useState(false);

  // console.log(allproducts);
  // console.log(allCategories);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/category/products`);
        // console.log(response.data);
        setAllCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}
      <Header active={"home"} />
      <div className="main">
        <Hero opensearch={() => (setisinserch(true), console.log("working"))} />
        <Heroswiper />
        {/* {allCategories} */}
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
