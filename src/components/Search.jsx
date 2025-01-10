import React, { useState } from "react";
import Select from "react-select";
import companies from "./form/Companies";
import types from "./form/Types";
import colors from "./form/Colors";

export default function Search() {
  const [selectedType, setSelectedType] = useState({
    material: null,
    types: null,
    selectedQuanCam: null,
    selectedSillWidth: null,
    quantity: "",
    size: "",
  });

  const options = {
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
    <Select
      options={optionsData}
      styles={customStyles}
      onChange={(selectedOption) => handleChangeFn(field, selectedOption.value)}
    />
  );

  return (
    <div className="w-11/12 ml-[20px] h-[50px] rounded-lg mt-[40px] mb-14">
      <p className="text-slate-400 mb-[20px] font-bold text-xs">
        Поиск по категориям
      </p>

      <div className="flex items-center gap-[10px]">
        <div className="flex-1">{renderSelect("Выберите производителя", companies, "company", handleChange)}</div>
        <div className="flex-1">{renderSelect("Выберите тип профиля", types, "types", handleChange)}</div>
        <div className="flex-1">{renderSelect("Выберите материал профиля", options.material, "material", handleChange)}</div>
        <div className="flex-1">
          <Select options={colors} styles={customStyles} />
        </div>
        <button className="flex-1 h-[50px] bg-[#af8d53] text-white font-bold rounded-lg">
          Поиск
        </button>
      </div>
    </div>
  );
}
