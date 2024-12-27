import React from "react";
import NavBar from "./NavToHome";
import Footer from "./Footer";
import BackgroundImage from "../assets/vr-glasses-gaming.jpg"; // Update the path to your image

export default function MembershipForm() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        {/* NavBar */}
        <NavBar />

        {/* Form */}
        <div className="flex-grow p-8 flex justify-center items-center">
          <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            {/* Form Header */}
            <div className="text-center mb-6">
              <p className="text-gray-500 text-sm aboutParagraph">
                Submit the form below for membership applications, questions about our technology, or details about upcoming events.
              </p>
              <p className="text-gray-600 text-sm aboutParagraph">
                "*" indicates required fields
              </p>
            </div>

            {/* Name Fields */}
            <div className="mb-4">
              <label className="block text-gray-700 boldText mb-1">Name *</label>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First"
                  className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Last"
                  className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 boldText mb-1">Email *</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              />
            </div>

            {/* Organization */}
            <div className="mb-4">
              <label className="block text-gray-700 boldText mb-1">Organization *</label>
              <input
                type="text"
                placeholder="Enter your organization"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-gray-700 boldText mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            {/* Inquiry Type */}
            <div className="mb-4">
              <label className="block text-gray-700 boldText mb-1">Inquiry Type *</label>
              <select
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              >
                <option value="">Please Select</option>
                <option value="Partnership">Partnership</option>
                <option value="VendorShip">Vendor Ship</option>
                <option value="Supplier">Supplier</option>
                <option value="TechnologyTesting">Airvolt Technology & Testing</option>
                <option value="Investor">Investor</option>
              </select>
            </div>

            {/* Plans for Wireless Power */}
            <div className="mb-4">
              <label className="block text-gray-700 boldText mb-1">Plans for Wireless Power *</label>
              <select
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              >
                <option value="">Please Select</option>
                <option value="DevelopingProduct">Currently Developing a Product</option>
                <option value="FutureProducts">Considering Wireless Power for Future Products</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-gray-700 boldText mb-1">Message *</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              ></textarea>
            </div>

            {/* Privacy Policy Agreement */}
            <div className="mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border rounded-md focus:ring-green-300"
                  required
                />
                <span className="text-gray-600 aboutParagraph">
                  I have read, understand, and agree to Vegeebook/Airvolt's{" "}
                  <a href="#" className="text-green-500 underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-500 underline">
                    Terms of Service
                  </a>
                  .*
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded-md boldText hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
