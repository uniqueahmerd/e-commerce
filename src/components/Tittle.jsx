import React from "react";


const Tittle = React.memo(({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-1 items-center mb-2">
      <p className="text-gray-500">
        {text1} <span className="text-black font-medium">{text2}</span>
      </p>
      <p className="h-[1px] sm:w-11 sm:h-[2px] w-8 bg-black"></p>
    </div>
  );
});

export default Tittle;
