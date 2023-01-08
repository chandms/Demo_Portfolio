import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
