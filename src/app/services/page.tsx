// // // "use client"; 
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";

// // // const services = [
// // //   {
// // //     title: "Digital Marketing Training",
// // //     description: "Learn the ins and outs of digital marketing through tailored training sessions. From SEO and social media to email campaigns and analytics, I’ll equip you with the skills to excel. Explore Training Programs",
// // //     image: "https://shahzadmirza.com/wp-content/uploads/2023/08/digital-marketing-training-2.png",
// // //   },
// // //   {
// // //     title: "Business Coaching",
// // //     description: "Ready to take your business to the next level? My business coaching sessions provide personalized strategies to enhance your brand’s online presence and drive results. Book a Coaching Session",
// // //     image: "https://shahzadmirza.com/wp-content/uploads/2023/08/business-coaching-2.png",
// // //   },
// // //   {
// // //     title: "Ecommerce Business Launching",
// // //     description: "Are you venturing into the world of ecommerce? Let me be your guide. From setting up your online store to crafting winning marketing strategies, I’ll ensure your ecommerce business takes off successfully.",
// // //     image: "https://shahzadmirza.com/wp-content/uploads/2023/08/ecommerce-business-launching-1.png",
// // //   },
// // //   {
// // //     title: "Web Development Consultancy",
// // //     description: "Your website is your digital storefront. Get expert advice on optimizing user experience, mobile responsiveness, and overall design to leave a lasting impression on your visitors.",
// // //     image: "https://shahzadmirza.com/wp-content/uploads/2023/08/web-development-consultancy-1.png",
// // //   },
// // //   {
// // //     title: "Paid Advertising Campaigns",
// // //     description: "Maximize your reach with targeted paid advertising campaigns. From creating compelling ad copy to optimizing bidding strategies, I’ll ensure your investment leads to meaningful results.",
// // //     image: "https://shahzadmirza.com/wp-content/uploads/2023/08/paid-advertising-campaigns-1.png",
// // //   },
// // //   {
// // //     title: "Influencer Marketing Consultancy",
// // //     description: "Unlock the potential of influencer marketing. I’ll help you identify the right influencers for your niche and guide you through successful collaborations that drive engagement and brand loyalty.",
// // //     image: "https://shahzadmirza.com/wp-content/uploads/2023/08/influencer-marketing-1.png",
// // //   },
// // // ];

// // // const ServiceSection = () => {
// // //   return (
// // //     <section className="bg-black text-white py-20 px-6 lg:px-20">
// // //      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 text-center mb-4">
// // //   MY SPECIALITIES
// // // </h1>
// // // <p className="text-2xl md:text-3xl font-semibold text-white text-center">
// // //   I HELP BUILD ONLINE BUSINESSES
// // // </p>

// // //       <div className="space-y-20">
// // //         {services.map((service, index) => (
// // //           <motion.div
// // //             key={index}
// // //             initial={{ opacity: 0, y: 50 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             viewport={{ once: true }}
// // //             className={`flex flex-col lg:flex-row items-center ${
// // //               index % 2 === 0 ? "lg:flex-row-reverse" : ""
// // //             }`}
// // //           >
            
// // //             <div className="w-full lg:w-1/2">
// // //               <Image
// // //                 src={service.image}
// // //                 alt={service.title}
// // //                 width={600}
// // //                 height={400}
// // //                 className="rounded-lg shadow-lg"
// // //               />
// // //             </div>

          
// // //             <div className="w-full lg:w-1/2 px-6 lg:px-12 mt-6 lg:mt-0">
// // //               <h2 className="text-3xl font-bold text-orange-400 mb-4">
// // //                 {service.title}
// // //               </h2>
// // //               <p className="text-lg text-gray-300 leading-relaxed">
// // //                 {service.description}
// // //               </p>
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServiceSection;


// // "use client";

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // const services = [
// //   {
// //     title: "Digital Marketing",
// //     description: "Boost your brand with data-driven marketing strategies that drive engagement and conversions."
// //   },
// //   {
// //     title: "SEO & PPC",
// //     description: "Rank higher on search engines and maximize ROI with high-performing SEO & PPC campaigns."
// //   },
// //   {
// //     title: "Freelancing Mentorship",
// //     description: "Guiding freelancers to build profitable careers and achieve financial independence."
// //   },
// //   {
// //     title: "Web Development",
// //     description: "Designing modern, responsive websites that enhance user experience and business growth."
// //   }
// // ];

// // export default function ServicesCarousel() {
// //   return (
// //     <div className="bg-gray-100 py-10 px-5">
// //       <h2 className="text-3xl font-bold text-center mb-6">My Services & Expertise</h2>
// //       <p className="text-center text-lg text-gray-600 mb-10">
// //         Helping businesses and individuals achieve digital success through strategic solutions.
// //       </p>
// //       <Swiper
// //         modules={[Navigation, Pagination, Autoplay]}
// //         spaceBetween={20}
// //         slidesPerView={1}
// //         navigation
// //         pagination={{ clickable: true }}
// //         autoplay={{ delay: 3000 }}
// //         breakpoints={{
// //           768: { slidesPerView: 2 },
// //           1024: { slidesPerView: 3 },
// //         }}
// //         className="max-w-5xl mx-auto"
// //       >
// //         {services.map((service, index) => (
// //           <SwiperSlide key={index}>
// //             <div className="bg-white rounded-xl shadow-lg p-6 h-64 flex flex-col justify-center text-center border border-gray-200">
// //               <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
// //               <p className="text-gray-700">{service.description}</p>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // }


// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const services = [
//   {
//     title: "Digital Marketing",
//     description:
//       "Boost your brand with data-driven marketing strategies that drive engagement and conversions.",
//   },
//   {
//     title: "SEO & PPC",
//     description:
//       "Rank higher on search engines and maximize ROI with high-performing SEO & PPC campaigns.",
//   },
//   {
//     title: "Freelancing Mentorship",
//     description:
//       "Guiding freelancers to build profitable careers and achieve financial independence.",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Designing modern, responsive websites that enhance user experience and business growth.",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <div className="flex flex-col items-center justify-center py-10 px-4">
//       <h2 className="text-4xl font-bold text-center mb-6">My Services & Expertise</h2>
//       <p className="text-lg text-center text-gray-600 max-w-2xl mb-10">
//         Helping businesses and individuals achieve digital success through strategic solutions.
//       </p>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000 }}
//         className="w-full max-w-4xl"
//       >
//         {services.map((service, index) => (
//           <SwiperSlide key={index}>
//             <motion.div
//               className="bg-white shadow-xl rounded-2xl p-10 text-center border border-gray-300 w-[500px] h-[300px] flex flex-col justify-center items-center mx-auto"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
//               <p className="text-lg text-gray-700">{service.description}</p>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const services = [
//   {
//     title: "Digital Marketing",
//     description:
//       "Boost your brand with data-driven marketing strategies that drive engagement and conversions.",
//   },
//   {
//     title: "SEO & PPC",
//     description:
//       "Rank higher on search engines and maximize ROI with high-performing SEO & PPC campaigns.",
//   },
//   {
//     title: "Freelancing Mentorship",
//     description:
//       "Guiding freelancers to build profitable careers and achieve financial independence.",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Designing modern, responsive websites that enhance user experience and business growth.",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <div className="flex flex-col items-center justify-center py-10 px-4">
//       <h2 className="text-4xl font-bold text-center mb-6">My Services & Expertise</h2>
//       <p className="text-lg text-center text-gray-600 max-w-2xl mb-10">
//         Helping businesses and individuals achieve digital success through strategic solutions.
//       </p>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000 }}
//         className="w-full max-w-4xl"
//       >
//         {services.map((service, index) => (
//           <SwiperSlide key={index}>
//             <motion.div
//               className="bg-white shadow-xl rounded-2xl p-10 text-center border border-gray-400 w-[500px] h-[300px] flex flex-col justify-center items-center mx-auto"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
//               <p className="text-lg text-gray-700">{service.description}</p>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChartLine, FaSearch, FaLaptopCode, FaUserTie } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Boost your brand with data-driven marketing strategies that drive engagement and conversions.",
    icon: <FaChartLine className="text-5xl text-gray-700" />,
  },
  {
    title: "SEO & PPC",
    description:
      "Rank higher on search engines and maximize ROI with high-performing SEO & PPC campaigns.",
    icon: <FaSearch className="text-5xl text-gray-700" />,
  },
  {
    title: "Freelancing Mentorship",
    description:
      "Guiding freelancers to build profitable careers and achieve financial independence.",
    icon: <FaUserTie className="text-5xl text-gray-700" />,
  },
  {
    title: "Web Development",
    description:
      "Designing modern, responsive websites that enhance user experience and business growth.",
    icon: <FaLaptopCode className="text-5xl text-gray-700" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-6">My Services & Expertise</h2>
      <p className="text-lg text-center text-gray-600 max-w-2xl mb-10">
        Helping businesses and individuals achieve digital success through strategic solutions.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-full max-w-4xl"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white shadow-xl rounded-2xl p-10 text-center border border-gray-400 w-[500px] h-[300px] flex flex-col justify-center items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
              <h3 className="text-3xl font-bold mt-4 mb-6">{service.title}</h3>
              <p className="text-lg text-gray-700">{service.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



