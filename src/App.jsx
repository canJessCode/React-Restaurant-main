import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NavIcon from "./components/NavIcon";
import React from "react";
import Recipe from "./components/Recipe";

const App = () => {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <NavIcon />
      <Home />
      <About />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
