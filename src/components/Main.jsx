import React from "react";
import { Form } from "./Form";
import { Cv } from "./Cv";

export function Main() {
  return (
    <main className="grid grid-cols-2 gap-10 p-16 h-screen">
      <Form />
      <Cv />
    </main>
  );
}
