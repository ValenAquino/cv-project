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
    setPersonalInfo({ ...personalInfo, ...data });
  }

  function addExperience() {
    const exp = {
      id: crypto.randomUUID(),
      position: "Position",
      company: "Company",
      city: "City",
      from: "From",
      to: "To",
    };

    setExperiences([...experiences, exp]);
  }

  function modifyExperience(id, modified) {
    setExperiences(
      experiences.map((exp) => {
        if (exp.id === id) {
          return { ...exp, ...modified };
        } else {
          return exp;
        }
      })
    );
  }

  function removeExperience(id) {
    setExperiences(experiences.filter(exp => exp.id !== id));
  }

  const [personalInfo, setPersonalInfo] = useState(personalData);
  const [experiences, setExperiences] = useState([]);

  return (
    <main className="grid grid-cols-1 mx-2 p-16 gap-5 2xl:grid-cols-2 2xl:gap-16 2xl:mx-0 lg:mx-6 xl:mx-24 ">
      <Form
        addPersonalInfo={addPersonalInfo}
        addExperience={addExperience}
        modifyExperience={modifyExperience}
        experiences={experiences}
        removeExperience={removeExperience}
      />
      <Cv personalInfo={personalInfo} experiences={experiences} />
    </main>
  );
}
