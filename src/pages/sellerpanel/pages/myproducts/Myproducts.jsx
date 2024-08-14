import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { getSellerProducts } from "../../../../app/actions/prdctAction";
import { clearProductMsgs } from "../../../../app/reducers/productRdcr";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../../assets/baseURL";
const Myproducts = () => {
  const { user, token, message } = useSelector((state) => state.user);
  const { sellerproducts, products, feedback } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    dispatch(getSellerProducts(token));
    setTimeout(() => {
      dispatch(clearProductMsgs());
    }, 3000);
  }, []);
  console.log(sellerproducts);
  const handleEdit = (uid) => {
    // toast.info(uid);
    // toast.info(`So far you can't edit/ delete your listings`)
    // Navigate("/seller/listing/update")
    navigate("/seller/listing/update", { state: { uid } });
  };
  const handleClick = async (uid) => {
    const { data } = await axios.delete(`${baseUrl}/api/product/id/${uid}`);
    toast.success(`${data.message}`);
  };
  const formatLocalDateString = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Use 24-hour format, set to true for 12-hour format
    };
    return date.toLocaleString(undefined, options);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-28">
      <h1 className="text-3xl font-bold mb-6 text-center">My Listings</h1>
      {sellerproducts.length > 1 ? (
        <>
          {sellerproducts.map((product) => (
            <div
              key={product.uid}
              className="bg-white shadow-md rounded-lg mb-6 p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Product # {product.uid}
                  </h2>
                  <p className="text-gray-600">
                    Publish Time: {formatLocalDateString(product.createdAt)}
                  </p>
                  <p className="text-gray-600">
                    Description: {product.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-bold">
                    Total $: {product.price * product.stock}
                  </p>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Item</th>
                    <th className="px-4 py-2">Price $</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-center">{product.name}</td>
                    <td className="px-4 py-2 text-center">{product.price}</td>
                    <td className="px-4 py-2 text-center">{product.stock}</td>
                    <td className="px-4 py-2 text-center">
                      {product.location}
                    </td>
                  </tr>
                  {/* {product.items.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 text-center">{item.name}</td>
                  <td className="px-4 py-2 text-center">{item.price}</td>
                  <td className="px-4 py-2 text-center">{item.quantity}</td>
                </tr>
              ))} */}
                </tbody>
              </table>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleEdit(product.uid)}
                  className="bg-teal-300 hover:bg-teal-400 text-slate-50 font-bold py-2 px-4 rounded mr-2"
                >
                  Edit{" "}
                </button>
                <button
                  onClick={() => handleClick(product.uid)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}{" "}
        </>
      ) : (
        <>
          <div className="w-full min-h-[50vh] max-h-screen flex justify-center items-center text-xl from-white to-teal-700">
            <h1 className="text-fuchsia-500 from-white to-gray-300">You Don't have any Listings</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Myproducts;
