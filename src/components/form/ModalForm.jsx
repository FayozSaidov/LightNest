import React, { useState } from "react";
import Select from "react-select";
import companies from "./Companies";
import colors from "./Colors.jsx";
import types from "./Types.jsx";
import Logo from "@img/Logo.png";
import Close from "@img/close.png";
import { addList } from "./addingListFunc";

export default function ModalForm({ closeModal }) {
  const [selectedType, setSelectedType] = useState({
    material: null,
    types: null,
    selectedQuanCam: null,
    selectedSillWidth: null,
    quantity: "",
    size: "",
  });

  const options = {
    sillWidth: [
      { value: "25cm", label: "25 см" },
      { value: "35cm", label: "35 см" },
      { value: "40cm", label: "40 см" },
      { value: "45cm", label: "45 см" },
    ],
    quanCam: [
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
    ],
    material: [
      { value: "Alumin", label: "Алюминий" },
      { value: "plast", label: "ПВХ" },
      { value: "thermo", label: "Thermo" },
    ],
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: "50px",
      padding: "5px",
    }),
  };

  const handleChange = (field, value) => {
    setSelectedType((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const renderSelect = (label, optionsData, field, handleChangeFn) => (
    <>
      <p className="font-bold text-xl mb-[10px] mt-[30px]">{label}:</p>
      <Select
        options={optionsData}
        styles={customStyles}
        onChange={(selectedOption) => handleChangeFn(field, selectedOption.value)}
      />
    </>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center pt-[100px] overflow-y-auto" onClick={closeModal}>
      {/* Остановка всплытия событий клика */}
      <div
        className="w-[600px] min-h-[700px] bg-white border border-gray-200 rounded-lg p-7 mt-[400px] mb-[100px] relative"
        onClick={(e) => e.stopPropagation()} // Остановка всплытия
      >
        <div className="w-full flex justify-between items-center">
          <img src={Logo} className="w-[100px]" alt="Logo" />
          <button onClick={closeModal} className="cursor-pointer">
            <img src={Close} alt="Close" className="w-[30px]" />
          </button>
        </div>

        {renderSelect("Выберите производителя", companies, "company", handleChange)}

        {renderSelect("Выберите тип профиля", types, "types", handleChange)}

        {selectedType.types !== "podok" &&
          renderSelect("Выберите материал профиля", options.material, "material", handleChange)}

        {selectedType.material === "plast" &&
          renderSelect("Выберите количество камер", options.quanCam, "selectedQuanCam", handleChange)}


        {selectedType.types === "podok" &&
          renderSelect("Выберите ширину подоконника", options.sillWidth, "selectedSillWidth", handleChange)}

        <p className="font-bold text-xl mb-[10px] mt-[30px]">Выберите цвет:</p>
        <Select options={colors} styles={customStyles} />

        <p className="font-bold text-xl mb-[10px] mt-[30px]">Введите количество:</p>
        <input
          type="number"
          value={selectedType.quantity}
          onChange={(e) => handleChange("quantity", e.target.value)}
          className="w-full h-[50px] border border-gray-300 rounded-[5px] text-xl px-3 focus:outline-none"
          placeholder="Введите количество"
        />

        <p className="font-bold text-xl mb-[10px] mt-[30px]">Введите размер (см):</p>
        <input
          type="number"
          value={selectedType.size}
          onChange={(e) => handleChange("size", e.target.value)}
          className="w-full h-[50px] border border-gray-300 rounded-[5px] text-xl px-3 focus:outline-none"
          placeholder="Введите размер"
        />

        <button className="w-[200px] h-[50px] bg-[#af8d53] block text-white font-bold rounded-lg mt-[20px] mx-auto">
          Добавить
        </button>
      </div>
    </div>
  );
}
