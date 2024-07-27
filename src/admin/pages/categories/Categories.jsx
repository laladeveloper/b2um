import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { baseUrl } from "../../../assets/baseURL";
import Loader from "../../../components/loader/Loader";

const ListedCategories = () => {
  const { user, token, message } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const getCategories = async () => {
    const { data } = await axios.get(`${baseUrl}/api/category/all`);
    setCategories(data.categories);
    console.log(data);
    console.log(data.categories);
    setIsLoading(false);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handleEdit = (uid) => {
    navigate("/admin/edit/category", { state: { uid } });
  };
  const handleClick = () => {
    toast.info(`So far you can't edit/ delete your listings`);
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
    <>
      {isLoading ? (
        <>
          <div className="h-screen">
            <Loader h="screen" />
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen bg-gray-100 p-8 pt-28">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Listed Categories
            </h1>
            {categories?.map((product) => (
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
                    <p className="text-gray-800 font-bold">Total $:</p>
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
                    onClick={handleClick}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ListedCategories;
