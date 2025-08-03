import React from "react";

const Button = ({ label, type }) => {
  return (
    <div>
      <button className="bg-black text-white py-4.5 px-3.5" type={type}>
        {label}
      </button>
    </div>
  );
};

export default Button;
