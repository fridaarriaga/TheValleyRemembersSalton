import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutSaltonSea from "./components/AboutSaltonSea";
import VoicesSection from "./components/VoicesSection";
import Data from "./components/Data";
import AboutFrida from "./components/AboutFrida"



export default function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ paddingTop: "80px" }}> {/* Push content down so navbar doesn't overlap */}
        <Routes>
          <Route path="/" element={<AboutSaltonSea />} />
          <Route path="/voices" element={<VoicesSection />} />
          <Route path = "/data" element= {<Data/>} />
          <Route path = "/learn" element= {<AboutFrida/>} />

        </Routes>
      </div>
      <footer style={{ textAlign: "center", padding: "1rem", backgroundColor: "#f0f0f0" }}>
        © {new Date().getFullYear()} Frida Arriaga. All rights reserved.
      </footer>
    </Router>
  );
}
