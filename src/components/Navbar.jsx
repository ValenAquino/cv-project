import React from "react";

const body = document.getElementById("body");

export function NavBar() {
  return (
    <nav className="border-b border-slate-500 p-4 grid grid-cols-2 fixed w-full bg-slate-900 top-0 z-50">
      <h1 className="text-4xl font-bold">CV Creator</h1>
      <div className="grid w-fit items-center place-self-end mr-3">
        <a href="#preview" className="btn scale-110 material-symbols-outlined"
          onClick={()=>{body.classList.add("no-scroll")}}>
          preview
        </a>
      </div>
    </nav>
  );
}