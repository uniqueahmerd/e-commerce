import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import { ShopContex } from "../contex/ShopContex";
const ProductItem = lazy(() => import("../components/ProductItem"));

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContex);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-14">
      <Suspense fallback={<div>Loading related products...</div>}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {related.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default RelatedProducts;
