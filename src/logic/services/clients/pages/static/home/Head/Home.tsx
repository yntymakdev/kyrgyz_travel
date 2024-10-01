import React from "react";
import Welcome from "../Welcome/Welcome";
import SectionHome from "../SectionHome/SectionHome";
import { Car } from "lucide-react";
import Cart from "../Cart/Cart";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <br />/
      <br />
      <br />
      <br />
      <br />
      <Welcome />/
      <SectionHome />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Cart />
    </div>
  );
};

export default Home;
