import React from "react";

export function NavBar() {
  return (
    <nav className="border-b border-slate-500 p-4 grid grid-cols-2 ">
      <h1 className="text-4xl font-bold">CV Creator</h1>
      <div className="grid grid-cols-3 w-fit gap-3 items-center place-self-end mr-5">
        <a href="" className="btn mr-1 scale-110 material-symbols-outlined">
          refresh
        </a>
        <a href="" className="btn scale-110 material-symbols-outlined">
          download
        </a>
        <a href="#preview" className="btn scale-110 material-symbols-outlined">
          preview
        </a>
      </div>
    </nav>
  );
}
