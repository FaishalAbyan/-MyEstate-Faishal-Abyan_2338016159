import React, { useEffect } from "react";
import heroimg from "../assets/images/hero1.webp"; // Nama variabel sesuai dengan gambar yang diimpor
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div>
      <section
        id="about"
        className={`${
          darkMode ? "dark:bg-black" : "bg-transparent"
        } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 items-center gap-10`}
      >
        {/* Gambar */}
        <div>
          <img
            data-aos="zoom-in"
            src={heroimg} // Menggunakan variabel gambar yang diimpor
            alt="about image"
            className="rounded-2xl lg:w-[500px] lg:h-[600px]"
          />
        </div>

        {/* Konten Teks dan Tombol */}
        <div className="flex flex-col justify-center items-start gap-8">
          <h1
            data-aos="zoom-in"
            className="text-red-500 dark:text-white text-xl font-bold"
          >
            WHO ARE WE
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-xl text-gray-600 dark:text-white text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            voluptatibus? Velit blanditiis mollitia at animi dicta. Recusandae
            eaque harum quam, ullam voluptates dolore officia in.
          </p>
          <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-fit text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
            READ MORE
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
