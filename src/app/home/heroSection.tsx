// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-screen flex items-center">
//       {/* Background */}
//       <div className="absolute inset-0 grid grid-cols-2">
//         <div className="bg-white"></div>
//         <div className="bg-black relative"></div>
//       </div>

//       <div className="relative z-10 flex w-full h-full items-center px-6 md:px-16 lg:px-24">
//         {/* Left Side - Text */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
//             Hisham Sarwar
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
//             {`𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗠𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 & 𝗙𝗿𝗲𝗲𝗹𝗮𝗻𝗰𝗶𝗻𝗴 𝗘𝘅𝗽𝗲𝗿𝘁 | 𝗖𝗼-𝗙𝗼𝘂𝗻𝗱𝗲𝗿 𝗼𝗳 𝗪𝗼𝗿𝗸𝗖𝗵𝗲𝘀𝘁 | 𝗕𝗹𝗼𝗴𝗴𝗲𝗿 𝗮𝘁 𝗕𝗲𝗶𝗻𝗴𝗚𝘂𝗿𝘂`}
//           </p>
//         </div>

//         {/* Right Side - Image */}
//         <div className="w-full md:w-1/2 flex justify-end items-start md:items-center pr-0">
//           <Image
//             src="/photo-black.png"
//             alt="Person"
//             className="w-[100vw] sm:w-[95vw] md:w-[400px] lg:w-[500px] h-auto object-cover absolute right-0 bottom-6"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-white"></div>
        <div className="bg-black relative"></div>
      </div>

      <div className="relative z-10 flex w-full h-full items-center px-6 md:px-16 lg:px-24">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Hisham Sarwar
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
            {`𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗠𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 & 𝗙𝗿𝗲𝗲𝗹𝗮𝗻𝗰𝗶𝗻𝗴 𝗘𝘅𝗽𝗲𝗿𝘁 | 𝗖𝗼-𝗙𝗼𝘂𝗻𝗱𝗲𝗿 𝗼𝗳 𝗪𝗼𝗿𝗸𝗖𝗵𝗲𝘀𝘁 | 𝗕𝗹𝗼𝗴𝗴𝗲𝗿 𝗮𝘁 𝗕𝗲𝗶𝗻𝗴𝗚𝘂𝗿𝘂`}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-end items-start md:items-center pr-0">
          <Image
            src="/photo-black.png"
            alt="Person"
            width={500}  // ✅ Required width
            height={500} // ✅ Required height
            className="w-[100vw] sm:w-[95vw] md:w-[400px] lg:w-[500px] h-auto object-cover absolute right-0 bottom-6"
          />
        </div>
      </div>
    </section>
  );
}
