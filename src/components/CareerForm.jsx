import React, { useState } from "react";
import NavBar from "./NavToHome";
import Footer from "./Footer";
import BackgroundImage from "../assets/Cereer.jpg"; // Update the path to your image

export default function CareerForm() {
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mb-10">
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
        {/* NavBar */}
        <NavBar />

        {/* Introduction Section */}
        <div className="text-center text-white py-16 px-8">
          <h1 className="text-4xl font-bold mb-4 text-green-400">Join Airvolt Careers</h1>
          <p className="text-lg max-w-3xl mx-auto">
            "At Airvolt, we are pioneering innovation in wireless power
            technology. Our mission is to create a future where technology
            transcends boundaries. We are looking for passionate individuals to
            join our team and help shape the future. Explore opportunities to
            grow, innovate, and make an impact. Submit your application today!"
          </p>
        </div>

        {/* Form */}
        <div className="flex-grow p-8 flex justify-center items-center">
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
  <input type="hidden" name="access_key" value="3e399435-c07f-4749-96a1-91ee0e866c33" />

  {/* Name Fields */}
  <div className="mb-4">
    <label className="block text-gray-700 boldText mb-1">Name *</label>
    <div className="flex space-x-4">
      <input
        type="text"
        name="first_name"
        placeholder="First"
        className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
        required
      />
      <input
        type="text"
        name="last_name"
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
      name="email"
      placeholder="Enter your email"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
      required
    />
  </div>

  {/* Phone */}
  <div className="mb-4">
    <label className="block text-gray-700 boldText mb-1">Phone *</label>
    <input
      type="tel"
      name="phone"
      placeholder="Enter your phone number"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
      required
    />
  </div>

  {/* Upload Resume */}
  <div className="mb-4">
    <label className="block text-gray-700 boldText mb-1">Upload Resume url*</label>
    <input
      type="url"
      name="resume"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
      required
    />
  </div>

  {/* Message */}
  <div className="mb-4">
    <label className="block text-gray-700 boldText mb-1">Message *</label>
    <textarea
      name="message"
      rows="4"
      placeholder="Tell us about yourself or your career aspirations"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
      required
    ></textarea>
  </div>

  {/* Privacy Policy Agreement */}
  <div className="mb-6">
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="agree"
        className="w-4 h-4 border rounded-md focus:ring-green-300"
        required
      />
      <span className="text-gray-600 aboutParagraph">
        I have read, understand, and agree to Airvolt's{" "}
        <a href="/policy" target="_blank" className="text-green-500 underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms-condition" target="_blank" className="text-green-500 underline">
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
      Submit Application
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
