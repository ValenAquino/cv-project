import React from "react";

function ExperienceItem() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 py-1">
      <span className="font-medium">From - To</span>
      <span className="text-base">Position</span>
      <span className="text-base col-start-2">Company, City</span>
    </div>
  );
}

export function ExperienceInfo() {
  return (
    <div className="divide-y divide-slate-400 p-3">
      <h3 className="mb-2 text-3xl">Experience Info</h3>
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
    </div>
  );
}
