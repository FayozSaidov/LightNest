import { colorImages, colorLabels } from "../LogosColors";  // Импортируем логотипы и метки

const colors = Object.keys(colorImages).map((colorKey) => ({
  value: colorKey,
  label: (
    <div className="flex items-center w-full h-[40px]">
      {colorImages[colorKey] ? (
        <img
          src={colorImages[colorKey]}
          className="w-[40px] h-[40px] rounded-full mr-[10px]"
          alt={colorKey}
        />
      ) : (
        <div className="w-[40px] h-[40px] rounded-full mr-[10px] border border-gray-200" />
      )}
      <p className="font-bold text-xl">{colorLabels[colorKey]}</p>
    </div>
  ),
}));

export default colors;
