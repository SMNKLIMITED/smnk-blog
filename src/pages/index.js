"use client";

import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <Navbar/>
      <HeroSection />
      <Features/>
      <Services/>
      <Subscribe/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
