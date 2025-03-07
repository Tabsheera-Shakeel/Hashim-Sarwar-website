"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50 ">
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="text-2xl font-bold">LOGO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link href="/connectMe" className="hover:text-gray-400">Let's Connect</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Sliding from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Inside Menu */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <ul className="flex flex-col items-center space-y-6 pt-20 text-lg">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link href="/connectMe" className="hover:text-gray-400">let's Connect</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
         
        </ul>
      </div>
    </nav>
  );
}
