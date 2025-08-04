import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./components/ErrorBoundary";

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const SearchBar = lazy(() => import("./components/SearchBar"));

const Home = React.lazy(() => import("./pages/Home"));
const Collection = React.lazy(() => import("./pages/Collection"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Products = React.lazy(() => import("./pages/Products"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Login = React.lazy(() => import("./pages/Login"));
const PlaceOrder = React.lazy(() => import("./pages/PlaceOrder"));
const Orders = React.lazy(() => import("./pages/Orders"));
const App = () => {
  //lg:px-[8vw]
  return (
    <main className="px-4 sm:px-[4vw] md:px-[6vw]  lg:mx-16">
      <ToastContainer />
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading SearchBar...</div>}>
        <SearchBar />
      </Suspense>
      <ErrorBoundary>
        <Suspense fallback={<div role="status" aria-live="polite">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
