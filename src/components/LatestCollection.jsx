import React, { useContext, useEffect, useState } from "react";
import { ShopContex } from "../contex/ShopContex";
import Tittle from "./Tittle";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContex);

  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Tittle text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-base md:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          laudantium maxime minus eligendi.
        </p>
      </div>
      {/* randering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            price={item.price}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
