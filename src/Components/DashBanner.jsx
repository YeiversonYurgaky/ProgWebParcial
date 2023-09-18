import React from "react";
import banner from "../assets/4300786_2279972-02.svg";

const DashBanner = () => {
  return (
    <div>
      <div className="w-full h-48 overflow-hidden relative inline-block items-center">
        <img
          src={banner}
          alt="banner"
          className="block w-full h-auto object-cover opacity-60"
        />
      </div>
      <div className="absolute flex justify-center items-center top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[#947452] shadow-sm font-medium bg-[#f8f4e4] py-2 px-2 rounded-lg text-5xl flex justify-center items-center select-none">
          ¡Productos Disponibles!
        </h1>
      </div>
    </div>
  );
};

export default DashBanner;
