import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
  const { darkMode } = useDarkMode(); // Memastikan darkMode diambil dari context

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
        className={`${
          darkMode ? "dark:bg-gray-800" : "bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        {/* Bagian Atas */}
        <div
          id="top"
          className="w-full grid lg:grid-cols-2 grid-cols-1 items-center gap-8"
        >
          <div>
            <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white"
            >
              Explore Most <br /> Popular Areas
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {/* Area 1 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area1})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            {/* Area 2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              style={{ backgroundImage: `url(${area2})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            {/* Area 3 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              style={{ backgroundImage: `url(${area3})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
          </div>
        </div>

        {/* Bagian Bawah */}
        <div
          id="bottom"
          className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
        >
          {/* Statistik 1 */}
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex flex-col justify-center items-center gap-2"
          >
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              5K
            </h1>
            <h2 className="text-gray-600 dark:text-gray-300 text-center">
              ACTIVE <br /> LISTINGS
            </h2>
          </div>
          {/* Statistik 2 */}
          <div
            data-aos="slide-up"
            data-aos-delay="400"
            className="flex flex-col justify-center items-center gap-2"
          >
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              10+
            </h1>
            <h2 className="text-gray-600 dark:text-gray-300 text-center">
              AREAS <br /> COVERED
            </h2>
          </div>
          {/* Statistik 3 */}
          <div
            data-aos="slide-up"
            data-aos-delay="600"
            className="flex flex-col justify-center items-center gap-2"
          >
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              1M
            </h1>
            <h2 className="text-gray-600 dark:text-gray-300 text-center">
              SATISFIED <br /> CUSTOMERS
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
