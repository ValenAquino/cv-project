import React, {useEffect} from "react";
import { ExperienceForm } from "./components/ExperienceForm";

export function Experience({ addExperience, modifyExperience }) {

  useEffect(() => {addExperience(); addExperience();}, [])

  return (
    <div className="p-12 pt-0 w-full">
      <h1 className="mb-7 text-3xl font-semibold lg:col-start-1 lg:col-end-4">
        Experiencia Laboral
      </h1>
      <ExperienceForm modifyExperience={modifyExperience} itemID={0} />
      <button className="col-start-1 col-end-4 w-full text-center underline underline-offset-4 text-slate-400 hover:text-white">
        Agregar experiencia +
      </button>
    </div>
  );
}
