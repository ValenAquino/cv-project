import React from "react";

function EducationItem({ educationItem }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 py-1">
      <span className="font-medium">
        {educationItem.from} - {educationItem.to}
      </span>
      <span className="text-xs md:text-base">
        {educationItem.university}, {educationItem.city}
      </span>
      <span className="text-xs md:text-base col-start-2">
        <span className="font-semibold">Titulo:</span> {educationItem.degree}
      </span>
      <span className="text-xs md:text-base col-start-2">
        <span className="font-semibold">Rubro:</span> {educationItem.subject}
      </span>
    </div>
  );
}

export function EducationInfo({ education }) {
  const educationItems = education.map((educationItem, i) => (
    <EducationItem key={i} educationItem={educationItem} />
  ));

  return (
    <div className="divide-y divide-slate-400  p-3">
      <h2 className="mb-2 text-lg md:text-3xl">Educación</h2>
      {educationItems}
    </div>
  );
}
