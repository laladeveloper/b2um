import React, { useEffect, useState } from "react";
import Footer from "../../components/common/Footer.jsx";
import SearchH from "../../components/category/Search.jsx";
import data from "../../datasets/categories.json";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../assets/baseURL.js";
import CHeader from "../../components/category/Header.jsx";
import Header from "../../components/common/Header.jsx";
// import Logo from "../../components/common/Logo.jsx";
import logo from "../../assets/b2um copycc copy.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
function Cards({ data, category }) {
  const [stock, setStock] = useState(1);
  const [max, setMax] = useState("");
  const [showMax, setShowMax] = useState(false);
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (isNaN(value)) {
      setStock(0);
    } else if (value > data?.stock) {
      setStock(data?.stock);
      setMax("maximum stock reached");
      setShowMax(true);
    } else if (value < 0) {
      setStock(0);
    } else {
      setStock(value);
      setMax("");
      setShowMax(false);
    }
  };

  const minus = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setMax("");
      setShowMax(false);
    }
  };

  const plus = () => {
    if (data?.stock > stock) {
      setStock(stock + 1);
      setShowMax(false);
    } else {
      setMax("maximum stock reached");
      setShowMax(true);
    }
  };
  return (
    <div className="clong-card" to={`/trending/${category}/${data.name}`}>
      {/* {console.log(data)} */}
      {/* <img src={data?.category?.icon?.url} className="category-card-img" /> */}
      <div className=" w-full grid grid-cols-3 ">
        <div className="seller flex items-center justify-center border border-gray-300 p-4">
          <img src={data?.seller?.avatar?.url} alt="" />
          <h2>{data?.seller?.username} </h2>
        </div>
        <div className="product p-4 border border-gray-300 min-h-max">
          <p className="mb-1">Product #:B{data._id}</p>
          <h3 className="category-card-header">{data.name}</h3>
          <Link
            className="text-red-400"
            to={`/trending/${category}/${data.name}`}
          >
            More Info
          </Link>
          {/* <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
            <button className="category-card-offers">
              {data.stock} offers
            </button>
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
          </div> */}
        </div>
        <div className="buynow border-gray-300 border p-4 grid grid-cols-2 ">
          <div className="qty flex justify-center items-center flex-col">
            <p> {data?.deliverIn} mins</p>
            <p> max stock: {data?.stock} </p>
            <div className="category-b-qnty" style={{ width: "max-content" }}>
              <button onClick={minus}>
                <FaMinus />
              </button>
              <h4>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  className="focus:ring-0 focus:ring-offset-0 w-[65px]"
                  value={stock}
                  onChange={handleInputChange}
                />
              </h4>
              <button onClick={plus}>
                <FaPlus />
              </button>
            </div>
            <p> 1 = USD {data?.price}</p>
            <p
              className={`text-center text-red-500 ${
                showMax ? "animate-fadeInOut" : ""
              }`}
            >
              {max}
            </p>
          </div>
          <div className="price  flex flex-col items-center justify-center">
            <h1 className="pb-3 font-bold"> ${stock * data?.price} USD </h1>
            <Link
              className="px-6 py-2 bg-teal-400 rounded-lg"
              to={`/trending/${category}/${data.name}`}
            >
              {" "}
              Buy Now
            </Link>
            <p className="m-2">🪙 {Math.round((stock * data?.price) / 0.05)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CategoryName() {
  const { category } = useParams();
  const [allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(allproducts.length > 0 ? false : true);

  useEffect(() => {
    // dispatch(getAllProducts());
    // setLoading(!loading);

    axios
      .get(`${baseUrl}/api/product/categoryname/${category}`)
      .then((response) => {
        // console.log(response.data);
        // console.log(response);
        setAllproducts(response.data.products);
        setLoading(!loading);
        // console.log(loading);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setAllproducts([]);
      });
  }, [category]);

  return (
    <div>
      <Header />
      <CHeader title={category} />
      {loading ? (
        <>
          <h1 className="flex justify-center items-center min-h-[80vh] text-5xl">
            {console.log(loading)} Loading..
          </h1>{" "}
        </>
      ) : (
        <div style={{ marginTop: "9em" }} className="category-body">
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
      )}

      <Footer />
    </div>
  );
}
