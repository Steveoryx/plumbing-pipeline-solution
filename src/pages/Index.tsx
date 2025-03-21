
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import Emergency from "@/components/home/Emergency";
import Booking from "@/components/home/Booking";
import ReviewTable from "@/components/home/ReviewTable";

const Index = () => {
  useEffect(() => {
    // Scroll to the top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero />
        <Services />
        <About />
        <Emergency />
        <Testimonials />
        <ReviewTable />
        <Booking />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
