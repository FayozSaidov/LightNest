import Select from "react-select";
import React, { useState } from "react";
import companies from "./Companies";
import colors from "./Colors.jsx";
import types from "./Types.jsx";
import Logo from "@img/Logo.png";
import Close from "@img/close.png";
import { addList } from "./addingListFunc";

export default function ModalForm() {
  const [selectedType, setSelectedType] = useState({
    material: null,
    types: null,
    selectedQuanCam: null,
    selectedSillWidth: null,
  });

  const sillWidth = [
    { value: "25cm", label: "25 см" },
    { value: "35cm", label: "35 см" },
    { value: "40cm", label: "40 см" },
    { value: "45cm", label: "45 см" },
  ];

  const quanCam = [
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const material = [
    { value: "Alumin", label: "Алюминий" },
    { value: "plast", label: "ПВХ" },
    { value: "thermo", label: "Thermo" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: "50px",
      padding: "5px",
    }),
  };

  const handleMaterialChange = (selectedOption) => {
    setSelectedType((prevState) => ({
      ...prevState,
      material: selectedOption.value,
    }));
  };

  const handleTypeChange = (selectedOption) => {
    setSelectedType((prevState) => ({
      ...prevState,
      types: selectedOption.value,
    }));
  };

  return (
    <div className="mt-[1200px] ml-[600px] w-[600px] min-h-[700px] h-fit bg-gray-100 border border-gray-200 rounded-lg p-7">
      <div className="w-full flex justify-between items-center">
        <img src={Logo} className="w-[100px]" alt="" />
        <img src={Close} alt="" className="w-[30px]" />
      </div>

      <p className="font-bold text-xl mb-[10px] mt-[30px]">
        Выберите производителя:
      </p>
      <Select options={companies} styles={customStyles} />

      <p className="font-bold text-xl mb-[10px] mt-[30px]">
        Выберите материал профиля:
      </p>
      <Select
        options={material}
        styles={customStyles}
        onChange={handleMaterialChange}
      />

      {selectedType.material === "plast" && (
        <>
          <p className="font-bold text-xl mb-[10px] mt-[30px]">
            Выберите количество камер:
          </p>
          <Select
            options={quanCam}
            styles={customStyles}
            onChange={addList("selectedQuanCam", setSelectedType)}
          />
        </>
      )}

      <p className="font-bold text-xl mb-[10px] mt-[30px]">
        Выберите тип профиля:
      </p>
      <Select
        options={types}
        styles={customStyles}
        onChange={handleTypeChange}
      />

      {selectedType.types === "podok" && (
        <>
          <p className="font-bold text-xl mb-[10px] mt-[30px]">
            Выберите ширину подоконника:
          </p>
          <Select
            options={sillWidth}
            styles={customStyles}
            onChange={addList("selectedSillWidth", setSelectedType)}
          />
        </>
      )}

      <p className="font-bold text-xl mb-[10px] mt-[30px]">Выберите цвет:</p>
      <Select options={colors} styles={customStyles} />
    </div>
  );
}
