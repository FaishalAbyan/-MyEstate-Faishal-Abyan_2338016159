import React, { useEffect } from "react";
import { service } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext"; 
import AOS from "aos"; // Library untuk animasi scroll
import "aos/dist/aos.css"; // Gaya animasi AOS

/**
 * Komponen Services - Menampilkan layanan utama real estate.
 */
const Services = () => {
  const { darkMode } = useDarkMode(); // Mengakses nilai mode gelap
  useEffect(() => {
    AOS.init({
      offset: 200, // Jarak sebelum animasi dimulai
      duration: 800, // Durasi animasi
      easing: "ease-in-sine", // Gaya animasi
      delay: 100, // Penundaan animasi
    });
  }, []);

  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      {/* Section Utama */}
      <section
        id="services"
        className={`${
          darkMode ? "dark:bg-gray-800" : "bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        {/* Header Section */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            OUR SERVICES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold leading-10 dark:text-white"
          >
            Top Real Estates <br /> Services Available
          </h1>
        </div>

        {/* Daftar Layanan */}
        <div
          id="services-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {service.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              {/* Ikon Layanan */}
              <div className="p-6 rounded-full bg-red-200">
                <item.icon className="text-red-600 text-3xl transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
              {/* Judul Layanan */}
              <h1 className="text-black text-[22px] font-semibold dark:text-white">
                {item.title}
              </h1>
              {/* Deskripsi Layanan */}
              <p className="text-lg text-slate-700 dark:text-white">
                {item.desc}
              </p>
              {/* Tombol Lanjutkan */}
              <button className="border-b-2 border-red-600 text-red-600 font-semibold dark:text-white">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
