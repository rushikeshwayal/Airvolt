'use client'

import React from "react";
import { motion } from "framer-motion";
import { Icon } from './icon.tsx'
import { Car, Smartphone, DrillIcon as Drone, Package, BotIcon as Robot, Globe, Leaf, Building2, Cog, Construction, Home, Shield, Rocket, Wifi } from 'lucide-react'
import Footer from "./Footer.jsx";
import NavBarToAll from "./NavTOALL.jsx";

const industries = [
    { name: "Automotive", icon: Car },
    { name: "Consumer Electronics", icon: Smartphone },
    { name: "Drones", icon: Drone },
    { name: "Logistics", icon: Package },
    { name: "Robotics", icon: Robot },
    { name: "Advertising", icon: Globe },
    { name: "Agriculture", icon: Leaf },
    { name: "Healthcare", icon: Building2 },
    { name: "Industrial", icon: Cog },
    { name: "Infrastructure", icon: Construction },
    { name: "Real Estate", icon: Home },
    { name: "Defence", icon: Shield },
    { name: "Aerospace", icon: Rocket },
    { name: "IoT", icon: Wifi },
];

const IndustryFocus = () => {
    return (
        <div className="AboutTitle bg-gradient-to-r from-gray-50 to-gray-100 ">
            <div>
            <NavBarToAll />
            </div>
            <section className=" py-20 relative overflow-hidden">
                <div className="absolute inset-0 flex justify-center items-center flex-wrap [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Industry Focus
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            At Airvolt, we are transforming industries with innovative wireless charging solutions that
                            empower businesses to operate more efficiently and sustainably.
                        </p>
                    </div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 ease-in-out"
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1
                                    }
                                }}
                            >
                                <div className="p-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <Icon icon={industry.icon} className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 text-center">
                                        {industry.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default IndustryFocus;

