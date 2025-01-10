import React from "react";
import Search from "./Search";

import AkfaLogo from "@img/AkfaLogo-removebg-preview.png";
import EngelbergLogo from "@img/engelberg-01.png";
import AlutexLogo from "@img/alutextLogo-removebg-preview.png";
import AlubestLogo from "@img/alubestlogo-removebg-preview.png";
import AltaPlastLogo from "@img/article-original-removebg-preview.png";
import EkopenLogo from "@img/ekopenLogo.png";
import ImzoLogo from "@img/imzo_akfa-01.png";

import MokkoColor from "@img/мокко.jpg";
import NutColor from "@img/орех.jpg";
import gold from "@img/золотой_дуб.jpg";
import AnthraciteColor from "@img/ антрацит.jpg";
import ScheifeliOakColor from "@img/шейфель.jpg";

function MainPage() {
  return (
    <div className="w-[1100px] h-[2000px] min-h-[500px] pt-[50px] absolute top-[50px] right-0">
      <Search />
      <div className="mt-[20px]">
        <div className="h-[70px] flex justify-between ml-[20px] w-11/12 bg-slate-100 rounded-lg mt-2 items-center p-2">
          <img src={AkfaLogo} className="w-[90px]" alt="" />

          <p className="font-bold text-xl">ПВХ</p>

          <p className="font-bold text-xl">L</p>

          <p className="font-bold text-xl">4 камеры</p>

          <span className="flex items-center justify-between">
            <img src={gold} className="w-[50px] h-[50px] rounded-full" alt="" />
            <p className="font-bold ml-4 text-xl">Золотой дуб</p>
          </span>

          <p className="font-bold ml-4 text-xl">6шт</p>

          <p className="font-bold ml-4 text-xl">125см</p>
        </div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
        <div className="h-[70px] ml-[20px] w-11/12 bg-slate-200 opacity-50 rounded-lg mt-2"></div>
      </div>
    </div>
  );
}

export default MainPage;
