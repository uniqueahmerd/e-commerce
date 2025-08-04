import React, { useContext, lazy, Suspense } from "react";
import { ShopContex } from "../contex/ShopContex";
const Tittle = lazy(() => import("../components/Tittle"));

const Orders = () => {
  const { lastOrder, products, currency } = useContext(ShopContex);

  // Helper to get product details by ID
  const getProductById = (id) => products.find((p) => p._id === id);

  return (
    <div className="border-t border-gray-200 pt-10 mt-4">
      <div className=" text-xl mb-3 sm:text-2xl">
        <Suspense fallback={<div>Loading title...</div>}>
          <Tittle text1={"MY"} text2={"ORDERS"} />
        </Suspense>
      </div>
      <div className="mt-8">
        {lastOrder &&
        lastOrder.items &&
        Object.keys(lastOrder.items).length > 0 ? (
          <>
            {Object.entries(lastOrder.items).map(([productId, sizes]) => {
              const product = getProductById(productId);
              return Object.entries(sizes).map(([size, quantity]) => (
                <div
                  key={productId + size}
                  className="py-4 flex max-sm:flex-col  gap-4 border-y mb-4 border-gray-200 items-center"
                >
                  {/* Product Details (Left) */}
                  {product && (
                    <div className="flex flex-row gap-5 sm:items-center w-full justify-center sm:justify-start">
                      <div className="flex-shrink-0 flex justify-center sm:block">
                        <img
                          src={product.image[0]}
                          alt={product.name}
                          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded mb-2 sm:mb-0"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <p className="font-bold text-lg sm:text-base">
                          {product.name}
                        </p>
                        <div className="flex flex-wrap sm:gap-2 gap-1 text-sm sm:text-base">
                          <p>
                            Price: {currency} {product.price}
                          </p>
                          <p>
                            Quantity: <span className="text-gray-400">{quantity}pcs</span>
                          </p>
                          <p>
                            Size: <span className="text-gray-400">{size}</span>
                          </p>
                        </div>
                        <div className="flex flex-wrap sm:gap-4 gap-1 text-xs sm:text-sm ">
                          <p>
                            Date: <span className="text-gray-400">{lastOrder.date}</span>
                          </p>
                          <p>
                            Payment: <span className="text-gray-400">{lastOrder.paymentMethod}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Order Placed (Middle) & Track Order (Right) */}
                  <div className="flex flex-row items-center justify-center sm:justify-between w-full  sm:gap-0 gap-4">
                    <div className="flex items-center gap-2 justify-center">
                      <p
                        className="border-gray-500 border w-2 p-2 rounded-full bg-green-400"
                        aria-label="Order placed status"
                      ></p>
                      <span className="text-xs sm:text-sm">Order Placed</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="border px-4 py-2 rounded hover:bg-black cursor-pointer hover:text-white duration-500 text-xs sm:text-sm">
                        Track Order
                      </p>
                    </div>
                  </div>
                </div>
              ));
            })}
          </>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
