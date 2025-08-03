import { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, Links, NavLink, useLocation } from "react-router-dom";
import { ShopContex } from "../contex/ShopContex";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { setShowSearch, showNav, setShowNav, getCount } =
    useContext(ShopContex);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("login")) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  return showNav ? (
    <nav className="flex justify-between items-center py-5 font-medium ">
      <Link to={"/"}>
        {" "}
        <img src={assets.logo} alt="logo" className="w-38" />{" "}
      </Link>

      <ul className="sm:flex gap-6 hidden ">
        <NavLink to="/" className="flex flex-col items-center ">
          <p>HOME</p>
          <hr className="w-2/4 h-[2px] bg-black border-none hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center ">
          <p>COLLECTION</p>
          <hr className="w-2/4 h-[2px] bg-black border-none hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center ">
          <p>ABOUT</p>
          <hr className="w-2/4 h-[2px] bg-black border-none hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <p>CONTACT</p>
          <hr className="w-2/4 h-[2px] bg-black border-none hidden" />
        </NavLink>
      </ul>

      <div className="flex gap-4 sm:gap-6 items-center">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="search"
          className="w-7 cursor-pointer"
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile"
            className="w-7 cursor-pointer"
          />
          <div className="hidden group-focus:block sm:group-hover:block absolute right-0 pt-5">
            <div className="w-36 flex flex-col gap-2 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <NavLink to="/orders" className="cursor-pointer hover:text-black">
                <p> Orders</p>
              </NavLink>
              <NavLink to="/login" className="cursor-pointer hover:text-black">
                <p>Logout</p>
              </NavLink>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-7" />
          <p className="bg-black p-1 leading-3 aspect-square text-white text-center rounded-full absolute -right-2 bottom-[-5px] text-[12px]">
            {getCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="menu_icon"
          className="cursor-pointer w-7 sm:hidden"
          onClick={() => setToggle(true)}
        />
      </div>
      {/* navbar for smaller device  */}
      <div
        className={`z-10 absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${
          toggle ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col justify-center ">
          <div
            onClick={() => setToggle(false)}
            className="flex items-center gap-2 pt-5 pl-2 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          <div className="flex flex-col items-start gap-1 text-lg pt-9">
            <NavLink
              to="/"
              onClick={() => setToggle(false)}
              className="py-3 pl-2 rounded-lg"
            >
              HOME
            </NavLink>
            <NavLink
              to="/collection"
              onClick={() => setToggle(false)}
              className="py-3 pl-2 rounded-lg"
            >
              COLLECTION
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setToggle(false)}
              className="py-3 pl-2 rounded-lg"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setToggle(false)}
              className="py-3 pl-2 rounded-lg"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  ) : null;
};

export default Navbar;
