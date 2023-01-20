import React from "react";
import { Form } from "./Form/Form";
import { Cv } from "./Cv/Cv";

export function Main() {
  return (
    <main className="grid grid-cols-1 mx-2 p-16 gap-5 2xl:grid-cols-2 2xl:gap-16 2xl:mx-0 lg:mx-6 xl:mx-24">
      <Form />
      <Cv />
    </main>
  );
}
