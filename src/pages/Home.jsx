import React, { Suspense, lazy } from "react";

const Hero = lazy(() => import("../components/Hero"));
const LatestCollection = lazy(() => import("../components/LatestCollection"));
const BestSllers = lazy(() => import("../components/BestSllers"));
const Policy = lazy(() => import("../components/Policy"));
const Subscribe = lazy(() => import("../components/Subscribe"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <LatestCollection />
      <BestSllers />
      <Policy />
      <Subscribe />
    </Suspense>
  );
};

export default Home;
