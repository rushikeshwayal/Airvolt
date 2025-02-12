import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="bg-gray-50 AboutTitle p-10"> 
            <div className="sm:w-[80px] sm:h-[80px] w-14 h-14 bg-black rounded-full mx-auto flex items-center justify-center "> 
    <h1 className=" font-bold text-white text-xs sm:text-lg ">Airvolt</h1>
</div>
        <div className="bg-gray-50 py-10 px-5">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-5">Terms and Conditions</h1>
                <p className="text-gray-600 mb-4">
                    Welcome to Airvolt (OPC) Private Limited! These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to comply with these terms.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                    By accessing our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our services.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    2. Use of Services
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>You must be at least 18 years old to use our services.</li>
                    <li>You agree to use the website only for lawful purposes and in compliance with all applicable laws.</li>
                    <li>Unauthorized use of our website may result in legal action.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    3. Intellectual Property
                </h2>
                <p className="text-gray-600">
                    All content, logos, designs, and intellectual property on this website are the exclusive property of Airvolt (OPC) Private Limited. Unauthorized use or reproduction is strictly prohibited.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    4. Limitation of Liability
                </h2>
                <p className="text-gray-600">
                    We shall not be held liable for any direct, indirect, or consequential damages arising from the use of our services. Use of our website is at your own risk.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    5. Termination
                </h2>
                <p className="text-gray-600">
                    We reserve the right to suspend or terminate access to our services for any reason, including violation of these Terms and Conditions, without prior notice.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    6. Governing Law
                </h2>
                <p className="text-gray-600">
                    These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of our website shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    7. Changes to Terms
                </h2>
                <p className="text-gray-600">
                    We reserve the right to update these Terms and Conditions at any time. Continued use of our services after changes are posted constitutes your acceptance of the updated terms.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    8. Contact Us
                </h2>
                <p className="text-gray-600">
                    If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <ul className="list-none text-gray-600 space-y-2">
                    <li>Address: Tejas Heights, SNo. 140, Gurudwara, Chinchwad, Pune, Maharashtra India, 411033</li>
                    <li>Email: <a href="mailto:info@vegeebooksolutions.com" className="text-blue-600">info@vegeebooksolutions.com</a></li>
                    {/* <li>Phone: +91 7559176431</li> */}
                </ul>

                <p className="text-gray-500 text-sm mt-6">
                    Last Updated: January 2025
                </p>
            </div>
        </div>
        </div>
    );
};

export default TermsAndConditions;
