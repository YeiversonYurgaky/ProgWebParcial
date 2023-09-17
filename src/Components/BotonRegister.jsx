import React from "react";

const BotonRegister = ({ fnRegistrarse, label }) => {
  return (
    <button
      onClick={fnRegistrarse}
      className="w-150 px-3 py-2.5 bg-bread2 text-lg font-bold text-[#432c1f] border-none rounded-2xl cursor-pointer transition-transform duration-300 ease-in text-18 hover:brightness-110 hover:scale-110 hover:shadow-lg hover:shadow-bread2"
    >
      {label}
    </button>
  );
};

export default BotonRegister;
