import React, { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { redirect } from "react-router-dom";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
      redirect: "if_required",
    });
    toast.success(`Your payment is successfully recieved`);
    setIsProcessing(false);
    if (error) {
      setPaymentError(error.message);
      toast.error(error.message || "Something Wrong");
      setIsProcessing(false);
    } else {
      console.log("Payment successful!", paymentIntent);
      alert("Payment successful!");
    }

    setIsProcessing(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      {/* <h2 className="text-2xl font-semibold mb-6 text-center">
        Payment Details
      </h2> */}
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
    </div>
  );
};

export default PaymentForm;
