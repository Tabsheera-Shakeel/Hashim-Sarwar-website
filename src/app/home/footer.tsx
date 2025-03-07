"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black to-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <p className="opacity-80 text-sm">© 2025 Your Name. All Rights Reserved.</p>
      <div className="flex space-x-6">
        <p className="text-gray-400">Company:</p>
        <Link href="https://www.infomist.com" target="_blank" className="text-gray-400 hover:text-white transition">
          ➜ Infomist
        </Link>
        <Link href="https://www.beingguru.com" target="_blank" className="text-gray-400 hover:text-white transition">
          ➜ BeingGuru
        </Link>
      </div>
    </footer>
  );
}
