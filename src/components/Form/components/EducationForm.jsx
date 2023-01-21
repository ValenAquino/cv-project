import React from "react";

export function EducationForm(modifyEducation, removeEducation, itemID) {
  return (
    <div className="flex flex-wrap flex-column gap-4 mb-5 px-4 py-8 bg-slate-500 rounded-md">
      <input
        className="input grow"
        type="text"
        placeholder="Institución Educativa"
        onChange={(e) => {
          modifyEducation(itemID, { university: e.target.value });
        }}
      />
      <input
        className="input grow"
        type="text"
        placeholder="Ciudad"
        onChange={(e) => {
          modifyEducation(itemID, { city: e.target.value });
        }}
      />
      <input
        className="input grow"
        type="text"
        placeholder="Titulo"
        onChange={(e) => {
          modifyEducation(itemID, { degree: e.target.value });
        }}
      />
      <input
        className="input grow"
        type="text"
        placeholder="Rubro"
        onChange={(e) => {
          modifyEducation(itemID, { subject: e.target.value });
        }}
      />
      <input
        className="input grow"
        type="text"
        placeholder="Desde"
        onChange={(e) => {
          modifyEducation(itemID, { from: e.target.value });
        }}
      />
      <input
        className="input grow"
        type="text"
        placeholder="Desde"
        onChange={(e) => {
          modifyEducation(itemID, { to: e.target.value });
        }}
      />
    </div>
  );
}
