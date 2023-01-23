import React from "react";

export function EducationForm({ modifyEducation, removeEducation, itemID }) {
  return (
    <div className="px-4 py-8 bg-slate-500 rounded-md content-center grid gap-3 mb-7 md:grid-cols-4 lg:grid-cols-3">
      <input
        className="input md:col-start-1 md:col-end-3"
        type="text"
        placeholder="Institución Educativa"
        onChange={(e) => {
          modifyEducation(itemID, { university: e.target.value });
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Ciudad"
        onChange={(e) => {
          modifyEducation(itemID, { city: e.target.value });
        }}
      />
      <input
        className="input md:col-start-1 md:col-end-3"
        type="text"
        placeholder="Titulo"
        onChange={(e) => {
          modifyEducation(itemID, { degree: e.target.value });
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Rubro"
        onChange={(e) => {
          modifyEducation(itemID, { subject: e.target.value });
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Desde"
        onChange={(e) => {
          modifyEducation(itemID, { from: e.target.value });
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Hasta"
        onChange={(e) => {
          modifyEducation(itemID, { to: e.target.value });
        }}
      />
      <button
        className="btn scale-90 ml-5 material-symbols-outlined"
        onClick={() => {
          removeEducation(itemID);
        }}
      >delete</button>
    </div>
  );
}
