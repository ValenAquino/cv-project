import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";
import { Education } from "./Education";

export function Form({
  addPersonalInfo,
  addExperience,
  modifyExperience,
  experiences,
  removeExperience,
  education,
  addEducation,
  modifyEducation,
  removeEducation,
}) {
  return (
    <div className="bg-slate-600 lg:px-10 p-10 rounded-md">
      <PersonalInfo addPersonalInfo={addPersonalInfo} />
      <Experience
        experiences={experiences}
        addExperience={addExperience}
        modifyExperience={modifyExperience}
        removeExperience={removeExperience}
      />
      <Education
        education={education}
        addEducation={addEducation}
        modifyEducation={modifyEducation}
        removeEducation={removeEducation}
      />
    </div>
  );
}
