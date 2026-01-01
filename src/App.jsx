import {useState, useEffect} from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Reviews from "./components/Reviews";
import About from "./components/About";
import AboutFounder from "./components/AboutFounder";
import Community from "./components/Community";
import Location from "./components/Location";
import Products from "./components/Products";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
        <div className="page-container">
          <Header />
          <Hero />
          <About />
          <Products />
          <Reviews />
          <Community />
          <ContactForm />
          <Location />
          <AboutFounder />
          <Footer />
        </div>
  );
}
