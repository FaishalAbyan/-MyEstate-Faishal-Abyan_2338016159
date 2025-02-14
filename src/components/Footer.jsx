import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Estate. All rights reserved.
        </p>
        <p className="text-xs mt-2">Faishal Abyan</p>
      </div>
    </footer>
  );
};

export default Footer;
