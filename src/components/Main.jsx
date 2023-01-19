import React from "react";
import { Form } from "./Form";
import { Cv } from "./Cv";

export function Main() {
  return (
    <main className="grid grid-cols-1 mx-24 p-16 h-screen gap-5">
      <Form />
      <Cv />
    </main>
  );
}
