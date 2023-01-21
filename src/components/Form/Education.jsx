import React from "react";
import { EducationForm } from "./components/EducationForm";

export function Education({
  education,
  addEducation,
  modifyEducation,
  removeEducation,
}) {
  const educationForms = education.map((educationItem) => (
    <EducationForm
      key={educationItem.id}
      itemID={educationItem.id}
      modifyEducation={modifyEducation}
      removeEducation={removeEducation}
    />
  ));

  return (
    <div className="p-12 pt-0 w-full">
      <h1 className="mb-7 text-3xl font-semibold">Educación</h1>
      {educationForms}
      <button
        className="col-start-1 col-end-4 w-full text-center underline underline-offset-4 text-slate-400 hover:text-white"
        onClick={addEducation}
      >
        Agregar educación +
      </button>
    </div>
  );
}
