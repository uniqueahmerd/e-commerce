import { useContext, useEffect, useState, lazy, Suspense } from "react";
import { ShopContex } from "../contex/ShopContex";
const Tittle = lazy(() => import("./Tittle"));
const ProductItem = lazy(() => import("./ProductItem"));

const BestSllers = () => {
  const { products } = useContext(ShopContex);

  const [Bestseller, setBestseller] = useState([]);

  useEffect(() => {
    const bestItem = products.filter((item) => item.bestseller);
    setBestseller(bestItem.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Suspense fallback={<div>Loading title...</div>}>
          <Tittle text1={"BEST"} text2={"SELLERS"} />
        </Suspense>
        <p className="w-3/4 m-auto text-xs sm:text-base md:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          laudantium maxime minus eligendi.
        </p>
      </div>
      {/* rendering the bestseller product */}
      <Suspense fallback={<div>Loading products...</div>}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 gap-y-6">
          {Bestseller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default BestSllers;
