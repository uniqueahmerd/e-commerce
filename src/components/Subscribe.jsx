import React from "react";
import Button from "./Button";

const Subscribe = () => {
  const onSubmitHander = () => {
    event.preventDefault();
  };

  return (
    <div className="mt-32 ">
      <p className="font-semibold text-[30px] sm:text-3xl text-center mb-5">
        Subscribe now & get 20% off
      </p>
      <p className="w-3/4 m-auto text-xs sm:text-base text-center md:text-base text-gray-500 mb-7">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
        laudantium maxime minus eligendi.
      </p>
      <form
        onSubmit={onSubmitHander}
        className=" flex justify-center items-center"
      >
        <input
          type="email"
          placeholder="subscribe@forever.com"
          required
          className="border border-gray-500 outline-none py-4 px-3 w-[58%]"
        />
        <div>
          <Button label={"Subscribe"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
