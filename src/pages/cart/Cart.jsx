import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/b2um.png";
import { baseUrl } from "../../assets/baseURL.js";
import SearchH from "../../components/category/Search.jsx";
import Footer from "../../components/common/Footer.jsx";
import Header from "../../components/common/Header.jsx";
import "./Category.css";

function Cards({ data, category }) {
  const navigate = useNavigate();
  const [stock, setStock] = useState(1);
  const [max, setMax] = useState("");
  const [showMax, setShowMax] = useState(false);
  console.log(data);
  const sellerAvatar = data.seller?.avatar.url;
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (isNaN(value)) {
      setStock(0);
    } else if (value > data?.stock) {
      setStock(data?.stock);
      setMax("Maximum stock reached");
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
      setMax("Maximum stock reached");
      setShowMax(true);
    }
  };

  const buynow = () => {
    navigate("/order", {
      state: {
        productId: data?._id,
        productName: data?.name,
        quantity: stock,
        price: data?.price || 0,
      },
    });
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="seller flex items-center  border-b md:border-b-0 md:border-r border-gray-300 p-4 w-full md:w-1/3">
          <img
            src={sellerAvatar === "undefined" ? logo : sellerAvatar}
            alt=""
            className="w-16 grayscale rounded-full"
          />
          <h2 className="ml-4 text-lg font-medium">{data?.seller?.username}</h2>
        </div>
        <div className="product p-4 border-b md:border-b-0 md:border-r border-gray-300 min-h-max w-full md:w-1/3">
          <h3 className="category-card-header text-xl font-semibold">
            {data.name}
          </h3>
          <Link
            className="text-red-400 mt-2 inline-block"
            to={`/trending/${category}/${data.name}`}
          >
            More Info
          </Link>
        </div>
        <div className="buynow flex flex-col md:flex-row border-gray-300 p-4 w-full md:w-1/3">
          {/* Use Flexbox instead of Grid */}
          <div className="qty flex flex-col justify-center items-center  w-full">
            <p className="mb-2 text-gray-600">
              Delivery in {data?.deliverIn} mins
            </p>
            <div className="m-2 flex items-center space-x-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
                onClick={minus}
              >
                <FaMinus />
              </button>
              <input
                type="number"
                name="stock"
                id="stock"
                className="focus:ring-0 focus:ring-offset-0 w-16 text-center border border-gray-300 rounded-md"
                value={stock}
                onChange={handleInputChange}
              />
              <button
                className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
                onClick={plus}
              >
                <FaPlus />
              </button>
            </div>
            <p
              className={`mt-2 text-center text-red-500 ${
                showMax ? "animate-fadeInOut" : ""
              }`}
            >
              {max}
            </p>
          </div>
          <div className="price flex flex-col items-center justify-center  w-full">
            <h1 className="pb-3 mx-2 text-lg font-bold">
              ${stock * data?.price} USD
            </h1>
            <button
              className=" flex flex-nowrap px-6 py-2 bg-teal-400 hover:bg-teal-500 text-white rounded-lg transition-colors duration-200"
              onClick={buynow}
            >
              Buy Now
            </button>
            <p className="m-2 text-gray-600">
              🪙 {Math.round((stock * data?.price) / 0.05)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Cart() {
  const { category } = useParams();
  const [allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(allproducts.length > 0 ? false : true);
  const [loadingText, setLoadingText] = useState("Loading.");

   useEffect(() => {
    // Function to fetch products and manage loading
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/product/categoryname/${category}`
        );
        setAllproducts(response.data.products);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setAllproducts([]);
        setLoading(false); // Also set loading to false on error
      }
    };

    fetchProducts();

    // Interval for loading text animation
    let loadingInterval;
    if (loading) {
      loadingInterval = setInterval(() => {
        setLoadingText((prev) => {
          if (prev === "Loading..") return "Loading...";
          if (prev === "Loading...") return "Loading.";
          return "Loading..";
        });
      }, 500);
    }

    return () => clearInterval(loadingInterval);
  }, [category, loading]); 

  return (
    <div>
      <Header />
      
      {loading ? (
        <>
          <h1 className="flex justify-center items-center min-h-[80vh] text-5xl">
            {loadingText}
          </h1>{" "}
        </>
      ) : (
        <div style={{ marginTop: "8.5em" }} className="category-body">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              cursor: "pointer",
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
             {allproducts.length  >1 ? <>{allproducts.length } results </> :<> {allproducts.length } result </> } 
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
