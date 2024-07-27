import React, { useEffect, useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { redirect } from "react-router-dom";
import { baseUrl } from "../../assets/baseURL";
import axios from "axios";
import { useSelector } from "react-redux";

const PaymentForm = ({ orderDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  const {user} = useSelector((state)=>state.user)
  console.log(user?.username);
  // console.log(orderDetails);
  const orderId = orderDetails.orderId;
  // console.log(orderId);
  const amount = (orderDetails.price * orderDetails.quantity).toFixed(2);
  console.log(amount);
  useEffect(() => {
    const fetchClientSecret = async () => {
      console.log(JSON.stringify({ orderId, amount }));
      try {
        const response = await fetch(`${baseUrl}/api/payment/new`, {
          method: "POST",
         
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed, e.g., authorization
          },
          body: JSON.stringify({ orderId, amount }),
        });
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setClientSecret(data.paymentIntent.client_secret);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching client secret:", error);
        setPaymentError("Failed to initialize payment. Please try again.");
        setLoading(false);
      }
    };

    fetchClientSecret();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setPaymentError(null); // Reset any previous errors

    if (!stripe || !elements || !clientSecret) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: `${user?.username}`, // Replace with actual customer data
          },
        },
      }
    );

    if (error) {
      setPaymentError(error.message);
      toast.error(error.message || "Something went wrong");
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment successful!", paymentIntent);
      toast.success("Your payment is successful");
    }

    setIsProcessing(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      {loading ? (
        <>
          {" "}
          <div className="flex items-center justify-center w-full h-48">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-lg font-medium">Card Number</label>
              <CardNumberElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                  showIcon: true, // Show card brand icon
                }}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col space-y-1 mt-4">
              <label className="text-lg font-medium">Expiry Date & CVC</label>
              <div className="flex space-x-4">
                <CardExpiryElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                  className="p-2 border border-gray-300 rounded w-1/2"
                />
                <CardCvcElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                  className="p-2 border border-gray-300 rounded w-1/2"
                />
              </div>
            </div>
            {paymentError && (
              <div className="text-red-500 text-sm">{paymentError}</div>
            )}
            <button
              type="submit"
              disabled={!stripe || isProcessing}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
            >
              {isProcessing ? "Processing…" : "Pay"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PaymentForm;
