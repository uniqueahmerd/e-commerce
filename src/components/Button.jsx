import React, { Suspense } from "react";

const Button = ({ label, type, children }) => {
  return (
    <div>
      <button className="bg-black text-white py-4.5 px-3.5" type={type}>
        {label}
        {children && (
          <Suspense fallback={<span>Loading...</span>}>
            {children}
          </Suspense>
        )}
      </button>
    </div>
  );
};

export default Button;
