import React from "react";

export function ExperienceForm() {

  return (
    <div className="content-center grid gap-3 mb-7 md:grid-cols-4 lg:grid-cols-3">
      <input className="input md:col-start-1 md:col-end-3 lg:col-auto" type="text" placeholder="Posición" />
      <input className="input md:col-start-3 md:col-end-5 lg:col-auto" type="text" placeholder="Empresa" />
      <input className="input md:col-start-1 md:col-end-5 lg:col-auto" type="text" placeholder="Dirección" />
      <input className="input" type="text" placeholder="Desde" />
      <input className="input" type="text" placeholder="Hasta" />
      <button className="btn scale-90 ml-5 material-symbols-outlined">delete</button>
    </div>
  );
}
