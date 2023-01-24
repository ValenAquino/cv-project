import React from "react";

export function PersonalInfo({ addPersonalInfo }) {
  const inputStyle = `
    bg-slate-700 placeholder-slate-400 p-2.5 rounded-md 
    text-sm text-white border-2 border-slate-700
    focus:border-2 focus:border-blue-300 focus:outline-none focus:outline-transparent`;

  return (
    <div className="p-10">
      <h1 className="mb-5 text-3xl font-semibold">Información Personal</h1>
      <div className="px-4 py-8 bg-slate-500 rounded-md grid w-full sm:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-3">
        <input
          className={`${inputStyle}`}
          type="text"
          placeholder="Nombre"
          onChange={(e) => {
            addPersonalInfo({ firstName: e.target.value });
          }}
        />

        <input
          className={`${inputStyle}`}
          type="text"
          placeholder="Apellido"
          onChange={(e) => {
            addPersonalInfo({ lastName: e.target.value });
          }}
        />

        <input
          className={`${inputStyle} lg:col-start-3 lg:col-end-5`}
          type="text"
          placeholder="Dirección"
          onChange={(e) => {
            addPersonalInfo({ addres: e.target.value });
          }}
        />

        <input
          className={`${inputStyle}`}
          type="text"
          placeholder="Titulo"
          onChange={(e) => {
            addPersonalInfo({ title: e.target.value });
          }}
        />

        <input
          className={`${inputStyle}`}
          type="text"
          placeholder="Celular"
          onChange={(e) => {
            addPersonalInfo({ phone: e.target.value });
          }}
        />

        <input
          className={`${inputStyle} lg:col-start-3 lg:col-end-5 md:col-start-1 md:col-end-3`}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            addPersonalInfo({ email: e.target.value });
          }}
        />

        <textarea
          className={`${inputStyle} lg:col-start-1 lg:col-end-5 resize-none md:col-start-1 md:col-end-3`}
          rows="5"
          onChange={(e) => {
            addPersonalInfo({ description: e.target.value });
          }}
          placeholder="Descripción"
        ></textarea>
      </div>
    </div>
  );
}
