import React, { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import "./SellerRigister.css";

const SellerRigister = () => {
  // for year
  let minOffset = 0,
    maxOffset = 80;
  let thisYear = new Date().getFullYear();
  let allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }
  // for months
  var m0 = 1;
  var m12 = 12;
  var allmonths = [];
  for (let m = m0; m <= m12; m++) {
    allmonths.push(m);
  }
  //  for days
  var d0 = 1;
  var df = 31;
  var alldays = [];
  for (let m = d0; m <= df; m++) {
    alldays.push(m);
  }
  // year list
  const yearList = allYears.map((x) => {
    return <option key={x}>{x}</option>;
  });
  // month list
  const monthList = allmonths.map((m) => {
    return <option key={m}>{m}</option>;
  });
  // day list
  const dayList = alldays.map((m) => {
    return <option key={m}>{m}</option>;
  });
  const [selectedInstantMessenger, setSelectedInstantMessenger] = useState("");

  const handleInstantMessengerChange = (event) => {
    setSelectedInstantMessenger(event.target.value);
  };
   const [file, setFile] = useState(null);

   const onFileChange = (e) => {
     setFile(e.target.files[0]);
   };


  return (
    <>
      <Header />
      <div className=" sellerinfo container m-5 xsm:mt-20 md:mt-32 mt-28">
        <h1 className="uppercase text-lg font-semibold select-none">
          Register as a seller on B2UM
        </h1>
        <ul className=" mt-4 ">
          <li className=" m-1">
            Make sure the information you provide is valid for purchasing and
            payment withdrawals purposes.
          </li>
          <li className=" m-1">
            Follow-up of order issues is made through emails only. Please
            contact us for any inquiries.
          </li>
          <li className=" m-1">
            Only verified sellers are allowed to create offer. Registered but
            unverified sellers must complete the verification below to continue
            selling.
          </li>
        </ul>
        <br />
        <h1 className="uppercase text-lg font-semibold select-none">
          Personal Information
        </h1>
        <form action="">
          <h4>We need your Instant Messenger for B2UM Admin to contact you.</h4>
          <h6 className=" block m-6 text-center font-medium text-lg">
            Instant Messenger *
          </h6>
          <label for="instmsg">Choose your Instant Messenger:</label>
          <select
            name="instmsg"
            id="instmsg"
            className=" w-2/4 p-3 rounded-lg pr-2"
            onChange={handleInstantMessengerChange}
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
          </select>
          {selectedInstantMessenger === "whatsapp" && (
            <div className="whatsapp flex w-2/3 xsm:w-full items-center m-2 p-3 justify-center">
              <FaWhatsapp size={25} />
              <input
                placeholder="+123xxxxxxxxx"
                type="text"
                name=""
                id=""
                className="p-2 rounded-md ml-2 focus:outline-none focus:ring focus:border-cyan-200"
              />
            </div>
          )}

          {selectedInstantMessenger === "telegram" && (
            <div className="telegram flex w-2/3 xsm:w-full items-center m-2 p-3 justify-center">
              <FaTelegramPlane size={25} />
              <input
                placeholder="+123xxxxxxxxx"
                type="text"
                className="p-2 rounded-md ml-2 focus:outline-none focus:ring focus:border-cyan-200"
              />
            </div>
          )}
          <h6 className=" block m-6 text-center font-medium text-lg">
            Date of Birth *
          </h6>
          <h4>
            Please enter your date of birth that matches your identity document.
            You must be at least 18 years and above to sell at B2UM. Learn more
            or contact us for assistance.
          </h4>
          <div className="dob flex w-full justify-center">
            <div className="year flex flex-col">
              <label className=" uppercase ml-3">Year</label>
              <select className="p-2 px-7 mx-2  rounded-md ml-2 focus:outline-none focus:ring focus:border-cyan-200 ">
                {yearList}
              </select>
            </div>
            <div className="year flex flex-col">
              <label className=" uppercase ml-3">Month</label>
              <select className=" p-2 px-7 mx-2 rounded-md ml-2 focus:outline-none focus:ring focus:border-cyan-200 ">
                {monthList}
              </select>
            </div>
            <div className="year flex flex-col">
              <label className=" uppercase ml-3">Day</label>
              <select className=" p-2 px-7 mx-2 rounded-md ml-2 focus:outline-none focus:ring focus:border-cyan-200 ">
                {dayList}
              </select>
            </div>
          </div>
          <h6 className=" block m-6 text-center font-medium text-lg">
            Identity Number
          </h6>
          <div className="idcard flex flex-col w-full items-center  m-2 p-3 ">
            <h4>National identity number issued by government *</h4>
            <input
              type="text"
              name="cnic"
              id="cnic"
              className=" p-2 rounded-md mt-2 ml-2 focus:outline-none focus:ring focus:border-cyan-200 "
            />
            <h4 className=" mt-4">Passport Number </h4>
            <input
              type="text"
              name="cnic"
              id="cnic"
              className=" p-2 rounded-md mt-2 ml-2 focus:outline-none focus:ring focus:border-cyan-200 "
            />
          </div>
          <div className="idcard">
            <h6 className=" block m-6 text-center font-medium text-lg">
              Add Picture of your identity Card
            </h6>

            <div className="imagecontainer">
              <label htmlFor="input-file" className="image">
                Select a File
              </label>

              {file?.name && <p className="imagetitle ">{file?.name} is selected</p>}

              <input
                type="file"
                id="input-file"
                onChange={onFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SellerRigister;
