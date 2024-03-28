import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Loader from "./fragments/Loader";
import AboutUs from "./components/AboutUs";
import WhyChoose from "./components/WhyChoose";
import HowItWorks from "./components/HowItWorks";
import FAQAccordion from "./components/FAQs";
import ChoosePlans from "./components/ChoosePlans";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import QuickSearch from "./components/QuickSearch";
import Cards from "./components/Cards";


const page = () => {
  return (
    <div className="smooth relative w-full">
      <QuickSearch />
      <Loader />
      <div className=" animate-scale smooth w-full ">
        <Navbar />
        <Hero />
      </div>
      <div className="w-full smooth animate-scale pt-10">
        <AboutUs />
        <WhyChoose />
        <HowItWorks />
        <FAQAccordion />
        <Cards />
        <ChoosePlans />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default page;
