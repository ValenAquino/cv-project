import React from "react";

export function Description({ personalInfo }) {
  return (
    <div className="p-3">
      <h2 className="mb-2 text-3xl">Description</h2>
      <p className="text-base">{personalInfo.description}</p>
    </div>
  );
}
