import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";
import { Education } from "./Education";

export function Form() {
  return (
    <div className="bg-slate-600 lg:px-10 p-10 rounded-lg">
      <PersonalInfo />
      <Experience />
      <Education />
    </div>
  );
}
