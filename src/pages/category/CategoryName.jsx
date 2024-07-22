import React, { useEffect, useState } from "react";
import Header from "../../components/category/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import SearchH from "../../components/category/Search.jsx";
import data from "../../datasets/categories.json";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../assets/baseURL.js";

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

export default function CategoryName() {
  const { category } = useParams();
  const [allproducts, setAllproducts] = useState([]);
  useEffect(() => {
    // dispatch(getAllProducts());
    axios
      .get(`${baseUrl}/api/product/categoryname/${category}`)
      .then((response) => {
        // console.log(response.data);
        // console.log(response);
        setAllproducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setAllproducts([]);
      });
  }, [category]);

  return (
    <div>
      <Header title={category} />
      <div style={{ marginTop: "6em" }} className="category-body">
        <SearchH placeholder={"search " + category} />
        <div
          style={{
            fontWeight: 600,
            color: "rgba(10,10,10,0.7)",
            marginTop: "1em",
            marginLeft: "0.5em",
          }}
        >
          query for {allproducts.length} results
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
      <Footer />
    </div>
  );
}
