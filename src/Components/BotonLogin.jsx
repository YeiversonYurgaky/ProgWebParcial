import React from "react";

const BotonLogin = ({ fnIniciarSesion, label }) => {
  return (
    <button
      onClick={fnIniciarSesion}
      className=" w-150 px-3 py-2.5 bg-bread3 text-lg bg font-medium text-[#f8f4e4] border-none rounded-2xl cursor-pointer transition-transform duration-300 ease-in text-18 hover:brightness-110 hover:scale-110 hover:shadow-md hover:shadow-bread3"
    >
      {label}
    </button>
  );
};

export default BotonLogin;
