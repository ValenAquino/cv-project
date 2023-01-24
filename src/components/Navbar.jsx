import React from "react";

const body = document.getElementById("body");

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
        <a href="#preview" className="btn scale-110 material-symbols-outlined"
          onClick={()=>{body.classList.add("no-scroll")}}>
          preview
        </a>
      </div>
    </nav>
  );
}