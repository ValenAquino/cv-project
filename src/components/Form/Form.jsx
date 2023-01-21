import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";
import { Education } from "./Education";

export function Form({ addPersonalInfo, addExperience, modifyExperience }) {
  return (
    <div className="bg-slate-600 lg:px-10 p-10 rounded-md">
      <PersonalInfo addPersonalInfo={addPersonalInfo} />
      <Experience
        addExperience={addExperience}
        modifyExperience={modifyExperience}
      />
      <Education />
    </div>
  );
}
