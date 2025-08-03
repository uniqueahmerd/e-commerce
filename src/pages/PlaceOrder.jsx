import React, { useContext } from "react";
import Tittle from "../components/Tittle";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContex } from "../contex/ShopContex";

const PlaceOrder = () => {
  const { navigate, cart, placeOrder, paymentMethod, setPaymentMethod } =
    useContext(ShopContex);

  const handlePlaceOrder = () => {
    placeOrder(cart);
    navigate("/orders");
  };

  return (
    <div className="flex-col sm:flex-row flex justify-between border-gray-300 gap-4 border-t pt-5 mt-4 sm:pt-14 min-h-[80vh] ">
      {/*-----left side --------*/}

      <div className=" flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3">
          <Tittle text1={"DELIVERY"} text2={"INFO"} />
        </div>

        <div className="flex gap-3">
          <div className="">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm"
            />
          </div>
        </div>
        <div className="flex  gap-3  ">
          <div className="">
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 py-1.5 px-3.5 rounded w-[96%] max-sm:w-full"
        />
        <div className="flex gap-3 ">
          <div className="">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Zip-Code"
              className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="">
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Country"
              className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Tittle text1={"PAYMENT"} text2={"METHOD"} />{" "}
        </div>

        <div className="flex gap-3 flex-col lg:flex-row mb-5">
          <div
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded"
            onClick={() => setPaymentMethod("Stripe")}
          >
            <p
              className={`border-gray-500 border w-2 p-2 rounded-full ${
                paymentMethod === "Stripe" ? "bg-green-400" : ""
              } `}
            ></p>
            <img src={assets.stripe_logo} className="h-5" />
          </div>
          <div
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded"
            onClick={() => setPaymentMethod("Razor")}
          >
            <div
              className={`border-gray-500 border w-2 p-2 rounded-full ${
                paymentMethod === "Razor" ? "bg-green-400" : ""
              } `}
            ></div>
            <img src={assets.razorpay_logo} className="h-5" />
          </div>
          <div
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded"
            onClick={() => setPaymentMethod("COD")}
          >
            <div
              className={`border-gray-500 border w-2 p-2 rounded-full ${
                paymentMethod === "COD" ? "bg-green-400" : ""
              } `}
            ></div>
            <p>CASH ON DELIVERY</p>
          </div>
        </div>
        <div className="text-end ">
          <button
            onClick={() => handlePlaceOrder()}
            className="bg-black text-white text-sm  px-5 py-3"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
