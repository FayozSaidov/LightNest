import React from "react";

export default function ProductItem({ logo, material, profileType, chambers, colorImage, colorName, quantity, size }) {
  return (
    <div className="h-[70px] flex justify-between ml-[20px] w-11/12 bg-slate-100 rounded-lg mt-2 items-center p-2">
      <img src={logo} className="w-[90px]" alt="Logo" />
      <p className="font-bold text-xl">{material}</p>
      <p className="font-bold text-xl">{profileType}</p>
      <p className="font-bold text-xl">{chambers}</p>
      <span className="flex items-center justify-between">
        <img src={colorImage} className="w-[50px] h-[50px] rounded-full" alt="Color" />
        <p className="font-bold ml-4 text-xl">{colorName}</p>
      </span>
      <p className="font-bold ml-4 text-xl">{quantity}шт</p>
      <p className="font-bold ml-4 text-xl">{size}см</p>
    </div>
  );
}
