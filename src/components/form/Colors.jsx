import MokkoColor from "@img/мокко.jpg";
import NutColor from "@img/орех.jpg";
import GoldenOakColor from "@img/золотой_дуб.jpg";
import AnthraciteColor from "@img/ антрацит.jpg";
import ScheifeliOakColor from "@img/шейфель.jpg";

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
]

export default colors