import { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { ShopContex } from "../contex/ShopContex";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { showFooter, setShowFooter } = useContext(ShopContex);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("login")) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return showFooter ? (
    <footer className="my-10 mt-36">
      <div className="flex flex-col gap-5 sm:grid grid-cols-[3fr_1fr_1fr] ">
        <div className=" max-w-lg">
          <img src={assets.logo} alt="logo" className="w-35 mb-8" />
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            debitis, corrupti illum et nihil hic architecto expedita voluptates
            sunt ut asperiores, nisi sed aut. Illo voluptates doloremque, eum,
            facere deserunt
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-2xl mb-5">COMPANY</h2>
          <ul className="text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-2xl mb-5">GET IN TOUCH</h2>
          <p className="text-base text-gray-700">+234-706 466 2285</p>
          <p className="text-base text-gray-700">ahmadusman1809@gmail.com</p>
        </div>
      </div>
      <hr className="text-gray-300 my-6" />
      <p className="text-gray-600 text-center">
        Copyright 2025 &copy; forever.com
      </p>
    </footer>
  ) : null;
};

export default Footer;
