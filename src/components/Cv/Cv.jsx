import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Aside } from "./Aside";

export function Cv({ personalInfo, experiences }) {
  const cvStyle = "bg-slate-50";
  const cvGrid = "grid grid-cols-3 grid-rows-6";

  return (
    <div className={`${cvStyle} ${cvGrid}`}>
      <Header personalInfo={personalInfo} />
      <Content personalInfo={personalInfo} experiences={experiences} />
      <Aside personalInfo={personalInfo} />
    </div>
  );
}
