import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_4mw2djn", // Your EmailJS service ID
        "template_e9yl3a7", // Your EmailJS template ID
        formData,
        "27uLUBe0KBZZsuJIv" // Your EmailJS user ID (public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Email sent successfully.");
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send email.");
        }
      );
  };

  return (
    <div className={`${darkMode ? "dark:bg-black" : "light:bg-transparent"} pb-20`}>
      <section
        id="contact"
        className={`${
          darkMode ? "dark:bg-gray-800" : "light:bg-red-100"
        } lg:w-4/5 md:w-11/12 w-full m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-12 px-6 py-16 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl shadow-lg w-full"
        >
          <h1 className="text-2xl text-black font-semibold dark:text-white">
            Send us a message today
          </h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name Here"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Valid Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <input
              type="number"
              name="phone"
              placeholder="Enter Your Valid Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer"
            >
              SEND EMAIL
            </button>
          </form>
          {message && <p className="text-center mt-4 text-xl text-green-500">{message}</p>}
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6 w-full">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white text-lg font-medium"
          >
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-3xl font-semibold leading-10 dark:text-white"
          >
            Discover Your Dream Property with My Estate
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-xl text-gray-600 text-justify dark:text-white"
          >
            At My Estate, we offer a wide range of properties to suit your needs. Whether you're looking for a cozy apartment in the city or a spacious house in the suburbs, we have something for everyone. Our team is dedicated to helping you find the perfect home. Contact us today and start your journey to finding your dream property.
          </p>
          <button className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
