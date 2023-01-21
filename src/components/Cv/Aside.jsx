import React from "react";

export function Aside() {
  const AsideGrid = "row-start-2 row-end-7";
  const AsideStyle = "p-8 text-lg bg-gray-300";

  return (
    <div className={`${AsideGrid} ${AsideStyle}`}>
      <h2 className="text-2xl text-slate-800 font-bold mb-3">
        Detalles Personales
      </h2>
      <span className="block text-slate-800  text-xl mb-2">Direccion</span>
      <span className="block text-slate-800 text-xl mb-2">Celular</span>
      <span className="block text-slate-800 text-xl mb-2">Email</span>
    </div>
  );
}
