import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from "sonner";
import PaymentForm from "./PaymentForm";
import logo from "../../assets/payment logos/logos.png";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productName, productId, orderId, quantity, price } =
    location.state || {}; // Destructure state

  const [orderDetails, setOrderDetails] = useState({
    orderId,
    productID: productId || "B3482238n8424804802",
    productName: productName || "Example Product",
    quantity: quantity || 1,
    price: price || 29.99,
  });

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };
  // Add this function in your component
  const handleCopyAddress = () => {
    const cryptoAddress = "TTtmf4vHrRPkKgeDvQaZDUuvDTZxH5qzNZ";

    navigator.clipboard.writeText(cryptoAddress).then(
      () => {
        toast.success("Crypto address copied to clipboard!");
      },
      (err) => {
        toast.error("Failed to copy the address. Please try again.");
      }
    );
  };

  const paynow = ()=>{
    toast.info("Add payment details carefully")
    navigate("/pay")
  }

  return (
    <div className="">
      <Header />
      <div className="mt-32 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Order Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order ID:</span>
              <span>{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Product #:</span>
              <span>{orderDetails.productID}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Title:</span>
              <span>{orderDetails.productName}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Quantity:</span>
              <span>{orderDetails.quantity}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Price:</span>
              <span>${orderDetails.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>
                ${(orderDetails.price * orderDetails.quantity).toFixed(2)}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md ">
            <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
            <img src={logo} alt="" />
            <PaymentForm
              orderDetails={orderDetails}
              customerInfo={customerInfo}
            />
            {/* <h1 onClick={paynow} className="w-full bg-teal-300 py-3 text-center rounded-lg hover:text-gray-50 cursor-pointer">
              Pay Now
            </h1> */}
            {/* Add the PaymentForm component */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
