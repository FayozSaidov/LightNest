import { logos } from "../LogosColors";  // Импортируем логотипы

const companies = [
  "Akfa",
  "AkfaThermo",
  "Alutex",
  "Alubest",
  "AltaPlast",
  "Imzo",
  "Engelberg",
  "Ekopen",
];

const companyComponents = companies.map((company) => ({
  value: company,
  label: (
    <div className="flex items-center w-full h-[30px]">
      <img
        src={logos[company]}  // Используем логотип из объекта
        className="w-[70px] h-fit mr-[10px]"
        alt={company}
      />
      <p className="font-bold text-xl"> {company} </p>
    </div>
  ),
}));

export default companyComponents;
