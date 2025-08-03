import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSllers from "../components/BestSllers";
import Policy from "../components/Policy";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSllers />
      <Policy />
      <Subscribe />
    </div>
  );
};

export default Home;
