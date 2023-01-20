import React from "react";

export function PersonalInfo() {
  const inputStyle = `
    bg-gray-700 placeholder-gray-400 p-2.5 rounded-lg 
    text-sm text-white 
    focus:outline-transparent`;

  return (
    <div className="px-12 pb-10 grid w-full sm:grid-flow-row lg:grid-cols-4 gap-3">
      <h1 className="mb-5 text-3xl font-semibold lg:col-start-1 lg:col-end-5">
        Personal Information
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
        className={`${inputStyle} lg:col-start-3 lg:col-end-5`}
        type="text"
        placeholder="Email"
      />
      <textarea
        className={`${inputStyle} lg:col-start-1 lg:col-end-5 resize-none`}
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
