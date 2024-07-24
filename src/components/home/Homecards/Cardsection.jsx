// import React, { useEffect, useState } from "react";
// import Header from "./Header.jsx";
// import "../../../assets/styles/home.css";
// import Card from "./Card.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../../app/actions/prdctAction.js";
// import axios from "axios";
// import { baseUrl } from "../../../assets/baseURL.js";

// function Card1({ data }) {
//   const [isLoading, setIsLoading] = useState(true);
//   const dispatch = useDispatch();
//   // const { allproducts } = useSelector((state) => state.product);
//   const [allproducts, setAllproducts] = useState([]);
//   const id = data?._id;

//   useEffect(() => {
//     // dispatch(getAllProducts());
//     axios
//       .get(`${baseUrl}/api/product/category/${id}`)
//       .then((response) => {
//         // console.log(response.data);
//         setAllproducts(response.data.products);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setAllproducts([]);
//         setIsLoading(false);
//       });
//   }, [dispatch, id]);
//   return (
//     <div className="home-main-card1-body min-h-max py-3">
//       <Header title={data?.name} id={""} col={"white"} />
//       <div className="home-main-card1-container">
//         {isLoading ? (
//           <>
//             <div className="flex items-center justify-center w-full h-48">
//               <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
//             </div>
//           </>
//         ) : allproducts.length !== 0 ? (
//           allproducts.map((element, index) => (
//             <Card key={index} data={element} col={"rgba(0,0,0,0.8)"} />
//           ))
//         ) : (
//           <>
//             <h3 className="text-slate-200">
//               {" "}
//               There are no listings in this category yet{" "}
//             </h3>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function Cardsection({ data }) {
//   // console.log(data);
//   return (
//     <>
//       {data.map((element, index) => {
//         return <Card1 key={index} data={element} />;
//         // if (index % 2 === 0) {
//         //   // Even index
//         // } else {
//         //   // Odd index
//         //   return <Card2 key={index} data={element} />;
//         // }
//       })}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import "../../../assets/styles/home.css"; // Make sure to include the Tailwind CSS imports in this file
import Card from "./Card.jsx";
import { useDispatch } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../../assets/baseURL.js";

function Card1({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [allproducts, setAllproducts] = useState([]);
  const id = data?._id;

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/product/category/${id}`)
      .then((response) => {
        setAllproducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setAllproducts([]);
        setIsLoading(false);
      });
  }, [dispatch, id]);

  return (
    <div className="bg-[rgba(100,100,140,1)] w-[93%] mx-auto rounded-[13px] mt-16 px-4 py-4 mb-4">
      <Header title={data?.name} id={""} col={"white"} />
      <div className="flex flex-wrap justify-around items-center gap-2 py-6">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-48">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : allproducts.length !== 0 ? (
          allproducts.map((element, index) => (
            <Card key={index} data={element} col={"rgba(0,0,0,0.8)"} />
          ))
        ) : (
          <h3 className="text-slate-200">
            There are no listings in this category yet
          </h3>
        )}
      </div>
    </div>
  );
}

export default function Cardsection({ data }) {
  return (
    <>
      {data.map((element, index) => (
        <Card1 key={index} data={element} />
      ))}
    </>
  );
}
