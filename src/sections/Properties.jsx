import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
  FaPlus,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Properties = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className={`${darkMode ? "dark:bg-black" : "bg-transparent"} py-10`}>
      <section
        id="properties"
        className="lg:w-[90%] w-full m-auto lg:px-20 px-6 py-20 flex flex-col justify-center items-start gap-10"
      >
        {/* Header */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest
          </h1>
        </div>

        {/* Grid Properti */}
        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
        >
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md"
            >
              {/* Box Gambar */}
              <div
                id="image-box"
                className="relative h-64 w-full bg-cover bg-center rounded-t-xl"
                style={{
                  backgroundImage: `url(${item.images})`,
                }}
              >
                {/* Tombol Featured, Sales, Active */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-sm">
                    Featured
                  </button>
                  <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-sm">
                    Sales
                  </button>
                  <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-sm">
                    Active
                  </button>
                </div>

                {/* Informasi Lokasi & Ikon */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white">
                    <FaMapMarkerAlt />
                    <h1 className="text-sm">{item.address}</h1>
                  </div>
                  <div className="flex gap-2 text-white">
                    <FaVideo />
                    <FaCamera />
                  </div>
                </div>
              </div>

              {/* Informasi Properti */}
              <div className="p-6 flex flex-col gap-4">
                <h1 className="text-xl font-semibold text-black dark:text-white">
                  {item.name}
                </h1>
                <h1 className="text-2xl font-bold text-red-600 dark:text-white">
                  {item.price}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">{item.about}</p>

                {/* Detail Properti */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaBath className="text-red-400" />
                    <h1>{item.bath} Bath</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBed className="text-red-400" />
                    <h1>{item.bed} Bed</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdSpaceDashboard className="text-red-400" />
                    <h1>{item.area} sqft</h1>
                  </div>
                </div>

                <hr className="my-4" />

                {/* Informasi Pemilik */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-red-400" />
                    <h1 className="text-gray-700 dark:text-gray-300">
                      {item.owner}
                    </h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="p-2 border border-gray-300 hover:bg-black hover:text-white rounded-full">
                      <FaShareAlt />
                    </button>
                    <button className="p-2 border border-gray-300 hover:bg-black hover:text-white rounded-full">
                      <FaHeart />
                    </button>
                    <button className="p-2 border border-gray-300 hover:bg-black hover:text-white rounded-full">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
