import React from "react";

export function ExperienceInput() {
  const inputStyle = `
    bg-gray-700 placeholder-gray-400 p-2.5 rounded-lg 
    text-sm text-white 
    focus:outline-transparent`;

  return (
    <>
      <input className={`${inputStyle}`} type="text" placeholder="Posición" />
      <input className={`${inputStyle}`} type="text" placeholder="Empresa" />
      <input className={`${inputStyle}`} type="text" placeholder="Dirección" />
      <input className={`${inputStyle}`} type="text" placeholder="Desde" />
      <input className={`${inputStyle}`} type="text" placeholder="Hasta" />
      <button>+</button>
      <button>-</button>
    </>
  );
}
