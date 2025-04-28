// Footer.jsx
import React from "react";
import logo from "./assets/logo.jpg"; // Ensure the image path is correct

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-black to-gray-900 text-white p-10 shadow-lg cursor-default select-none">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="SSPD Technology Logo" className="h-16 w-16 object-contain rounded-full" />
                    <h2 className="text-lg font-semibold tracking-wide uppercase leading-tight">
                        SSPD TECHNOLOGY SOLUTIONS <br /> (OPC) PVT. LTD.
                    </h2>
                </div>

                {/* Contact Information */}
                <div className="text-center md:text-left mt-6 md:mt-0 text-white text-sm">
                    <p className="flex items-center justify-center md:justify-start gap-2">
                        📞 <span className="hover:text-white transition duration-300 cursor-pointer">9987546743</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                        ✉️ <a href="mailto:hr@sspdtech.com" className="hover:text-white transition duration-300 cursor-pointer">hr@sspdtech.com</a>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                        🌍 <a href="https://www.sspdtech.com" className="hover:text-white transition duration-300 cursor-pointer">www.sspdtech.com</a>
                    </p>
                    <p className="mt-2">
                        📍 B-003 Sai Pooja Residency, Dwadi Tukaram Chowk, Dombivli East 421203
                    </p>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-6 border-t border-gray-700 pt-4 text-xs tracking-wide text-white">
                © 2025 SSPD Tech. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
