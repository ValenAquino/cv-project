import React from "react";

export function ExperienceForm({ itemID, modifyExperience, removeExperience }) {
  return (
    <div className="px-4 py-8 bg-slate-500 rounded-md content-center grid gap-3 mb-7 md:grid-cols-4 lg:grid-cols-3">
      <input
        className="input md:col-start-1 md:col-end-3 lg:col-auto"
        type="text"
        placeholder="Posición"
        onChange={(e) => {
          modifyExperience(itemID, { position: e.target.value });
        }}
      />
      <input
        className="input md:col-start-3 md:col-end-5 lg:col-auto"
        type="text"
        placeholder="Empresa"
        onChange={(e) => {
          modifyExperience(itemID, { company: e.target.value });
        }}
      />
      <input
        className="input md:col-start-1 md:col-end-5 lg:col-auto"
        type="text"
        placeholder="Dirección"
        onChange={(e) => {
          modifyExperience(itemID, { city: e.target.value });
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Desde"
        onChange={(e) => {
          modifyExperience(itemID, { from: e.target.value });
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Hasta"
        onChange={(e) => {
          modifyExperience(itemID, { to: e.target.value });
        }}
      />
      <button
        className="btn scale-90 ml-5 material-symbols-outlined"
        onClick={() => {
          removeExperience(itemID);
        }}
      >
        delete
      </button>
    </div>
  );
}
