import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Hero from "./sections/Hero";
import Header from "./components/Header";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contact />
      </DarkModeProvider>
    </>
  );
};

export default App;
