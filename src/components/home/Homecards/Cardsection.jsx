// import React from "react";
// import Header from "./Header.jsx";
// import "../../../assets/styles/home.css";
// import Card from "./Card.jsx";

// function Card1({ data }) {
//   console.log(data);
//   return (
//     <div className="home-main-card1-body">
//       <Header title={data?.category?.name} id={""} col={"white"} />
//       <div className="home-main-card1-container">
//         {/* {console.log(data)} */}
//         {/* {data.length == 0 ? (
//           <Card data={data} />
//         ) : (
//           data.map((element, index) => <Card key={index} data={element} />)
//         )} */}
//         <Card data={data} />
//       </div>
//     </div>
//   );
// }

// function Card2({ data }) {
//   return (
//     <div className="home-main-card2-body">
//       <Header title={data.title} id={""} col={"rgba(0,0,0,0.8)"} />
//       <div className="home-main-card1-container">
//         {data.data.map((element, index) => (
//           <Card key={index} data={element} col={"rgba(0,0,0,0.8)"} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Cardsection({ data }) {
//   console.log(data);
//   return (
//     <>
//       {/* {console.log(data)} */}
//       {data.map((element, index) => {
//         // console.log(element);
//        return <Card1 key={index} data={element} />;

//         if (element.title === "Trending Game Top Up") {
//           return <Card1 key={index} data={element} />;
//         } else if (
//           element.title === "Trending Gift Cards" ||
//           element.title === "Trending Video Games"
//         ) {
//           return <Card2 key={index} data={element} />;
//         } else if (
//           element.title === "Trending Coaching" ||
//           element.title === "Trending Items" ||
//           element.title === "Trending Accounts"
//         ) {
//           return <Card1 key={index} data={element} />;
//         } else {
//           return <Card1 key={index} data={element} />;
//         }
//       })}
//     </>
//   );
// }

// //

import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import "../../../assets/styles/home.css";
import Card from "./Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../app/actions/prdctAction.js";
import axios from "axios";
import { baseUrl } from "../../../assets/baseURL.js";
function Card1({ data }) {
  // console.log(data);
  const dispatch = useDispatch();
  // const { allproducts } = useSelector((state) => state.product);
  const [allproducts, setAllproducts] = useState([]);
  const id = data?._id;

  useEffect(() => {
    // dispatch(getAllProducts());
    axios
      .get(`${baseUrl}/api/product/category/${id}`)
      .then((response) => {
        // console.log(response.data);
        setAllproducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setAllproducts([]);
      });
  }, [dispatch, id]);
  return (
    <div className="home-main-card1-body">
      <Header title={data?.name} id={""} col={"white"} />
      <div className="home-main-card1-container">
        {allproducts.length !== 0 ? (
          allproducts.map((element, index) => (
            <Card key={index} data={element} col={"rgba(0,0,0,0.8)"} />
          ))
        ) : (
          <>
            <h3 className="text-slate-200">
              {" "}
              There are no listings in this category yet{" "}
            </h3>
          </>
        )}
      </div>
    </div>
  );
}

// function Card2({ data }) {
//   return (
//     <div className="home-main-card2-body">
//       <Header title={data?.name} id={""} col={"rgba(0,0,0,0.8)"} />
//       <div className="home-main-card1-container">
//         <Card  data col={"rgba(0,0,0,0.8)"} />
//         {/* {data.data.map((element, index) => (
//           <Card key={index} data={element} col={"rgba(0,0,0,0.8)"} />
//         ))} */}
//       </div>
//     </div>
//   );
// }

export default function Cardsection({ data }) {
  // console.log(data);
  return (
    <>
      {data.map((element, index) => {
        return <Card1 key={index} data={element} />;
        // if (index % 2 === 0) {
        //   // Even index
        // } else {
        //   // Odd index
        //   return <Card2 key={index} data={element} />;
        // }
      })}
    </>
  );
}
