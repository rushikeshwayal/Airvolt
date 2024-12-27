import React from 'react';
import { FileText, Calendar, Car, Clipboard, Award, HelpCircle } from 'lucide-react';
import "../App.css"
function Features() {
  const services = [
    {
      title: "Online Application",
      description: "Apply for your driving license online with our easy-to-use digital platform",
      icon: FileText,
    },
    {
      title: "Flexible Scheduling",
      description: "Book your driving tests and lessons at times that suit your schedule",
      icon: Calendar,
    },
    {
      title: "Practice Tests",
      description: "Access a wide range of practice tests to prepare for your theory exam",
      icon: Clipboard,
    },
    {
      title: "Driving Lessons",
      description: "Learn from experienced instructors with our comprehensive driving courses",
      icon: Car,
    },
    {
      title: "License Renewal",
      description: "Quick and easy license renewal process for existing drivers",
      icon: Award,
    },
    {
      title: "24/7 Support",
      description: "Get assistance anytime with our round-the-clock customer support",
      icon: HelpCircle,
    },
  ];

  return (
    <div id="features" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="extraBoldText text-4xl font-extrabold text-center text-green-400 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 p-8"
            >
              <div className="flex items-center mb-6">
                <service.icon className="w-12 h-12 text-blue-500 mr-4" />
                <h3 className=" litleboldText text-2xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className=" aboutParagraph text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
