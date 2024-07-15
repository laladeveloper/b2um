import React, { useEffect, useState } from "react";
import Header from "../../components/category/Header";
import Footer from "../../components/common/Footer";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import { baseUrl } from "../../assets/baseURL";

export default function CategoryB() {
  const { id } = useParams();
  const { category } = useParams();
  const [stock, setStock] = useState(0);
  const [max, setMax] = useState("");
  const [showMax, setShowMax] = useState(false);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    // dispatch(getAllProducts());
    axios
      .get(`${baseUrl}/api/product/name/${id}`)
      .then((response) => {
        // console.log(response.data);
        setProduct(response.data.products);
        setStock(response.data.products[0].stock);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProduct([]);
      });
  }, [category]);
  const minus = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setMax("");
      setShowMax(false);
    }
  };

  const plus = () => {
    if (product[0].stock > stock) {
      setStock(stock + 1);
      setShowMax(false);
    } else {
      setMax("maximum stock reached");
      setShowMax(true);
    }
  };
  return (
    <div>
      <Header title={id} />
      <div style={{ marginTop: "6em" }} className="category-body">
        <div></div>

        <img src={product[0]?.category?.icon?.url} className="category-b-img" />
        <h3 style={{ textAlign: "center" }}>{id}</h3>
        <div className="category-b-qnty">
          <button onClick={minus}>
            <FaMinus />
          </button>
          {console.log(product)}
          <h4> {stock} </h4>
          <button onClick={plus}>
            <FaPlus />
          </button>
        </div>
        <p
          className={`text-center text-red-500 ${
            showMax ? "animate-fadeInOut" : ""
          }`}
        >
          {max}
        </p>
        <div className="category-b-p-cont">
          <button
            style={{
              backgroundColor: "#2AFFE2",
              fontFamily: 700,
              border: "1px solid rgba(10,10,10,0.4)",
            }}
          >
            Purchase now
          </button>
          <button>
            <Link
              id="link"
              style={{ textDecoration: "none" }}
              to={"/messages/" + "Offgamers12"}
            >
              Contact seller
            </Link>
          </button>
        </div>

        <div className="category-infoholder-body-forlargescreens">
          <div className="category-infoholder-body">
            <h3>Product Information</h3>
            <div className="category-infoholder-info-cont">
              <span className="cihic-t">Total Price</span>
              <span className="cihic-t cihic-t2">${product[0]?.price} usd</span>
            </div>
            <div className="category-infoholder-info-cont">
              <span className="cihic-t">Delivery time</span>
              <span className="cihic-t cihic-t2">
                {parseInt(product[0]?.deliverIn, 10)} -{" "}
                {parseInt(product[0]?.deliverIn, 10) + 3} mins
              </span>{" "}
            </div>
            <div className="category-infoholder-info-cont">
              <span className="cihic-t">Card type</span>
              <span className="cihic-t cihic-t2">E-code</span>
            </div>
            <div className="category-infoholder-info-cont">
              <span className="cihic-t">Can Activate in</span>
              <span className="cihic-t cihic-t2"> {product[0]?.location} </span>
            </div>
          </div>

          <div className="category-infoholder-body">
            <h3>Seller Information</h3>
            <div className="category-infoholder-info-cont">
              <span className="cihic-t">Seller</span>
              <span className="cihic-t cihic-t2"> {product[0]?.seller?.username} </span>
            </div>
            <div className="category-infoholder-info-cont">
              <span className="cihic-t">Seller Level</span>
              <span className="cihic-t cihic-t2">Level {product[0]?.seller?.points} </span>
            </div>
            <div className="category-infoholder-info-cont">
              <span className="cihic-t">Seller About</span>
              <span className="cihic-t cihic-t2">392 Solds</span>
            </div>
            <div className="category-infoholder-info-cont">
              <span className="cihic-t">Rating</span>
              <span className="cihic-t cihic-t2">99%</span>
            </div>
          </div>
        </div>

        {/* < */}
      </div>
      <Footer />
    </div>
  );
}
