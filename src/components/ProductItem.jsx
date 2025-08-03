import React, { useContext } from "react";
import { ShopContex } from "../contex/ShopContex";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContex);

  return (
    <Link to={`/product/${id}`} className="text-black cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="transition ease-in-out hover:scale-110 "
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
