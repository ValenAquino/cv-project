import React, { useState, useRef } from "react";
import { Form } from "./Form/Form";
import CvPreview, { Cv } from "./Cv/Cv";
import { useReactToPrint } from "react-to-print";

function Modal({ personalInfo, experiences, education, navRef }) {
  const body = document.getElementById("body");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div id="preview" className="p-12 modal grid justify-center items-center">
      <CvPreview
        personalInfo={personalInfo}
        experiences={experiences}
        education={education}
        a4={"a4-page"}
        ref={componentRef}
      />
      <div className="fixed top-3 right-7 grid grid-cols-2 gap-4">
        <button
          className="btn scale-110 material-symbols-outlined "
          onClick={handlePrint}
        >
          download
        </button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a
          href="#"
          className="btn scale-110 material-symbols-outlined"
          onClick={() => {
            body.classList.remove("no-scroll");
            navRef.current.classList.add("fixed");
          }}
        >
          close
        </a>
      </div>
    </div>
  );
}

export function Main({navRef}) {
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
    setExperiences(experiences.filter((exp) => exp.id !== id));
  }

  function addEducation() {
    const educationItem = {
      id: crypto.randomUUID(),
      university: "University",
      degree: "Degree",
      subject: "Subject",
      from: "From",
      to: "To",
    };

    setEducation([...education, educationItem]);
  }

  function modifyEducation(id, modified) {
    setEducation(
      education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, ...modified };
        } else {
          return educationItem;
        }
      })
    );
  }

  function removeEducation(id) {
    setEducation(education.filter((exp) => exp.id !== id));
  }

  const [personalInfo, setPersonalInfo] = useState(personalData);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  return (
    <main className="grid grid-cols-1 mx-2 p-16 gap-5 2xl:grid-cols-2 2xl:gap-16 2xl:mx-0 lg:mx-6 xl:mx-24 my-10">
      <Form
        addPersonalInfo={addPersonalInfo}
        experiences={experiences}
        addExperience={addExperience}
        modifyExperience={modifyExperience}
        removeExperience={removeExperience}
        education={education}
        addEducation={addEducation}
        modifyEducation={modifyEducation}
        removeEducation={removeEducation}
      />
      <Cv
        personalInfo={personalInfo}
        experiences={experiences}
        education={education}
        a4={" "}
      />
      <Modal
        personalInfo={personalInfo}
        experiences={experiences}
        education={education}
        navRef={navRef}
      />
    </main>
  );
}
