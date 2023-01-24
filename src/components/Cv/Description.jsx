import React from "react";

export function Description({ personalInfo }) {
  return (
    <div className="p-3">
      <h2 className="mb-2 text-lg md:text-3xl">Descripción Personal</h2>
      <p className="text-sm md:text-base">{personalInfo.description}</p>
    </div>
  );
}
