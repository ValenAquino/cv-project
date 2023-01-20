import React from "react";

export function PersonalInfo() {
  const inputStyle = `
  bg-slate-700 placeholder-slate-400 p-2.5 rounded-md 
  text-sm text-white border-2 border-slate-700
  focus:border-2 focus:border-blue-300 focus:outline-none focus:outline-transparent`;

  return (
    <div className="px-12 pb-10 grid w-full sm:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-3">
      <h1 className="mb-5 text-3xl font-semibold col-start-1 md:col-end-3 lg:col-end-5">
        Información Personal
      </h1>
      <input
        className={`${inputStyle} lg:col-start-1 lg:col-end-3`}
        type="text"
        placeholder="Nombre"
      />
      <input
        className={`${inputStyle} lg:col-start-3 lg:col-end-5`}
        type="text"
        placeholder="Apellido"
      />
      <input className={`${inputStyle}`} type="text" placeholder="Title" />
      <input className={`${inputStyle}`} type="text" placeholder="Celular" />
      <input
        className={`${inputStyle} lg:col-start-3 lg:col-end-5 md:col-start-1 md:col-end-3`}
        type="text"
        placeholder="Email"
      />
      <textarea
        className={`${inputStyle} lg:col-start-1 lg:col-end-5 resize-none md:col-start-1 md:col-end-3`}
        rows="5"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        voluptatum. Nulla ullam quia dolore eum, excepturi molestiae officia
        exercitationem maxime rem expedita vitae sapiente magni doloremque, iure
        totam aspernatur fuga?
      </textarea>
    </div>
  );
}
