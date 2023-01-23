import React from "react";

export function NavBar() {
  return (
    <nav className="border-b border-slate-500 p-4 grid grid-cols-2 ">
      <h1 className="text-4xl font-bold">CV Creator</h1>
      <div className="grid grid-cols-3 w-fit gap-3 items-center place-self-end mr-5">
        <button className="btn mr-1 scale-110 material-symbols-outlined">
          refresh
        </button>
        <button className="btn scale-110 material-symbols-outlined">
          download
        </button>
        <button className="btn scale-110 material-symbols-outlined">
          preview
        </button>
      </div>
    </nav>
  );
}
