import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <nav className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-white">My Estate</h1>

        {/* Navigasi */}
        <ul className="flex justify-center gap-8">
          <li>
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/popular-areas"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Popular Areas
            </Link>
          </li>
          <li>
            <Link
              to="/properties"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/clients"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
