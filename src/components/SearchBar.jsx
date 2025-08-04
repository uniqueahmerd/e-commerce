import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContex } from "../contex/ShopContex";
import { useLocation } from "react-router-dom";

const SearchBar = React.memo(() => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContex);

  const location = useLocation();
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="bg-gray-100 text-center ">
      <div className="py-3 inline-flex justify-center border border-gray-300  px-5 w-3/4 sm:w-1/2  mx-3 my-5 rounded-full">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="outline-none inline-flex flex-1 bg-inherit"
        />
        <img src={assets.search_icon} width={25} loading="lazy" />
      </div>

      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        width={17}
        className="inline cursor-pointer"
        loading="lazy"
      />
    </div>
  ) : undefined;
});

export default SearchBar;
