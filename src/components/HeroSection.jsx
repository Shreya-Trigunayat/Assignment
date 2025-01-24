import React from "react";
import Navbar from '../components/navbar/Navbar';
import Frame from '../components/frame/Frame';
import Info from '../components/info/Info';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <Navbar/>
      <Frame/>
      <Info/>
    </section>
  );
};

export default HeroSection;