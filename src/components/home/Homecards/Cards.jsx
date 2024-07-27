import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../assets/baseURL";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "sonner";
import logo from "../../../assets/b2um.png";
import axios from "axios";

function Cards({ data, category, user }) {
  const navigate = useNavigate();
  const [stock, setStock] = useState(1);
  const [max, setMax] = useState("");
  const [showMax, setShowMax] = useState(false);
  const [order, setOrder] = useState({});
  
  console.log(data);

  const sellerAvatar = data.seller?.avatar.url;
  const notsellerAvatar = sellerAvatar === "undefined";
  const categoryID = data?.category._id;
  const product = data?._id;
  const seller = data?.seller?._id ;
  // console.log(user);
  const orderFee = 1.15;
  const orderPrice = (stock * data?.price * orderFee).toFixed(2);
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

  const buynow = async () => {

    if (orderPrice <= 0.7) {
      return toast.info(`Order Amount must be greater that $0.7`)
    }
    const orderDetails = { product, seller, user, quantity: stock };
    console.log(orderDetails);
    try {
      const response = await axios.post(
        `${baseUrl}/api/order/new`,
        orderDetails
      );
      // console.log(response.data);
      toast.success(response.data?.message);
      setOrder(response.data.order);
      navigate("/order", {
        state: {
          productId: data?.uid,
          orderId: response.data.order?.uid,
          productName: data?.name,
          quantity: stock,
          price: data?.price * orderFee || 0,
        },
      });
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="seller flex items-center  border-b md:border-b-0 md:border-r border-gray-300 p-4 w-full md:w-1/3">
          <img
            src={sellerAvatar === "undefined" ? logo : sellerAvatar}
            alt=""
            className={`w-16 ${
              notsellerAvatar ? "grayscale" : ""
            }  rounded-full`}
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
          <div className="price flex flex-col items-center justify-center  w-full ">
            <h1 className="pb-3 mx-2 text-lg font-bold">
              ${orderPrice}
              USD
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

export default Cards;
