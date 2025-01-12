import React from "react";

export default function ProductCard({product}) {
  return (
    <div className="h-[70px] flex justify-between ml-[20px] w-11/12 bg-slate-100 rounded-lg mt-2 items-center p-2">
      <img src={product.company} className="w-[90px]" alt="" />
      <p className="font-bold text-xl"> ПВХ </p>
      <p className="font-bold text-xl"> L </p>
      <p className="font-bold text-xl"> 4 камеры </p>
      <span className="flex items-center justify-between">
        <img src={gold} className="w-[50px] h-[50px] rounded-full" alt="" />
        <p className="font-bold ml-4 text-xl"> Золотой дуб </p>{" "}
      </span>
      <p className="font-bold ml-4 text-xl"> 6 шт </p>
      <p className="font-bold ml-4 text-xl"> 125 см </p>{" "}
    </div>
  );
}
