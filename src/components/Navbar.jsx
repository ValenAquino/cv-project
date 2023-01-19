import React from "react";

export function NavBar() {
  const btnclass =
    "p-3 scale-110 bg-orange-400 material-symbols-outlined hover:bg-orange-700";

  return (
    <nav className="border-b border-slate-500 p-4 grid grid-cols-2 ">
      <h1 className="text-4xl font-bold">CV Creator</h1>
      <div className="grid grid-cols-3 w-fit gap-3 items-center place-self-end mr-5">
        <button className={btnclass}> refresh </button>
        <button className={btnclass}> download </button>
        <button className={btnclass}> preview </button>
      </div>
    </nav>
  );
}
