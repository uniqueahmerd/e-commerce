import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import { assets } from "../assets/assets";
import { ShopContex } from "../contex/ShopContex";
const Tittle = lazy(() => import("../components/Tittle"));
const ProductItem = lazy(() => import("../components/ProductItem"));

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContex);
  const [filter, setFilter] = useState(false);
  const [allCollection, setAllCollection] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (event) => {
    if (category.includes(event.target.value)) {
      setCategory((prevArr) =>
        prevArr.filter((item) => item !== event.target.value)
      );
    } else {
      setCategory((prevArr) => [...prevArr, event.target.value]);
    }
  };
  const toggleSubCategory = (event) => {
    if (subCategory.includes(event.target.value)) {
      setSubCategory((prevArr) =>
        a.filter((item) => item !== event.target.value)
      );
    } else {
      setSubCategory((prevArr) => [...prevArr, event.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setAllCollection(productsCopy);
  };

  const sort = () => {
    let copy = allCollection.slice();

    switch (sortType) {
      case "high-low":
        setAllCollection(copy.sort((a, b) => b.price - a.price));
        break;
      case "low-high":
        setAllCollection(copy.sort((a, b) => a.price - b.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sort();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-12 border-t border-gray-300 pt-10 mt-4">
      {/* filter section */}
      <div className="min-w-60">
        <p
          className="text-xl flex gap-2 items-center"
          onClick={() => setFilter(!filter)}
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-4 sm:hidden ${filter ? "rotate-90" : ""}`}
          />
        </p>
        {/* cartegory filter */}
        <div
          className={`border border-gray-300 mt-7 py-3 pl-5 lg:block ${
            filter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 font-medium text-xl">CATEGORIES</p>
          <p className="flex gap-1.5 items-center text-base text-gray-500 pb-1.5">
            <input type="checkbox" value={"Men"} onChange={toggleCategory} />
            Men
          </p>
          <p className="flex gap-1.5 items-center text-base text-gray-500 pb-1.5">
            <input type="checkbox" value={"Women"} onChange={toggleCategory} />
            Women
          </p>
          <p className="flex gap-1.5 items-center text-base text-gray-500 pb-1.5">
            <input type="checkbox" value={"Kids"} onChange={toggleCategory} />
            Kids
          </p>
        </div>
        {/* sub categoty filter */}
        <div
          className={`border border-gray-300 mt-7 mb-5 py-3 pl-5 lg:block ${
            filter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 font-medium text-xl">TYPE</p>
          <p className="flex gap-1.5 items-center text-base text-gray-500 pb-1.5">
            <input
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />
            Topwear
          </p>
          <p className="flex gap-1.5 items-center text-base text-gray-500 pb-1.5">
            <input
              type="checkbox"
              value={"Bottomwear"}
              onChange={toggleSubCategory}
            />
            Bottomwear
          </p>
          <p className="flex gap-1.5 items-center text-base text-gray-500 pb-1.5">
            <input
              type="checkbox"
              value={"Winterwear"}
              onChange={toggleSubCategory}
            />
            Winterwear
          </p>
        </div>
      </div>

      {/* right side */}

      <div className="flex-1">
        <div className="text-center sm:text-2xl text-xl flex justify-between sm:flex-row flex-col items-center">
          <Suspense fallback={<div>Loading title...</div>}>
            <Tittle text1={"ALL"} text2={"Collection"} />
          </Suspense>
          {/* product sort */}
          <select
            onChange={(event) => setSortType(event.target.value)}
            className="text-base border border-gray-500 p-3 mb-6"
          >
            <option value="relevant">Sort by:Relevant</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to low</option>
          </select>
        </div>

        {/* maping the products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          <Suspense fallback={<div>Loading products...</div>}>
            {allCollection.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Collection;
