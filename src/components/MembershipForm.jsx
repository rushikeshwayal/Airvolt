import React, { useState } from "react";
import NavBar from "./NavToHome";
import Footer from "./Footer";
import BackgroundImage from "../assets/vr-glasses-gaming.jpg";

export default function MembershipForm() {
  const [formStatus, setFormStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        setShowPopup(true);
        event.target.reset(); // Reset form after submission
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

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

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-green-600 font-bold">✅ Form submitted successfully!</p>
            {/* <p className="text-gray-700 mb-4">We'll get back to you soon.</p> */}
            <button
              onClick={() => setShowPopup(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        <NavBar />

        {/* Form Section */}
        <div className="flex-grow p-8 flex justify-center items-center">
          <form
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value="3e399435-c07f-4749-96a1-91ee0e866c33"
            />

            {/* Success/Error Message */}
            {/* {formStatus === "success" && (
              <p className="text-green-600 text-center mb-4">
                ✅ Form submitted successfully! We'll get back to you soon.
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-red-600 text-center mb-4">
                ❌ Submission failed. Please try again.
              </p>
            )} */}

            {/* Name Fields */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Name *</label>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First"
                  className="w-1/2 p-2 border rounded-md focus:ring focus:ring-green-300"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last"
                  className="w-1/2 p-2 border rounded-md focus:ring focus:ring-green-300"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                required
              />
            </div>

            {/* Organization */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Organization *</label>
              <input
                type="text"
                name="organization"
                placeholder="Enter your organization"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                required
              />
            </div>

            {/* Inquiry Type */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Inquiry Type *</label>
              <select
                name="inquiry_type"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
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
              <label className="block text-gray-700 font-bold mb-1">Plans for Wireless Power *</label>
              <select
                name="wireless_power_plans"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
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
              <label className="block text-gray-700 font-bold mb-1">Message *</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                required
              ></textarea>
            </div>

            {/* Privacy Policy Agreement */}
            <div className="mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="privacy_policy"
                  className="w-4 h-4 border rounded-md focus:ring-green-300"
                  required
                />
                <span className="text-gray-600">
                  I have read, understand, and agree to{" "}
                  <a href="/policy" target="_blank" className="text-green-500 underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms-conditionn" target="_blank" className="text-green-500 underline">
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
                className="w-full bg-green-600 text-white p-2 rounded-md font-bold hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
}
