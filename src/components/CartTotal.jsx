import React, { useContext, lazy, Suspense } from "react";
import { ShopContex } from "../contex/ShopContex";
const Tittle = lazy(() => import("./Tittle"));

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContex);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Suspense fallback={<div>Loading title...</div>}>
          <Tittle text1={"CART"} text2={"TOTAL"} />
        </Suspense>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {getCartAmount() === 0 ? 0 : delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
