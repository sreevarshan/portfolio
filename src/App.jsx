import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/root/Header.jsx";
import Footer from "./components/root/Footer.jsx";
import Landing from "./components/home/Landing.jsx";
import MoreAboutMe from "./components/home/more-about-me/MoreAboutMe.jsx";
import Contact from "./components/root/Contact.jsx";
import Fallback from "./components/root/Fallback.jsx";
import { Analytics } from "@vercel/analytics/react"

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/more-about-me" element={<MoreAboutMe />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Fallback />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
