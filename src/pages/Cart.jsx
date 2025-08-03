import { useContext, useEffect, useState } from "react";
import Tittle from "../components/Tittle";
import { ShopContex } from "../contex/ShopContex";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cart, products, currency, updatequantity, navigate } =
    useContext(ShopContex);
  const [data, setData] = useState([]);

  useEffect(() => {
    const temp = [];

    for (const items in cart) {
      for (const item in cart[items]) {
        if (cart[items][item] > 0) {
          temp.push({
            _id: items,
            size: item,
            quantity: cart[items][item],
          });
        }
      }
    }
    setData(temp);
  }, [cart]);
  return (
    <div className="border-b border-gray-200 pt-10 mt-4">
      <div className=" text-xl mb-3 sm:text-2xl">
        <Tittle text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {data.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-y mb-4 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} className="w-16 sm:w-20" />
                <div>
                  <p className="text-xs sm:text-md font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency} {productData.price}
                    </p>
                    <p className="bg-gray-200 py-1 px-3 rounded-sm">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                min={1}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updatequantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                defaultValue={item.quantity}
                className="border max-w-20 sm:max-w-30 px-1 sm:px-2 py-1"
              />
              <img
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                onClick={() => updatequantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-90 sm:w-{450px}">
          <CartTotal />
          <div className="text-end">
            <button
              className="bg-black text-white text-sm my-8 px-5 py-3"
              onClick={() => navigate("/placeorder")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
