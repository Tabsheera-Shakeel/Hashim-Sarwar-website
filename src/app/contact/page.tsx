"use client";

import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 min-h-screen bg-black">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-gray-700">
        <h3 className="text-4xl font-bold text-center text-white mb-6">Contact Me</h3>
        <form className="space-y-6">
          <div className="flex items-center bg-white/20 border border-gray-600 p-3 rounded-lg focus-within:ring-2 focus-within:ring-white">
            <FaUser className="text-gray-300 mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>
          <div className="flex items-center bg-white/20 border border-gray-600 p-3 rounded-lg focus-within:ring-2 focus-within:ring-white">
            <FaEnvelope className="text-gray-300 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>
          <div className="flex items-center bg-white/20 border border-gray-600 p-3 rounded-lg focus-within:ring-2 focus-within:ring-white">
            <FaPhone className="text-gray-300 mr-3" />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>
          <div className="bg-white/20 border border-gray-600 p-3 rounded-lg focus-within:ring-2 focus-within:ring-white">
            <textarea
              placeholder="Your Message"
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-white to-gray-300 text-black font-bold py-3 rounded-lg flex items-center justify-center hover:opacity-80 transition duration-300"
          >
            <FaPaperPlane className="mr-2" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
