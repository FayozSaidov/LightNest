import AkfaLogo from "@img/AkfaLogo-removebg-preview.png";
import EngelbergLogo from "@img/engelberg-01.png";
import AlutexLogo from "@img/alutextLogo-removebg-preview.png";
import AlubestLogo from "@img/alubestlogo-removebg-preview.png";
import AltaPlastLogo from "@img/article-original-removebg-preview.png";
import EkopenLogo from "@img/ekopenLogo.png";
import ImzoLogo from "@img/imzo_akfa-01.png";

const companies = [
  {
    value: "Akfa",
    label: (
      <div className="flex items-center  w-full h-[30px]">
        <img src={AkfaLogo} className="w-[70px] h-fit mr-[10px]" alt="" />
        <p className="font-bold text-xl"> Akfa </p>{" "}
      </div>
    ),
  },
  {
    value: "AkfaThermo",
    label: (
      <div className="flex items-center  w-full h-[30px]">
        <img src={AkfaLogo} className="w-[70px] h-fit mr-[10px]" alt="" />
        <p className="font-bold text-xl"> Akfa Thermo </p>{" "}
      </div>
    ),
  },
  {
    value: "Alutex",
    label: (
      <div className="flex items-center w-full h-[30px]">
        <img src={AlutexLogo} className="w-[70px] h-fit mr-[10px]" alt="" />
        <p className="font-bold text-xl"> Alutex </p>{" "}
      </div>
    ),
  },
  {
    value: "Alubest",
    label: (
      <div className="flex items-center w-full h-[30px]">
        <img src={AlubestLogo} className="w-[70px] h-fit mr-[10px]" alt="" />
        <p className="font-bold text-xl"> Alubest </p>{" "}
      </div>
    ),
  },
  {
    value: "AltaPlast",
    label: (
      <div className="flex items-center w-full h-[30px]">
        <img src={AltaPlastLogo} className="w-[70px] h-fit mr-[10px]" alt="" />
        <p className="font-bold text-xl"> Alta Plast </p>{" "}
      </div>
    ),
  },
  {
    value: "Imzo",
    label: (
      <div className="flex items-center  w-full h-[30px]">
        <img src={ImzoLogo} className="w-[70px] h-fit mr-[10px]" alt="" />
        <p className="font-bold text-xl"> Imzo </p>{" "}
      </div>
    ),
  },
  {
    value: "Engelberg",
    label: (
      <div className="flex items-center  w-full h-[30px]">
        <img
          src={EngelbergLogo}
          className="w-[70px] h-fit mr-[10px]"
          alt=""
        />
        <p className="font-bold text-xl"> Engelberg </p>{" "}
      </div>
    ),
  },
  {
    value: "Ekopen",
    label: (
      <div className="flex items-center w-full h-[30px]">
        <img src={EkopenLogo} className="w-[70px] h-fit mr-[10px]" alt="" />
        <p className="font-bold text-xl"> Ekopen </p>{" "}
      </div>
    ),
  },
];

export default companies;
