import React from "react";
import { EducationForm } from "./EducationForm";

export function Education() {
  return (
    <div className="p-12 pt-0 w-full">
      <h1 className="mb-7 text-3xl font-semibold lg:col-start-1 lg:col-end-4">
        Educación
      </h1>
      <EducationForm />
      <button className="col-start-1 col-end-4 w-full text-center underline underline-offset-4 text-slate-400 hover:text-white">
        Agregar educación +
      </button>
    </div>
  );
}
