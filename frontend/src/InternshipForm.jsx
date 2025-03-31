import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InternshipForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        education: "",
        college: "",
        degree: "",
        role: "",
        experience: "",
        availability: "",
        referral: "",
        agreement: false,
    });

    const validateForm = () => {
        if (
            !formData.fullName.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.city.trim() ||
            !formData.education ||
            !formData.college.trim() ||
            !formData.degree.trim() ||
            !formData.role ||
            !formData.experience ||
            !formData.availability ||
            !formData.referral ||
            !formData.agreement
        ) {
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            toast.success("Application submitted successfully!", {
                position: "top-center",
                autoClose: 3000,
            });
        } else {
            toast.error("Please fill in all required fields.", {
                position: "top-center",
                autoClose: 500,
            });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Left Section */}
            <div className="lg:w-3/10 w-full bg-gradient-to-b from-black to-gray-900 text-white p-10 flex flex-col justify-center shadow-lg cursor-default select-none">
                <h1 className="text-3xl font-bold mb-4 leading-tight text-center uppercase tracking-wide">
                    SSPD Tech <br /> Summer Internship 2025
                </h1>

                <p className="text-lg mt-4 text-gray-300">☀️ Summer is Here! What’s Your Plan?</p>

                <div className="mt-4 space-y-2 text-gray-400">
                    <p>📱 Scrolling endlessly on your phone?</p>
                    <p>🍿 Binge-watching shows?</p>
                    <p>😴 Sleeping till noon?</p>
                </div>

                <p className="mt-6 font-semibold text-lg text-white">Why not do something that actually grows your career? 🚀</p>

                <p className="mt-4 text-gray-300">Introducing "Future Ready Internship 2025"—a Virtual Internship Program brought to you by SSPD Technology Solutions! 💻 Work from home, spend just 4-5 hours daily, and gain real-world experience while building skills that make you job-ready! And guess what? It’s 100% FREE! 💯</p>

                <p className="mt-6 text-lg font-semibold text-white">💡 Choose your field:</p>
                <ul className="list-none mt-4 space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><span className="text-xl">💻</span> Software Development</li>
                    <li className="flex items-center gap-2"><span className="text-xl">📊</span> Sales & Marketing</li>
                    <li className="flex items-center gap-2"><span className="text-xl">🤝</span> HR & Recruitment</li>
                    <li className="flex items-center gap-2"><span className="text-xl">🎨</span> Graphic & UI/UX Designing</li>
                    <li className="flex items-center gap-2"><span className="text-xl">🎬</span> Video Editing</li>
                </ul>

                <p className="mt-6 font-semibold text-lg text-white">🎁 What you’ll get:</p>
                <ul className="list-none mt-4 space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><span className="text-xl">✅</span> E-Certificate & Hard Copy Certificate 📜</li>
                    <li className="flex items-center gap-2"><span className="text-xl">✅</span> Letter of Recognition & Appreciation Kit 🎁🏆</li>
                    <li className="flex items-center gap-2"><span className="text-xl">✅</span> Mentorship from Industry Experts & Placement Support 🚀</li>
                </ul>

                <p className="mt-4 text-gray-300">No prior experience? No worries! We’ll train and guide you!</p>

                <p className="mt-6 text-lg text-center text-gray-200 font-semibold">📩 Seats are filling fast! Apply Now!</p>

                {/* <div className="mt-4 text-center text-gray-400">
                    <p className="hover:text-white transition duration-300 cursor-pointer">📞 9987546743</p>
                    <p className="hover:text-white transition duration-300 cursor-pointer">✉️ info@sspdtech.com</p>
                </div> */}
            </div>

            {/* Right Section - Form */}
            <div className="lg:w-7/10 w-full bg-white p-10 flex flex-col justify-center shadow-xl rounded-xl border border-gray-200 select-none">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Apply for the Internship</h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <input
                                name="fullName"
                                type="text"
                                placeholder="Full Name *"
                                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email *"
                                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Phone & City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <input
                                name="phone"
                                type="number"
                                placeholder="Phone No. *"
                                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="relative">
                            <input
                                name="city"
                                type="text"
                                placeholder="City *"
                                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Education & College */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <select
                                name="education"
                                className="p-3 border border-gray-300 rounded-lg w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.education}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Current Educational Status *</option>
                                <option>HSC Passed</option>
                                <option>Undergraduate</option>
                                <option>Graduate</option>
                                <option>Postgraduate</option>
                                <option>Diploma</option>
                            </select>
                        </div>
                        <div className="relative">
                            <input
                                name="college"
                                type="text"
                                placeholder="College/University Name *"
                                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.college}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Degree & Role */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <input
                                name="degree"
                                type="text"
                                placeholder="Degree & Specialization *"
                                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.degree}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="relative">
                            <select
                                name="role"
                                className="p-3 border border-gray-300 rounded-lg w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Preferred Internship Role *</option>
                                <option>Software Development</option>
                                <option>Sales & Marketing</option>
                                <option>HR & Recruitment</option>
                                <option>Graphic & UI/UX Designing</option>
                                <option>Video Editing</option>
                            </select>
                        </div>
                    </div>

                    {/* Experience, Availability, Referral */}
                    <div className="relative">
                        <select
                            name="experience"
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Do you have prior experience? *</option>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                    </div>

                    <div className="relative">
                        <select
                            name="availability"
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
                            value={formData.availability}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Are you available for 4-5 hours per day? *</option>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                    </div>

                    <div className="relative">
                        <select
                            name="referral"
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
                            value={formData.referral}
                            onChange={handleChange}
                            required
                        >
                            <option value="">How did you hear about this? *</option>
                            <option>Social Media</option>
                            <option>College Referral</option>
                            <option>Friend/Family</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Agreement */}
                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            name="agreement"
                            className="w-5 h-5 mt-1 cursor-pointer accent-black"
                            checked={formData.agreement}
                            onChange={handleChange}
                            required
                        />
                        <p className="text-sm text-gray-600 cursor-default">
                            I confirm that all details are correct and I will complete the internship.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-40 mx-auto p-3 bg-black text-white rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:scale-105"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InternshipForm;
