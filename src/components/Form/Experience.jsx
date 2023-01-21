import React, { useEffect } from "react";
import { ExperienceForm } from "./components/ExperienceForm";

export function Experience({
  experiences,
  addExperience,
  modifyExperience,
  removeExperience,
}) {
  const add_exp_btn = `
    block mx-auto underline underline-offset-4 text-slate-400 hover:text-white"
  `;

  const experienceItems = experiences.map((experienceItem) => (
    <ExperienceForm
      key={experienceItem.id}
      itemID={experienceItem.id}
      modifyExperience={modifyExperience}
      removeExperience={removeExperience}
    />
  ));

  return (
    <div className="p-12 pt-0">
      <h1 className="mb-7 text-3xl font-semibold lg:col-start-1 lg:col-end-4">
        Experiencia Laboral
      </h1>
      {experienceItems}
      <button className={add_exp_btn} onClick={addExperience}>
        Agregar experiencia +
      </button>
    </div>
  );
}
