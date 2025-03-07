"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          About Me
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {` Digital Marketing & Freelancing Expert | Co-Founder of WorkChest | Blogger at BeingGuru`}
        </p>
      </motion.div>

      {/* Animated Content Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {[
          {
            title: "⚪ My Journey",
            points: [
              "Started as a Graphic Designer, later expanded into Digital Marketing.",
              "20+ years of experience in the online industry.",
              "Hold an MBA in Marketing, giving me a strong foundation in strategy.",
            ],
          },
          {
            title: "⚪ What I Do",
            points: [
              "Help businesses generate more eyeballs, leads, and revenue.",
              "Craft data-driven digital strategies for visibility and conversions.",
              "Specialize in SEO, PPC, Social Media Marketing, and Blogging.",
            ],
          },
          {
            title: "⚪ My Impact",
            points: [
              "Co-founder of WorkChest - Pakistan’s largest freelance marketplace.",
              "Founder of BeingGuru - A leading tech & freelancing blog.",
              "Empowering freelancers and creating digital collaboration opportunities globally.",
            ],
          },
          {
            title: "⚪ My Mission",
            points: [
              "Educate, inspire, and empower millions to achieve financial independence.",
              "Bridge the gap between freelancers and businesses.",
              "Share knowledge through social media, blogs, and videos.",
            ],
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 border border-gray-700 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)" }}
          >
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <ul className="text-gray-300 space-y-3">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <motion.span
                    className="text-white text-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                  >
                    -
                  </motion.span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          href="/contact"
          className="inline-block bg-white text-black font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition duration-300 hover:bg-gray-300 hover:shadow-2xl"
        >
          {`📩 Let’s Connect & Collaborate!`}
        </Link>
      </motion.div>
    </section>
  );
}
