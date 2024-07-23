import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from "sonner";

const Order = () => {
  const location = useLocation();
  const { productName, productId, quantity, price } = location.state || {}; // Destructure state

  const [orderDetails, setOrderDetails] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Order placed successfully!");
  };

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
            <div className="flex justify-between mb-2 flex-wrap">
              <span className="font-medium">Crypto Address:</span>
              <span
                className="cryptoaddress cursor-pointer text-blue-500 hover:underline overflow-auto"
                onClick={handleCopyAddress} // Add the onClick event
              >
                TTtmf4vHrRPkKgeDvQaZDUuvDTZxH5qzNZ
              </span>
              <span className="text-center text-gray-400">click to copy</span>
            </div>

            <div className="flex justify-between mb-2 mt-6">
              <span className="font-medium">
                Contact seller after paying with payment proof
              </span>
              <span>or Contact Us</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
