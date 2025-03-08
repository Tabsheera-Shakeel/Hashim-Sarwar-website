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
              className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 text-center border border-gray-400 w-full sm:w-[500px] h-[300px] flex flex-col justify-center items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
              <h3 className="text-2xl sm:text-3xl font-bold mt-4 mb-6">{service.title}</h3>
              <p className="text-sm sm:text-lg text-gray-700">{service.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
