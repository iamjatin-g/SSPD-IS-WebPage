import React from "react";

const InternshipForm = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Section */}
            <div className="w-1/4 bg-black text-white p-8 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">SSPD Tech - Summer Internship Program 2025</h1>
                <p className="mt-4">☀️ Summer is Here! What’s Your Plan?</p>
                <p className="mt-2">Scrolling endlessly on your phone? 📱 Binge-watching shows? 🍿 Sleeping till noon? 😴</p>
                <p className="mt-4 font-semibold">Why not do something that actually grows your career? 🚀</p>
                <p className="mt-2">Introducing "Future Ready Internship 2025"—a Virtual Internship Program by SSPD Technology Solutions!</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>💻 Software Development</li>
                    <li>📊 Sales & Marketing</li>
                    <li>🤝 HR & Recruitment</li>
                    <li>🎨 Graphic & UI/UX Designing</li>
                    <li>🎬 Video Editing</li>
                </ul>
                <p className="mt-4">🎁 What you’ll get:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>✅ E-Certificate & Hard Copy Certificate 📜</li>
                    <li>✅ Letter of Recognition & Appreciation Kit 🎁🏆</li>
                    <li>✅ Mentorship from Industry Experts & Placement Support 🚀</li>
                </ul>
                <p className="mt-4">📩 Seats are filling fast! Apply Now!</p>
                <p className="mt-2">📞 9987546743 | ✉️ info@sspdtech.com</p>
            </div>

            {/* Right Section - Form */}
            <div className="w-3/4 bg-white p-10 flex flex-col justify-center shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Apply for the Internship</h2>
                <form className="space-y-6">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" className="p-3 border rounded-lg w-full" />
                        <input type="email" placeholder="Email" className="p-3 border rounded-lg w-full" />
                    </div>

                    {/* Row 2: Phone & City */}
                    <div className="grid grid-cols-2 gap-4">
                        <input type="tel" placeholder="Phone No." className="p-3 border rounded-lg w-full" />
                        <input type="text" placeholder="City" className="p-3 border rounded-lg w-full" />
                    </div>

                    {/* Row 3: Educational Status & College */}
                    <div className="grid grid-cols-2 gap-4">
                        <select className="p-3 border rounded-lg w-full">
                            <option>Current Educational Status</option>
                            <option>High School</option>
                            <option>Undergraduate</option>
                            <option>Postgraduate</option>
                            <option>Diploma</option>
                            <option>Other</option>
                        </select>
                        <input type="text" placeholder="College/University Name" className="p-3 border rounded-lg w-full" />
                    </div>

                    {/* Row 4: Degree & Internship Role */}
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Degree & Specialization" className="p-3 border rounded-lg w-full" />
                        <select className="p-3 border rounded-lg w-full">
                            <option>Preferred Internship Role</option>
                            <option>Software Development</option>
                            <option>Sales & Marketing</option>
                            <option>HR & Recruitment</option>
                            <option>Graphic & UI/UX Designing</option>
                            <option>Video Editing</option>
                        </select>
                    </div>

                    {/* Experience Dropdown */}
                    <select className="w-full p-3 border rounded-lg">
                        <option>Do you have any prior experience in this field?</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Maybe</option>
                    </select>

                    {/* Availability Dropdown */}
                    <select className="w-full p-3 border rounded-lg">
                        <option>Are you available for 4-5 hours per day for 45 days?</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Maybe</option>
                    </select>

                    {/* Referral Source Dropdown */}
                    <select className="w-full p-3 border rounded-lg">
                        <option>How did you hear about this internship?</option>
                        <option>Social Media</option>
                        <option>College Referral</option>
                        <option>Friend/Family</option>
                        <option>Other</option>
                    </select>

                    {/* Terms & Conditions */}
                    <div className="flex items-start gap-2">
                        <input type="checkbox" className="w-5 h-5 mt-1" />
                        <p className="text-sm">
                            I confirm that all details provided are correct, and I am committed to completing the internship.
                        </p>
                    </div>

                    {/* WhatsApp Group */}
                    <input
                        type="text"
                        placeholder="Join the WhatsApp Group for more Information"
                        className="w-full p-3 border rounded-lg"
                    />

                    {/* Submit Button */}
                    <button type="submit" className="w-full p-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InternshipForm;
