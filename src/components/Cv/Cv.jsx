import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Aside } from "./Aside";

export function Cv() {
  const cvStyle = "bg-slate-50";
  const cvGrid = "grid grid-cols-3 grid-rows-6";

  return (
    <div className={`${cvStyle} ${cvGrid}`}>
      <Header />
      <Content />
      <Aside />
    </div>
  );
}
