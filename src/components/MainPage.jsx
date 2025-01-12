import React from "react";
import Search from "./Search";

import AkfaLogo from '@img/AkfaLogo-removebg-preview — копия.png'
import gold from '@img/золотой_дуб.jpg'

function MainPage() {
  return (
    <div className="w-[1100px] h-[2000px] min-h-[500px] pt-[50px] absolute top-[50px] right-0">
      <Search />
      <div className="w-11/12 flex items-center justify-between text-white h-[50px] bg-black ml-[20px] -mb-2 rounded-tl-lg rounded-tr-lg p-4">
        <p className="font-bold">Производ.</p>
        <p className="font-bold -ml-[60px]">Материал</p>
        <p className="font-bold -ml-[80px]">Тип</p>
        <p className="font-bold -ml-[70px]">Кол-во камер</p>
        <p className="font-bold">Цвет</p>
        <p className="font-bold -mr-[40px]">Кол-во</p>
        <p className="font-bold">Размер</p>
      </div>
      <div>
        <div className="h-[70px] mt-2 flex justify-between ml-[20px] w-11/12 bg-slate-100 rounded-lg items-center p-4">
          <img src={AkfaLogo} className="w-[90px]" alt="" />

          <p className="font-bold text-xl">ПВХ</p>

          <p className="font-bold text-xl">L</p>

          <p className="font-bold text-xl">4 камеры</p>

          <span className="flex items-center justify-between">
            <img src={gold} className="w-[50px] h-[50px] rounded-full" alt="" />
            <p className="font-bold ml-4 text-xl">Зол. дуб</p>
          </span>

          <p className="font-bold ml-4 text-xl">6шт</p>

          <p className="font-bold ml-4 text-xl">125см</p>
        </div>
        <div className="h-[70px] flex justify-between ml-[20px] mt-2 w-11/12 bg-slate-100 rounded-lg items-center p-4">
          <img src={AkfaLogo} className="w-[90px]" alt="" />

          <p className="font-bold text-xl">ПВХ</p>

          <p className="font-bold text-xl">L</p>

          <p className="font-bold text-xl">4 камеры</p>

          <span className="flex items-center justify-between">
            <img src={gold} className="w-[50px] h-[50px] rounded-full" alt="" />
            <p className="font-bold ml-4 text-xl">Зол. дуб</p>
          </span>

          <p className="font-bold ml-4 text-xl">6шт</p>

          <p className="font-bold ml-4 text-xl">125см</p>
        </div>

      </div>
    </div>
  );
}

export default MainPage;
