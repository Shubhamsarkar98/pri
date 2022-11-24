import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import EndProduct from "./components/EndProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Latest from "./components/Latest";
import Product from "./components/Product";
import Sliders from "./components/Sliders";

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Sliders/>
    <Product/>
    <EndProduct/>
    <Latest/>
    <Footer/>
    </>
  );
}

export default App;
