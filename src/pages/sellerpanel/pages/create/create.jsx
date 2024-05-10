import React, { useEffect, useState } from "react";
import "./create.css";
import svg from "../../../../assets/Creative thinking-bro.svg";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../../app/actions/prdctAction";
import { toast } from "sonner";
import { clearProductMsgs } from "../../../../app/reducers/productRdcr";

const Create = () => {
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

  const options = [
    { value: "Game Top Up", label: "Game Top Up" },
    { value: "Gift Cards", label: "Gift Cards" },
    { value: "Video Games", label: "Video Games" },
    { value: "Accounts", label: "Accounts" },
    { value: "Items", label: "Items" },
    { value: "Coaching", label: "Coaching" },
    { value: "Software", label: "Software" },
    { value: "Coins", label: "Coins" },
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

  const dispatch = useDispatch();
  // setting values of relative
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, SetDescription] = useState("");
  const [price, SetPrice] = useState("");
  const [stock, SetStock] = useState("");
  const [listingError, setListingError] = useState("");
  const { user, token } = useSelector((state) => state.user);
  const { message, success, failure } = useSelector((state) => state.product);
  console.log(message);
  console.log(failure);
  const handlename = (e) => {
    setName(e.target.value);
  };
  const handleDesc = (e) => {
    SetDescription(e.target.value);
  };
  const handlecategory = (selectedOption) => {
    setCategory(selectedOption.value);
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

  const productInfo = { name, category, description, price, stock };
  const createlist = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!name || !description || !price || !category || !stock) {
      setListingError("Please fill in all required fields ");
      return;
    }
    try {
      dispatch(listProduct(productInfo, token));
    } catch (error) {
      // console.error("Listing creation failed:", error);
      toast.error("Listing creation failed ");
    }
  };

  useEffect(() => {
    if (success) {
      toast.success(message);
    } else if(failure === false) {
      toast.error(message);
    }
    // toast.error(message);
    setTimeout(() => {
      dispatch(clearProductMsgs());
    }, 2500);
  }, [message, failure, success]);

  return (
    <div className="create">
      <img src={svg} className="create-lead-svg" alt="Thinking SVG" />
      <h1 className="create-lead-title">Publish An Item</h1>
      <h1 className="create-lead-title">
        {user ? user.username.toUpperCase() : null}
      </h1>

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

          <div className="profile-lead-inp">
            <Select
              options={cardtype}
              styles={customStyles}
              placeholder="Card Type"
            />
          </div>

          <div className="image-upload-container">
            <input type="file" onChange={handleImageChange} accept="image/*" />
            {image && (
              <div className="image-preview">
                <p>Image Preview:</p>
                <img src={image} alt="Preview" />
              </div>
            )}
          </div>

          <div className="profile-lead-inp">
            <div className="profile-lead-inp-subcont sojc0">
              <div style={{ width: "100%" }}>
                <Select
                  options={countries}
                  styles={customStyles}
                  placeholder="Can Activate in?"
                />
              </div>
              <input type="number" placeholder="Delivery Time (Mins)" />
            </div>
          </div>

          <div>
            {listingError && (
              <p style={{ color: "red", textAlign: "center" }}>
                {listingError}
              </p>
            )}
            <button className="create-footer-btn" style={{ marginLeft: "1em" }}>
              <span style={{ textDecoration: "none" }} id="link">
                Upload Listing
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
