"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const socialMedia = [
  { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/HishamSarwarBeingGuru", count: 608000 },
  { name: "Twitter", icon: <FaTwitter />, link: "https://www.twitter.com/youraccount", count: 102000 },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/hishamsarwar/?fbclid=IwY2xjawI4NydleHRuA2FlbQIxMAABHT0yFE_-TVGz5hP9a4VPBoEQRfQfvtQc9YLzp9BtQ0TOVEmr5z5U9O18gw_aem_CNGsWLDnaFAzDbkV-QOMlg#", count: 327103 },
  { name: "LinkedIn", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/hishamsarwar/", count: 327103 },
  { name: "YouTube", icon: <FaYoutube />, link: "https://www.youtube.com/user/infomist", count: 1130000 },
  { name: "TikTok", icon: <FaTiktok />, link: "https://www.tiktok.com/@hishamsarwar172?fbclid=IwY2xjawI4NjtleHRuA2FlbQIxMAABHT0yFE_-TVGz5hP9a4VPBoEQRfQfvtQc9YLzp9BtQ0TOVEmr5z5U9O18gw_aem_CNGsWLDnaFAzDbkV-QOMlg", count: 176000 },
];

export default function FollowersPage() {
  const [counts, setCounts] = useState(socialMedia.map(() => 0));

  useEffect(() => {
    // Change the type of intervals to NodeJS.Timeout
    const intervals: NodeJS.Timeout[] = socialMedia.map((s, index) => {
      let start = 0;
      const step = Math.ceil(s.count / 100);

      const intervalId = setTimeout(() => {
        const interval = setInterval(() => {
          start += step;
          if (start >= s.count) {
            start = s.count;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
        }, 20);
      }, 800 * index); // Delay each counter slightly to stagger the effects

      return intervalId;
    });

    return () => {
      // Clear all intervals when the component unmounts
      intervals.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 px-8 gap-12 bg-black text-white min-h-screen">
      {/* Left Side - Image */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/sitting-photo.jpg"
          alt="Profile"
          className="w-[500px] h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-gray-700 hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Right Side - Social Media */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold text-center md:text-left mb-8 text-white">
          Connect With Me
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {socialMedia.map((s, index) => (
            <motion.a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl font-semibold bg-gray-900 p-5 rounded-xl shadow-lg hover:shadow-gray-500/50 transition-shadow duration-300"
              whileHover={{ scale: 1.07 }}
            >
              <span className="text-4xl text-white">{s.icon}</span>
              <div>
                <span className="text-gray-300 block">{s.name}</span>
                <div className="text-white font-bold text-lg">
                  {counts[index].toLocaleString()} Followers
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
