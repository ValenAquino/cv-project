import React from "react";

export function Aside({ personalInfo }) {
  const AsideGrid = "row-start-2 row-end-7 text-center";
  const AsideStyle = "p-5 text-lg bg-gray-300";

  return (
    <div className={`${AsideGrid} ${AsideStyle}`}>
      <h2 className="text-2xl text-slate-800 font-bold mb-3">
        Detalles Personales
      </h2>
      <span className="block text-slate-800 text-lg mb-2">
        {personalInfo.addres}
      </span>
      <span className="block text-slate-800 text-lg mb-2">
        {personalInfo.phone}
      </span>
      <span className="block text-slate-800 text-lg mb-2">
        {personalInfo.email}
      </span>
    </div>
  );
}
