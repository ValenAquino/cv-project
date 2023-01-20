import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";

export function Form() {
  return (
    <div className="bg-slate-600 lg:px-10 p-10">
      <PersonalInfo />
      <Experience />
    </div>
  );
}
