import React from "react";
import { ExperienceInput } from "./ExperienceInput";

export function Experience() {
  return (
    <div className="px-12 pb-10 grid w-full sm:grid-flow-row lg:grid-cols-3 gap-3 ">
      <h1 className="mb-5 text-3xl font-semibold lg:col-start-1 lg:col-end-4">
        Experience
      </h1>
      <ExperienceInput />
    </div>
  );
}
