import React from "react";

function ExperienceItem({ experience }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 py-1">
      <span className="font-medium">
        {experience.from} - {experience.to}
      </span>
      <span className="text-xs md:text-base">{experience.position}</span>
      <span className="text-xs md:text-base col-start-2">
        {experience.company}, {experience.city}
      </span>
    </div>
  );
}

export function ExperienceInfo({ experiences }) {
  const experiencesItems = experiences.map((experience, i) => (
    <ExperienceItem  key={i} experience={experience} />
  ));

  return (
    <div className="divide-y divide-slate-400 p-3">
      <h3 className="mb-2 text-lg md:text-3xl">Experiencia Laboral</h3>
      {experiencesItems}
    </div>
  );
}
