import React, { useEffect, useState } from "react";
import "./update.css";
import svg from "../../../../assets/Creative thinking-bro.svg";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../../app/actions/prdctAction";
import { toast } from "sonner";
import { clearProductMsgs } from "../../../../app/reducers/productRdcr";
import { getAllCategories } from "../../../../app/actions/categoryAction";
import { BiRefresh } from "react-icons/bi";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../../assets/baseURL";

const updateListing = () => {

  const navlocation = useLocation();
  const {uid} = navlocation.state;
useEffect(() => {
 toast.info(uid)
}, [])


  const cardtype = [
    { value: "Game Top Up", label: "Game Top Up" },
    { value: "Steam", label: "Steam Gift Card" },
    { value: "Razer", label: "Razer Gold" },
    { value: "Ebay", label: "eBay Gift Card" },
    { value: "Amazon", label: "Amazon Gift Card" },
    { value: "GooglePlay", label: "Google Play Gift Card" },
    { value: "iTunes", label: "iTunes Gift Card" },
    { value: "PlayStation", label: "PlayStation Store Gift Card" },
    { value: "Xbox", label: "Xbox Gift Card" },
    { value: "Netflix", label: "Netflix Gift Card" },
    { value: "Starbucks", label: "Starbucks Gift Card" },
    { value: "Target", label: "Target Gift Card" },
    { value: "Walmart", label: "Walmart Gift Card" },
    { value: "BestBuy", label: "Best Buy Gift Card" },
    { value: "Dunkin", label: "Dunkin' Gift Card" },
  ];

  const countries = [
    { value: "Worldwide", label: "Worldwide" },
    { value: "Usa", label: "Usa" },
    { value: "Uk", label: "Uk" },
    { value: "Canada", label: "Canada" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "none" : "1px solid #ccc",
      boxShadow: state.isFocused ? "0 0 5px rgba(0, 123, 255, 0.5)" : "none",
      "&:hover": {
        border: "2px solid #2AFFE2",
      },
      width: "100%",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#2AFFE2"
        : state.isHovered
        ? "#e0f7fa"
        : "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // setting values of relative
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, SetDescription] = useState("");
  const [price, SetPrice] = useState("");
  const [stock, SetStock] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const { user, token } = useSelector((state) => state.user);
  const { prdctMessage, prdctSuccess, prdctFailure } = useSelector(
    (state) => state.product
  );
  // console.log(token);
  // console.log(message);
  // console.log(failure);

  const { allCategories } = useSelector((state) => state.category);
  const options = allCategories.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const findCategoryById = (id) => {
    return allCategories.find((item) => item._id === id);
  };

  const selectedCategory = findCategoryById(category);

  const handlename = (e) => {
    setName(e.target.value);
  };
  const handleDesc = (e) => {
    SetDescription(e.target.value);
  };
  const handlecategory = (selectedOption) => {
    setCategory(selectedOption.value);
  };
  const handlelocation = (selectedOption) => {
    setLocation(selectedOption.value);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const productInfo = {
    name,
    category,
    description,
    price,
    stock,
    location,
    time,
  };
  const createlist = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !stock ||
      !location ||
      !time
    ) {
      toast.error("Please fill  all fields ");
      return;
    } 
    try {
    //  const {data}= axios.put(`${baseUrl}`)
    toast.info(`This feature will live soon`)
    } catch (error) {
      // console.error("Listing creation failed:", error);
      toast.error("Listing creation failed ");
    }
  };
  const refresh = () => {
    dispatch(getAllCategories());
  };
  useEffect(() => {
    dispatch(getAllCategories());
    if (prdctSuccess) {
      toast.success(prdctMessage);
      navigate("/seller/products");
    } else if (prdctFailure === false) {
      toast.error(prdctMessage);
    }
    // toast.error(message);
    setTimeout(() => {
      dispatch(clearProductMsgs());
    }, 2500);
  }, [prdctSuccess, prdctMessage, prdctFailure]);

  return (
    <div className="create">
      <img src={svg} className="create-lead-svg" alt="Thinking SVG" />
      <h1 className="create-lead-title">Publish An Item</h1>
      <h1 className="create-lead-title">
        {user ? user.username.toUpperCase() : null}
      </h1>
      {/* {console.log(allCategories.length == 0)} */}
      {allCategories.length == 0 && (
        <>
          <button
            onClick={refresh}
            className="refresh flex justify-center flex-col items-center w-full text-green-500 mt-2"
          >
            <BiRefresh /> <p>Refresh</p>{" "}
          </button>
        </>
      )}
      <form onSubmit={createlist} method="post">
        <div className="create-lead-body">
          <Select
            options={options}
            styles={customStyles}
            onChange={handlecategory}
            placeholder="Choose a category..."
            name="category"
          />

          <div className="profile-lead-inp">
            <div className="profile-lead-inp-subcont sojc0">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                style={{ width: "100%" }}
                onChange={handlename}
                value={name}
              />
            </div>
          </div>
          <div className="profile-lead-inp">
            <div className="profile-lead-inp-subcont sojc0">
              <input
                type="text"
                name="description"
                placeholder="Product Description"
                style={{ width: "100%" }}
                onChange={handleDesc}
                value={description}
              />
            </div>
          </div>

          <div className="profile-lead-inp">
            <div className="profile-lead-inp-subcont sojc0">
              <input
                type="number"
                name="Stock"
                placeholder="Quantity"
                value={stock}
                onChange={(e) => {
                  SetStock(e.target.value);
                }}
              />
              <input
                type="number"
                name="price"
                placeholder="Amount (USD)"
                value={price}
                onChange={(e) => {
                  SetPrice(e.target.value);
                }}
              />
            </div>
          </div>

          {/* <div className="profile-lead-inp">
            <Select
              options={cardtype}
              styles={customStyles}
              placeholder="Card Type"
            />
          </div> */}

          <div className="image-upload-container">
            {/* <input type="file" onChange={handleImageChange} accept="image/*" /> */}
            {selectedCategory && (
              <>
                {" "}
                <img src={selectedCategory.icon.url} alt="" />{" "}
                {selectedCategory.name}{" "}
              </>
            )}
          </div>

          <div className="profile-lead-inp">
            <div className="profile-lead-inp-subcont sojc0">
              <div style={{ width: "100%" }}>
                <Select
                  options={countries}
                  styles={customStyles}
                  onChange={handlelocation}
                  placeholder="Can Activate in?"
                  name="location"
                />
              </div>
              <input
                type="number"
                name="time"
                value={time}
                placeholder="Delivery Time (Mins)"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button className="create-footer-btn" style={{ marginLeft: "1em" }}>
              <span style={{ textDecoration: "none" }} id="link">
               Update
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default updateListing;
