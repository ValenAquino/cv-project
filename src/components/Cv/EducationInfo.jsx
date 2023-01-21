import React from "react";

function EducationItem() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 py-1">
      <span className="font-medium">From - To</span>
      <span className="text-base">University, City</span>
      <span className="text-base col-start-2">Degree: Nombre del titulo</span>
      <span className="text-base col-start-2">Rubro: EL rubro</span>
    </div>
  );
}

export function EducationInfo() {
  return (
    <div className="divide-y divide-slate-400  p-3">
      <h2 className="mb-2 text-3xl">Education Info</h2>
      <EducationItem />
      <EducationItem /> 
    </div>
  );
}
