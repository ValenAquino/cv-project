import React from "react";
import { Description } from "./Description";
import { ExperienceInfo } from "./ExperienceInfo";
import { EducationInfo } from "./EducationInfo";

export function Content({ personalInfo, experiences, education }) {
  const contentGrid = "row-start-2 row-end-7 col-start-1 col-end-3";
  const contentStyle = "p-5 md:text-lg text-gray-800";

  return (
    <div className={`${contentGrid} ${contentStyle}`}>
      <Description personalInfo={personalInfo} />
      <ExperienceInfo experiences={experiences} />
      <EducationInfo education={education} />
    </div>
  );
}
