import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";
import { Education } from "./Education";

export function Form({personalInfo, setPersonalInfo}) {
  return (
    <div className="bg-slate-600 lg:px-10 p-10 rounded-md">
      <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <Experience/>
      <Education/>
    </div>
  );
}
