import AkfaLogo from "../img/AkfaLogo-removebg-preview.png";
import EngelbergLogo from "../img/engelberg-01.png";
import AlutexLogo from "../img/alutextLogo-removebg-preview.png";
import AlubestLogo from "../img/alubestlogo-removebg-preview.png";
import AltaPlastLogo from "../img/article-original-removebg-preview.png";
import MokkoColor from "../img/мокко.jpg";
import NutColor from "../img/орех.jpg";
import GoldenOakColor from "../img/золотой_дуб.jpg";
import AnthraciteColor from "../img/ антрацит.jpg";
import ScheifeliOakColor from "../img/шейфель.jpg";
import EkopenLogo from "../img/ekopenLogo.png";
import ImzoLogo from "../img/imzo_akfa-01.png";
import Select from "react-select";
import React, { useState } from "react";

export default function ModalForm() {
  const [selectedType, setSelectedType] = useState(null);

  const companies = [
    {
      value: "Akfa",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <img src={AkfaLogo} className="w-[70px] h-[20] mr-[10px]" alt="" />
          <p className="font-bold text-xl">Akfa</p>
        </div>
      ),
    },
    {
      value: "AkfaThermo",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <img src={AkfaLogo} className="w-[70px] h-[20] mr-[10px]" alt="" />
          <p className="font-bold text-xl">Akfa Thermo</p>
        </div>
      ),
    },
    {
      value: "Alutex",
      label: (
        <div className="flex items-center w-full h-[30px]">
          <img src={AlutexLogo} className="w-[70px] h-[20] mr-[10px]" alt="" />
          <p className="font-bold text-xl">Alutex</p>
        </div>
      ),
    },
    {
      value: "Alubest",
      label: (
        <div className="flex items-center w-full h-[30px]">
          <img src={AlubestLogo} className="w-[70px] h-[20] mr-[10px]" alt="" />
          <p className="font-bold text-xl">Alubest</p>
        </div>
      ),
    },
    {
      value: "AltaPlast",
      label: (
        <div className="flex items-center w-full h-[30px]">
          <img
            src={AltaPlastLogo}
            className="w-[70px] h-[20] mr-[10px]"
            alt=""
          />
          <p className="font-bold text-xl">Alta Plast</p>
        </div>
      ),
    },
    {
      value: "Imzo",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <img src={ImzoLogo} className="w-[70px] h-[20] mr-[10px]" alt="" />
          <p className="font-bold text-xl">Imzo</p>
        </div>
      ),
    },
    {
      value: "Engelberg",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <img
            src={EngelbergLogo}
            className="w-[70px] h-[20] mr-[10px]"
            alt=""
          />
          <p className="font-bold text-xl">Engelberg</p>
        </div>
      ),
    },

    {
      value: "Ekopen",
      label: (
        <div className="flex items-center w-full h-[30px]">
          <img src={EkopenLogo} className="w-[70px] h-[20] mr-[10px]" alt="" />
          <p className="font-bold text-xl">Ekopen</p>
        </div>
      ),
    },
  ];

  const types = [
    {
      value: "L",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <p className="font-bold text-2xl font-ANVYL ml-9">L</p>
        </div>
      ),
    },
    {
      value: "T",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <p className="font-bold text-2xl font-ANVYL ml-9">T</p>
        </div>
      ),
    },
    {
      value: "Z",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <p className="font-bold text-2xl font-ANVYL ml-9">Z</p>
        </div>
      ),
    },
    {
      value: "shtapik2",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <p className="font-bold text-xl">Штапик для пакетных стекол</p>
        </div>
      ),
    },
    {
      value: "shtapik1",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <p className="font-bold text-xl">Штапик для одинарных стекол</p>
        </div>
      ),
    },
    {
      value: "podok",
      label: (
        <div className="flex items-center  w-full h-[30px]">
          <p className="font-bold text-xl">Подоконник</p>
        </div>
      ),
    },
  ];

  const sillWidth = [
    { value: "25cm", label: "25 см" },
    { value: "35cm", label: "35 см" },
    { value: "40cm", label: "40 см" },
    { value: "45cm", label: "45 см" },
  ];

  const colors = [
    {
      value: "white",
      label: (
        <div className="flex items-center  w-full h-[40px]">
          <div
            className="w-[40px] border border-gray-200  h-[40px] rounded-full mr-[10px]"
            alt=""
          />
          <p className="font-bold text-xl">Белый</p>
        </div>
      ),
    },
    {
      value: "mokko",
      label: (
        <div className="flex items-center  w-full h-[40px]">
          <img
            src={MokkoColor}
            className="w-[40px] h-[40px] rounded-full mr-[10px]"
            alt=""
          />
          <p className="font-bold text-xl">Мокко</p>
        </div>
      ),
    },
    {
      value: "nut",
      label: (
        <div className="flex items-center  w-full h-[40px]">
          <img
            src={NutColor}
            className="w-[40px] h-[40px] rounded-full mr-[10px]"
            alt=""
          />
          <p className="font-bold text-xl">Орех</p>
        </div>
      ),
    },
    {
      value: "oak",
      label: (
        <div className="flex items-center  w-full h-[40px]">
          <img
            src={GoldenOakColor}
            className="w-[40px] h-[40px] rounded-full mr-[10px]"
            alt=""
          />
          <p className="font-bold text-xl">Золотой дуб</p>
        </div>
      ),
    },
    {
      value: "Anthracite",
      label: (
        <div className="flex items-center  w-full h-[40px]">
          <img
            src={AnthraciteColor}
            className="w-[40px] h-[40px] rounded-full mr-[10px]"
            alt=""
          />
          <p className="font-bold text-xl">Антроцит</p>
        </div>
      ),
    },
    {
      value: "ScheifeliOakColor",
      label: (
        <div className="flex items-center  w-full h-[40px]">
          <img
            src={ScheifeliOakColor}
            className="w-[40px] h-[40px] rounded-full mr-[10px]"
            alt=""
          />
          <p className="font-bold text-xl">Шейфельский дуб</p>
        </div>
      ),
    },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: "50px", // Увеличение высоты дефолтного поля
      padding: "5px", // Дополнительный отступ внутри поля
    }),
  };

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption.value);
  };

  return (
    <div className="mt-[1200px] ml-[600px] w-[600px] min-h-[700px] h-fit bg-gray-100 border border-gray-200 rounded-lg p-7">
      <p className="font-bold text-xl mb-[10px] mt-[50px]">
        Выберите производителя:
      </p>
      <Select options={companies} styles={customStyles} />

      <p className="font-bold text-xl mb-[10px] mt-[30px]">
        Выберите тип профиля:
      </p>
      <Select
        options={types}
        styles={customStyles}
        onChange={handleTypeChange}
      />

      {selectedType === "podok" && (
        <>
          <p className="font-bold text-xl mb-[10px] mt-[30px]">
            Выберите ширину подоконника:
          </p>
          <Select options={sillWidth} styles={customStyles} />
        </>
      )}

      <p className="font-bold text-xl mb-[10px] mt-[30px]">Выберите цвет:</p>
      <Select options={colors} styles={customStyles} />
    </div>
  );
}
