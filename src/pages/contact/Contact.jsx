import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from "sonner";

const Contact = () => {
  const sendMessage = () => {
    toast.success(`Your message is recieved`);
  };

  return (
    <>
      <Header />
      <div className=" mt-32 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-700 mb-8 text-center">
            Feel free to reach out to us with any questions or comments!
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                  id="first-name"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                  id="last-name"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                id="message"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                onClick={sendMessage}
                className="bg-teal-600 hover:bg-teal-400 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
