import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/Pages/About";
import Pricing from "./components/Pages/Pricing";
import Contact from "./components/Pages/Contact";
import Cart from "./components/Home/Cart";
import PrivacyPolicy from "./components/Pages/Privacy";
import Terms from "./components/Pages/Terms";
import ScrollToTop from "./components/ScrollOnTop";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          {/* 
          
         
          <Route path="/services" element={<Services />} />
          */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
