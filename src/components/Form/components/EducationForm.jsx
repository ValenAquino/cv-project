import React from "react";

export function EducationForm() {
  return (
    <div className="flex flex-wrap flex-column gap-4 mb-5">
      <input
        className="input grow"
        type="text"
        placeholder="Institución Educativa"
      />
      <input className="input grow" type="text" placeholder="Ciudad" />
      <input className="input grow" type="text" placeholder="Titulo" />
      <input className="input grow" type="text" placeholder="Rubro" />
      <input className="input grow" type="text" placeholder="Desde" />
      <input className="input grow" type="text" placeholder="Desde" />
    </div>
  );
}
