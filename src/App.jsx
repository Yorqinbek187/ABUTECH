import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./conponents/Footer/Footer";
import Header from "./conponents/Header/Header";
import "./App.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <>
      <Header />
      <Footer/>
    </>
  );
}

export default App;