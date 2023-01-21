import React, { useState } from "react";
import { Form } from "./Form/Form";
import { Cv } from "./Cv/Cv";

export function Main() {

  const personalData = {
    firstName: "",
    lastName: "",
    title: "",
    phone: "",
    email: "",
    description: "",
  };

  function addPersonalInfo(data) {
    setPersonalInfo({...personalInfo, ...data});
  }

  const [personalInfo, setPersonalInfo] = useState(personalData);

  return (
    <main className="grid grid-cols-1 mx-2 p-16 gap-5 2xl:grid-cols-2 2xl:gap-16 2xl:mx-0 lg:mx-6 xl:mx-24 ">
      <Form addPersonalInfo={addPersonalInfo}/>
      <Cv personalInfo={personalInfo} />
    </main>
  );
}
