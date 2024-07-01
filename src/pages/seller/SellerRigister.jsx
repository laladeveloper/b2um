import React, { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import "./SellerRigister.css";
import { MdClose } from "react-icons/md";
import { toast } from "sonner";
import axios from "axios";
import { baseUrl } from "../../assets/baseURL";
import { useSelector } from "react-redux";

const SellerRigister = () => {
  // for year
  let minOffset = 0,
    maxOffset = 80;
  let thisYear = new Date().getFullYear() - 15;
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
  const [selectedInstantMessengers, setSelectedInstantMessengers] = useState(
    []
  );

  const handleInstantMessengerChange = (event) => {
    const selectedOption = event.target.value;
    const updatedMessengers = selectedInstantMessengers.includes(selectedOption)
      ? selectedInstantMessengers.filter((option) => option !== selectedOption)
      : [...selectedInstantMessengers, selectedOption];
    setSelectedInstantMessengers(updatedMessengers);
  };

  const [year, setYear] = useState(allYears[0]);
  const [month, setMonth] = useState(allmonths[0]);
  const [day, setDay] = useState(alldays[0]);
  const [whatsapp, setWhatsapp] = useState("");
  const [telegram, setTelegram] = useState("");
  const [cnic, setCnic] = useState("");
  const [passport, setPassport] = useState("");
  const [frontID, setFrontID] = useState(null);
  const [rearID, setRearID] = useState(null);
  const [frontIDPreview, setFrontIDPreview] = useState(null);
  const [rearIDPreview, setRearIDPreview] = useState(null);
  const { user, token } = useSelector((state) => state.user);
  const userID = user?._id;
  const dob = `${year}-${month}-${day}`;

  const onFrontId = (e) => {
    const file = e.target.files[0];
    setFrontID(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setFrontIDPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onRearId = (e) => {
    const file = e.target.files[0];
    setRearID(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setRearIDPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (cnic === "" || dob === "" || !frontID || !rearID) {
      return toast.error("Please enter all * fields");
    } else {
    
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.append("whatsapp", whatsapp);
      formData.append("telegram", telegram);
      formData.append("cnic", cnic);
      formData.append("passport", passport);
      formData.append("dob", dob);
      formData.append("frontID", frontID);
      formData.append("rearID", rearID);

      try {
        const response = await axios
          .put(`${baseUrl}/api/user/regSeller/${userID}`, formData, config)
          .then(toast.success("Request Submitted"))
          .catch(toast.error("Something went wrong"))
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="sellerinfo container m-5 xsm:mt-20 md:mt-32 mt-28 md:mr-18">
        <h1 className="uppercase text-lg font-semibold select-none">
          Register as a seller on B2UM
        </h1>
        <ul className="mt-4">
          <li className="m-1">
            Make sure the information you provide is valid for purchasing and
            payment withdrawals purposes.
          </li>
          <li className="m-1">
            Follow-up of order issues is made through emails only. Please
            contact us for any inquiries.
          </li>
          <li className="m-1">
            Only verified sellers are allowed to create offers. Registered but
            unverified sellers must complete the verification below to continue
            selling.
          </li>
        </ul>
        <br />
        <h1 className="uppercase text-lg font-semibold select-none">
          Personal Information
        </h1>
        {/* <form action={formSubmit} onSubmit={formSubmit}> */}
        <form>
          <h4>
            We need your Instant Messengers for B2UM Admin to contact you.
          </h4>
          <h6 className="block m-6 text-center font-medium text-lg">
            Instant Messengers *
          </h6>
          <label htmlFor="instmsg">Choose your Instant Messengers:</label>

          <select
            name="instmsg"
            id="instmsg"
            className=" w-2/4 p-3 rounded-lg pr-2"
            onChange={handleInstantMessengerChange}
            defaultValue="select"
          >
            <option value="select" disabled>
              Select
            </option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
          </select>
          {selectedInstantMessengers.includes("whatsapp") && (
            <div className="whatsapp flex w-2/3 xsm:w-full items-center m-2 p-3 justify-center">
              <FaWhatsapp size={25} />
              <input
                placeholder="+123*********"
                type="text"
                onChange={(e) => setWhatsapp(e.target.value)}
                id="whatsapp"
                className="p-2 rounded-md mx-2 focus:outline-none focus:ring focus:border-cyan-200"
              />
              {/* <MdClose size={25} /> */}
            </div>
          )}
          {selectedInstantMessengers.includes("telegram") && (
            <div className="telegram flex w-2/3 xsm:w-full items-center m-2 p-3 justify-center">
              <FaTelegramPlane size={25} />
              <input
                placeholder="+123*********"
                type="text"
                id="telegram"
                onChange={(e) => setTelegram(e.target.value)}
                className="p-2 rounded-md mx-2 focus:outline-none focus:ring focus:border-cyan-200"
              />
              {/* <MdClose size={25} /> */}
            </div>
          )}

          <h6 className="block m-6 text-center font-medium text-lg">
            Date of Birth *
          </h6>
          <h4>
            Please enter your date of birth that matches your identity document.
            You must be at least 18 years and above to sell at B2UM. Learn more
            or contact us for assistance.
          </h4>
          <div className="dob flex w-full justify-center">
            <div className="year flex flex-col">
              <label className="uppercase ml-3" htmlFor="yearList">
                Year
              </label>
              <select
                name="yearList"
                id="yearList"
                className="p-2 px-7 mx-2  rounded-md ml-2 focus:outline-none focus:ring focus:border-cyan-200 "
                onChange={(e) => setYear(e.target.value)}
              >
                {yearList}
              </select>
            </div>
            <div className="year flex flex-col">
              <label className="uppercase ml-3" htmlFor="monthList">
                Month
              </label>
              <select
                id="monthList"
                className="p-2 px-7 mx-2 rounded-md ml-2 focus:outline-none focus:ring focus:border-cyan-200 "
                onChange={(e) => setMonth(e.target.value)}
              >
                {monthList}
              </select>
            </div>
            <div className="year flex flex-col">
              <label className="uppercase ml-3 " htmlFor="dayList">
                Day
              </label>
              <select
                id="dayList"
                className="p-2 px-7 mx-2 rounded-md ml-2 focus:outline-none focus:ring focus:border-cyan-200 "
                onChange={(e) => setDay(e.target.value)}
              >
                {dayList}
              </select>
            </div>
          </div>
          <h6 className="block m-6 text-center font-medium text-lg">
            Identity Number
          </h6>
          <div className="idcard flex flex-col w-full items-center m-2 p-3 ">
            <h4>National identity number issued by government *</h4>
            <input
              type="text"
              name="cnic"
              id="cnic"
              onChange={(e) => setCnic(e.target.value)}
              className="p-2 rounded-md mt-2 ml-2 focus:outline-none focus:ring focus:border-cyan-200 "
            />
            <h4 className="mt-4">Passport Number </h4>
            <input
              type="text"
              name="passport"
              id="passport"
              onChange={(e) => setPassport(e.target.value)}
              className="p-2 rounded-md mt-2 ml-2 focus:outline-none focus:ring focus:border-cyan-200 "
            />
          </div>
          <div className="idcard">
            <h6 className="block m-6 text-center font-medium text-lg">
              Add Picture's of your identity Card{" "}
              <span className=" text-xl">*</span>
            </h6>

            <div className="imagecontainer">
              <label htmlFor="frontID" className="image cursor-pointer">
                Select front Side of Your ID/PASSPORT
              </label>

              {frontID?.name && (
                <div className="imagetitle flex flex-col justify-center items-center ">
                  <div className="flex">
                    <h1 className="mx-4">{frontID?.name} is selected</h1>
                    <MdClose
                      size={22}
                      className=" cursor-pointer"
                      onClick={() => setFrontID(null)}
                    />
                  </div>
                  <br />
                  {frontIDPreview && (
                    <img
                      src={frontIDPreview}
                      alt="Front ID Preview"
                      className=" rounded-xl w-[200px] mt-4 "
                    />
                  )}
                </div>
              )}

              <input
                type="file"
                id="frontID"
                name="frontID"
                onChange={onFrontId}
                style={{ display: "none" }}
                accept="image/png, image/gif, image/jpeg"
                className=" cursor-pointer"
              />
            </div>
            <div className="imagecontainer">
              <label htmlFor="rearID" className="image cursor-pointer">
                Select rear Side of Your ID/PASSPORT
              </label>

              {rearID?.name && (
                <div className="imagetitle flex flex-col justify-center items-center ">
                  <div className="title flex">
                    <h1 className="mx-4">{rearID?.name} is selected</h1>
                    <MdClose
                      size={22}
                      className=" cursor-pointer "
                      onClick={() => setRearID(null)}
                    />
                  </div>

                  {rearIDPreview && (
                    <img
                      src={rearIDPreview}
                      alt="Rear ID Preview"
                      className=" rounded-xl w-[200px] mt-5 "
                    />
                  )}
                </div>
              )}

              <input
                type="file"
                id="rearID"
                name="rearID"
                onChange={onRearId}
                // onSelect={onRearId}
                style={{ display: "none" }}
                accept="image/png, image/gif, image/jpeg, .jpg , .jpeg , .jfif , .pjpeg , .pjp"
                className=" cursor-pointer"
              />
            </div>
          </div>
          <div className="regbtn flex justify-center items-center flex-col">
            <h5>
              Submit Your application. We will verify your identity and notify
              you once you are verified.
            </h5>
            <h6>This process will take up to 24 hours.</h6>
            <button
              type="submit"
              className=" mt-4 bg-teal-500 hover:bg-white text-white hover:text-teal-500 border-2  border-slate-100 hover:border-teal-500 shadow-lg hover:shadow  rounded-full py-3 px-6"
              onClick={formSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SellerRigister;
