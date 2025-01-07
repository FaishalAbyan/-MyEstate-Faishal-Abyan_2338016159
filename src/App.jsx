import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import Hero from "./sections/Hero";
import Header from "./components/Header";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Header />
        <Routes>
          {/* Rute untuk setiap bagian */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/popular-areas" element={<PopularAreas />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </DarkModeProvider>
  );
};

export default App;
