import React, { Component } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Aside } from "./Aside";

export function Cv({ personalInfo, experiences, education, a4 }) {
  const cvStyle = `bg-slate-50 ${a4}`;
  const cvGrid = "grid grid-cols-3 grid-rows-6";

  return (
    <div className={`${cvStyle} ${cvGrid}`}>
      <Header personalInfo={personalInfo} />
      <Content
        personalInfo={personalInfo}
        experiences={experiences}
        education={education}
      />
      <Aside personalInfo={personalInfo} />
    </div>
  );
}

export default class CvPreview extends Component {
  render() {
    const { personalInfo } = this.props;
    const { experiences } = this.props;
    const { education } = this.props;
    const { a4 } = this.props;
    const cvStyle = `bg-slate-50 ${a4}`;
    const cvGrid = "grid grid-cols-3 grid-rows-6";

    return (
      <div className={`${cvStyle} ${cvGrid}`}>
        <Header personalInfo={personalInfo} />
        <Content
          personalInfo={personalInfo}
          experiences={experiences}
          education={education}
        />
        <Aside personalInfo={personalInfo} />
      </div>
    );
  }
}
