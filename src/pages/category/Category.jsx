import React, { useEffect, useState } from "react";
import Footer from "../../components/common/Footer.jsx";
import SearchH from "../../components/category/Search.jsx";
import data from "../../datasets/categories.json";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../assets/baseURL.js";
import CHeader from "../../components/category/Header.jsx";
import Header from "../../components/common/Header.jsx"
import { FaChevronLeft } from "react-icons/fa";
function Cards({ data, category }) {
  return (
    <Link
      className="category-card-container"
      to={`/trending/${category}/${data.name}`}
    >
      {/* {console.log(data)} */}
      <img src={data?.category?.icon?.url} className="category-card-img" />
      <h3 className="category-card-header">{data.name}</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <button className="category-card-offers">{data.stock} offers</button>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            fontSize: "15px",
            fontWeight: 700,
            color: "rgba(10,10,10,0.5)",
            fontFamily: "nunitobold",
          }}
        >
          selling for ${data.price} USD
        </button>
      </div>
    </Link>
  );
}

export default function Category() {
  const { category } = useParams();
  const [allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // dispatch(getAllProducts());
    // setLoading(/);
    axios
      .get(`${baseUrl}/api/product/name/${category}`)
      .then((response) => {
        // console.log(response.data);
        setAllproducts(response.data.products);
        setLoading(!loading);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setAllproducts([]);
        setLoading(!loading);

      });
  }, [category]);

  return (
    <div>
      <Header/>
      {/* <CHeader title={category} /> */}
      {
        loading ? <><h1 className="flex justify-center items-center min-h-[80vh] text-5xl">{ console.log(loading)} Loading..</h1> </> :
        <div className="category-body mt-20 xsm:mt-20 sm:mt-24 md:mt-32 lg:mt-36 ">
        <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              cursor:"pointer"
            }}
            onClick={() => window.history.back()}
          >
            <FaChevronLeft />
            <span className="pl-2 text-lg">{category}</span>
          </div>
        <SearchH placeholder={"search " + category} />
        <div
          style={{
            fontWeight: 600,
            color: "rgba(10,10,10,0.7)",
            marginTop: "1em",
            marginLeft: "0.5em",
          }}
        >
          query for {allproducts.length} results {console.log(loading)}
        </div>
        {/* cards here */}
        <div className="category-card-body">
          {allproducts.map((element, index) => (
            <Cards key={index} data={element} category={category} />
          ))}
        </div>
        {/* cards here */}
        <div className="category-paginate">
          <button>Previous</button>
          <button
            style={{
              backgroundColor: "#2AFFE2",
              fontFamily: "nunitobold",
              color: "rgba(10,10,10,0.7)",
            }}
          >
            Next
          </button>
        </div>
      </div>
      }
     
      <Footer />
    </div>
  );
}
