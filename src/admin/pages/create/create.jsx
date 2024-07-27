import React, { Suspense, useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server"; // Add this import

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../app/actions/prdctAction";
import svg from "../../../assets/Creative thinking-bro.svg";
import "./create.css";

import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import { toast } from "sonner";
import { clearProductMsgs } from "../../../app/reducers/productRdcr";
import IconSelector from "./IconstSelector";
import axios from "axios";
import { baseUrl } from "../../../assets/baseURL";
const Create = () => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  

  const allIcons = {
    ...FaIcons,
    ...MdIcons,
    ...GiIcons,
    ...IoIcons,
  };

  const SelectedIcon = icon ? allIcons[icon] : null;
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
  const [name, setName] = useState("");
  const [description, SetDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const { user, token } = useSelector((state) => state.user);
  const { message, success, failure } = useSelector((state) => state.product);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
const handleIconSelect = (iconKey) => {
  setIcon(iconKey);
  const IconComponent = allIcons[iconKey];
  const svgString = renderToStaticMarkup(<IconComponent />);
  const svgDataUri = `data:image/svg+xml;base64,${btoa(svgString)}`;
  setImage(svgDataUri);
  const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
  const file = new File([svgBlob], `${iconKey}.svg`, { type: "image/svg+xml" });
  console.log(file);
  setImageFile(file);
};

  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("image", imageFile);
  const categorytInfo = { name, description };
  const publishCategory = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!name || !description) {
      toast.error("Please fill in all required fields ");
      return;
    } else {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      toast.info(`${name} Publishing...`);
      // console.log(name, description);
      try {
        const response = await axios
          .post(`${baseUrl}/api/category/new`, formData, config)
          .then((data) => {
            console.log(data?.data?.message);
            toast.success(`${name} Published Successfully`);
          })
          .catch((err) => {
            console.log(err);
            toast.error(`Error while ${name} Publishing`);
          });
      } catch (error) {
        console.error(error);
      }
    }

    // try {
    //   dispatch(listProduct(categorytInfo, token));
    // } catch (error) {
    //   // console.error("Listing creation failed:", error);
    //   toast.error("Listing creation failed ");
    // }
  };

  useEffect(() => {
    if (success) {
      toast.success(message);
    } else if (failure === false) {
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
      <h1 className="create-lead-title">Publish A New Category</h1>
      <h1 className="create-lead-title">
        {user ? user.username.toUpperCase() : null}
      </h1>

      <form onSubmit={publishCategory}>
        <div className="create-lead-body">
          <div className="profile-lead-inp">
            <div className="profile-lead-inp-subcont sojc0">
              <input
                type="text"
                name="name"
                placeholder="Category Name"
                style={{ width: "100%" }}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="profile-lead-inp">
            <div className="profile-lead-inp-subcont sojc0">
              <input
                type="text"
                name="description"
                placeholder="Category Description"
                style={{ width: "100%" }}
                onChange={(e) => SetDescription(e.target.value)}
                value={description}
              />
            </div>
          </div>

          <div className="image-upload-container ">
            {image ? (
              <>
                <label htmlFor="image">
                  <div className="image-preview">
                    {/* <p>Image Preview:</p> */}
                    <img src={image} alt="Preview" />
                  </div>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
              </>
            ) : (
              <>
                <label htmlFor="image">Please select a cover image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </>
            )}
          </div>

          <p className=" m-2">or</p>
          <div className="icons">
            <Suspense fallback="Loading icons">
              <div>
                <IconSelector onIconSelect={handleIconSelect} />
              </div>
            </Suspense>
          </div>
          <div>
            <button className="create-footer-btn" style={{ marginLeft: "1em" }}>
              <span style={{ textDecoration: "none" }} id="link">
                Publish Category
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
