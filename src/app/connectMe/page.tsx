// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// // // // const socialMedia = [
// // // //   { name: "Facebook", icon: <FaFacebookF />, initial: 10500, target: 12000 },
// // // //   { name: "Twitter", icon: <FaTwitter />, initial: 8000, target: 9500 },
// // // //   { name: "Instagram", icon: <FaInstagram />, initial: 15000, target: 18000 },
// // // //   { name: "LinkedIn", icon: <FaLinkedinIn />, initial: 5000, target: 7000 },
// // // //   { name: "YouTube", icon: <FaYoutube />, initial: 25000, target: 30000 },
// // // // ];

// // // // export default function FollowersPage() {
// // // //   const [counts, setCounts] = useState(socialMedia.map((s) => s.initial));

// // // //   useEffect(() => {
// // // //     const intervals = socialMedia.map((s, index) => {
// // // //       return setInterval(() => {
// // // //         setCounts((prev) => {
// // // //           const newCounts = [...prev];
// // // //           if (newCounts[index] < s.target) {
// // // //             newCounts[index] += Math.floor(Math.random() * 10) + 1;
// // // //           }
// // // //           return newCounts;
// // // //         });
// // // //       }, 100);
// // // //     });
// // // //     return () => intervals.forEach(clearInterval);
// // // //   }, []);

// // // //   return (
// // // //     <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 gap-10">
// // // //       {/* Left Side - Image */}
// // // //       <div className="w-full md:w-1/2 flex justify-center">
// // // //         <img
// // // //           src="/sitting-photo.jpg"
// // // //           alt="Profile"
// // // //           className="w-80 h-80 object-cover rounded-xl shadow-lg"
// // // //         />
// // // //       </div>
      
// // // //       {/* Right Side - Social Media */}
// // // //       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
// // // //         <h2 className="text-4xl font-bold text-center md:text-left mb-6">Connect With Me</h2>
// // // //         <div className="flex flex-col gap-5">
// // // //           {socialMedia.map((s, index) => (
// // // //             <motion.div
// // // //               key={s.name}
// // // //               className="flex items-center gap-4 text-xl font-semibold text-gray-900"
// // // //               whileHover={{ scale: 1.05 }}
// // // //             >
// // // //               <span className="text-3xl text-gray-700">{s.icon}</span>
// // // //               <span className="text-gray-600">{s.name}:</span>
// // // //               <motion.span
// // // //                 className="text-blue-600 font-bold"
// // // //                 animate={{ opacity: [0.5, 1], x: [0, 5, 0] }}
// // // //                 transition={{ duration: 0.5, repeat: Infinity }}
// // // //               >
// // // //                 {counts[index].toLocaleString()} Followers
// // // //               </motion.span>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { motion } from "framer-motion";
// // // import {
// // //   FaFacebookF,
// // //   FaTwitter,
// // //   FaInstagram,
// // //   FaLinkedinIn,
// // //   FaYoutube,
// // // } from "react-icons/fa";

// // // const socialMedia = [
// // //   { name: "Facebook", icon: <FaFacebookF />, initial: 10500, target: 12000 },
// // //   { name: "Twitter", icon: <FaTwitter />, initial: 8000, target: 9500 },
// // //   { name: "Instagram", icon: <FaInstagram />, initial: 15000, target: 18000 },
// // //   { name: "LinkedIn", icon: <FaLinkedinIn />, initial: 5000, target: 7000 },
// // //   { name: "YouTube", icon: <FaYoutube />, initial: 25000, target: 30000 },
// // // ];

// // // export default function FollowersPage() {
// // //   const [counts, setCounts] = useState(socialMedia.map((s) => s.initial));

// // //   useEffect(() => {
// // //     const intervals = socialMedia.map((s, index) => {
// // //       return setInterval(() => {
// // //         setCounts((prev) => {
// // //           const newCounts = [...prev];
// // //           if (newCounts[index] < s.target) {
// // //             newCounts[index] += Math.floor(Math.random() * 10) + 1;
// // //           }
// // //           return newCounts;
// // //         });
// // //       }, 100);
// // //     });
// // //     return () => intervals.forEach(clearInterval);
// // //   }, []);

// // //   return (
// // //     <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 gap-10 bg-black text-white">
// // //       {/* Left Side - Image */}
// // //       <div className="w-full md:w-1/2 flex justify-center">
// // //         <img
// // //           src="/sitting-photo.jpg"
// // //           alt="Profile"
// // //           className="w-80 h-80 object-cover rounded-xl shadow-lg grayscale"
// // //         />
// // //       </div>

// // //       {/* Right Side - Social Media */}
// // //       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
// // //         <h2 className="text-4xl font-bold text-center md:text-left mb-6">
// // //           Connect With Me
// // //         </h2>
// // //         <div className="grid grid-cols-2 gap-6">
// // //           {socialMedia.map((s, index) => (
// // //             <motion.div
// // //               key={s.name}
// // //               className="flex items-center gap-4 text-xl font-semibold bg-gray-800 p-4 rounded-lg shadow-lg"
// // //               whileHover={{ scale: 1.05 }}
// // //             >
// // //               <span className="text-3xl text-gray-400">{s.icon}</span>
// // //               <div>
// // //                 <span className="text-gray-300">{s.name}</span>
// // //                 <motion.div
// // //                   className="text-white font-bold text-lg"
// // //                   animate={{ opacity: [0.5, 1], x: [0, 5, 0] }}
// // //                   transition={{ duration: 0.5, repeat: Infinity }}
// // //                 >
// // //                   {counts[index].toLocaleString()} Followers
// // //                 </motion.div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   FaFacebookF,
// //   FaTwitter,
// //   FaInstagram,
// //   FaLinkedinIn,
// //   FaYoutube,
// //   FaTiktok,
// // } from "react-icons/fa";

// // const socialMedia = [
// //   { name: "Facebook", icon: <FaFacebookF />, initial: 10500, target: 12000 },
// //   { name: "Twitter", icon: <FaTwitter />, initial: 8000, target: 9500 },
// //   { name: "Instagram", icon: <FaInstagram />, initial: 15000, target: 18000 },
// //   { name: "LinkedIn", icon: <FaLinkedinIn />, initial: 5000, target: 7000 },
// //   { name: "YouTube", icon: <FaYoutube />, initial: 25000, target: 30000 },
// //   { name: "TikTok", icon: <FaTiktok />, initial: 12000, target: 15000 },
// // ];

// // export default function FollowersPage() {
// //   const [counts, setCounts] = useState(socialMedia.map((s) => s.initial));

// //   useEffect(() => {
// //     const intervals = socialMedia.map((s, index) => {
// //       return setInterval(() => {
// //         setCounts((prev) => {
// //           const newCounts = [...prev];
// //           if (newCounts[index] < s.target) {
// //             newCounts[index] += Math.floor(Math.random() * 10) + 1;
// //           }
// //           return newCounts;
// //         });
// //       }, 100);
// //     });
// //     return () => intervals.forEach(clearInterval);
// //   }, []);

// //   return (
// //     <div className="flex flex-col md:flex-row items-center justify-center py-12 px-8 gap-12 bg-black text-white min-h-screen">
// //       {/* Left Side - Image */}
// //       <motion.div 
// //         className="w-full md:w-1/2 flex justify-center"
// //         initial={{ opacity: 0, x: -50 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 1 }}
// //       >
// //         <img
// //           src="/sitting-photo.jpg"
// //           alt="Profile"
// //           className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-gray-700 hover:scale-105 transition-transform duration-300"
// //         />
// //       </motion.div>

// //       {/* Right Side - Social Media */}
// //       <motion.div 
// //         className="w-full md:w-1/2 flex flex-col items-center md:items-start"
// //         initial={{ opacity: 0, x: 50 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 1 }}
// //       >
// //         <h2 className="text-5xl font-extrabold text-center md:text-left mb-8 text-white">
// //           Connect With Me
// //         </h2>
// //         <div className="grid grid-cols-2 gap-6">
// //           {socialMedia.map((s, index) => (
// //             <motion.div
// //               key={s.name}
// //               className="flex items-center gap-4 text-xl font-semibold bg-gray-900 p-5 rounded-xl shadow-lg hover:shadow-gray-500/50 transition-shadow duration-300"
// //               whileHover={{ scale: 1.07 }}
// //             >
// //               <span className="text-4xl text-white">{s.icon}</span>
// //               <div>
// //                 <span className="text-gray-300 block">{s.name}</span>
// //                 <motion.div
// //                   className="text-white font-bold text-lg"
// //                   animate={{ opacity: [0.5, 1], x: [0, 5, 0] }}
// //                   transition={{ duration: 0.5, repeat: Infinity }}
// //                 >
// //                   {counts[index].toLocaleString()} Followers
// //                 </motion.div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";

// const socialMedia = [
//   { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/youraccount", count: 608000 },
//   { name: "Twitter", icon: <FaTwitter />, link: "https://www.twitter.com/youraccount", count: 102000 },
//   { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/youraccount", count: 327103 },
//   { name: "LinkedIn", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/youraccount", count: 327103 },
//   { name: "YouTube", icon: <FaYoutube />, link: "https://www.youtube.com/yourchannel", count: 1130000 },
//   { name: "TikTok", icon: <FaTiktok />, link: "https://www.tiktok.com/@youraccount", count: 176000 },
// ];

// export default function FollowersPage() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center py-12 px-8 gap-12 bg-black text-white min-h-screen">
//       {/* Left Side - Image */}
//       <motion.div 
//         className="w-full md:w-1/2 flex justify-center"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <img
//           src="/sitting-photo.jpg"
//           alt="Profile"
//           className="w-[500px] h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-gray-700 hover:scale-105 transition-transform duration-300"
//         />
//       </motion.div>

//       {/* Right Side - Social Media */}
//       <motion.div 
//         className="w-full md:w-1/2 flex flex-col items-center md:items-start"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-5xl font-extrabold text-center md:text-left mb-8 text-white">
//           Connect With Me
//         </h2>
//         <div className="grid grid-cols-2 gap-6">
//           {socialMedia.map((s) => (
//             <motion.a
//               key={s.name}
//               href={s.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-4 text-xl font-semibold bg-gray-900 p-5 rounded-xl shadow-lg hover:shadow-gray-500/50 transition-shadow duration-300"
//               whileHover={{ scale: 1.07 }}
//             >
//               <span className="text-4xl text-white">{s.icon}</span>
//               <div>
//                 <span className="text-gray-300 block">{s.name}</span>
//                 <motion.div
//                   className="text-white font-bold text-lg"
//                   animate={{ opacity: [0.5, 1], y: [0, -5, 0] }}
//                   transition={{ duration: 0.5, repeat: Infinity }}
//                 >
//                   <motion.span
//                     animate={{ count: s.count }}
//                     transition={{ duration: 2 }}
//                   >
//                     {s.count.toLocaleString()}
//                   </motion.span> Followers
//                 </motion.div>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }


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
    const intervals = socialMedia.map((s, index) => {
      let start = 0;
      const step = Math.ceil(s.count / 100);
      return setInterval(() => {
        start += step;
        if (start >= s.count) {
          start = s.count;
          clearInterval(intervals[index]);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, 20);
    });
    return () => intervals.forEach(clearInterval);
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
