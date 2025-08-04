import React, { lazy, Suspense } from "react";
import { assets } from "../assets/assets";

// Lazy load image blocks as components
const ExchangeIcon = lazy(() => Promise.resolve({
  default: () => <img src={assets.exchange_icon} alt="exchange" width={60} />
}));
const QualityIcon = lazy(() => Promise.resolve({
  default: () => <img src={assets.quality_icon} alt="quality" width={50} />
}));
const SupportImg = lazy(() => Promise.resolve({
  default: () => <img src={assets.support_img} alt="support" width={50} />
}));

const Policy = () => {
  return (
    <div className="flex flex-col gap-12 sm:flex-row sm:justify-around items-center mt-30">
      <div className="flex flex-col gap-5 justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <ExchangeIcon />
        </Suspense>
        <div className="flex flex-col items-center gap-1">
          <p className="font-semibold text-lg m">Easy Exchange Policy</p>
          <p className="text-gray-600 "> We offer hassle free exchange</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <QualityIcon />
        </Suspense>
        <div className="flex flex-col items-center gap-1">
          <p className="font-semibold text-lg">7 Days Return Policy</p>
          <p className="text-gray-600">We provide 7days free return policy</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <SupportImg />
        </Suspense>
        <div className="flex flex-col items-center gap-1">
          <p className="font-semibold text-lg">Best customer support</p>
          <p className="text-gray-600"> We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
