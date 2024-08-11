import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Politeknik Negeri Malang",
    years: "2021 - Present",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 2,
    title: "SMAN 1 Lawang",
    years: "2018 - 2021",
    content:
      "Natural Science",
  },
  
];

const experienceData = [
  {
    id: 3,
    title: "Data Scientist",
    years: "Present",
    content:
    "Building a machine learning pipeline and doing research about machine sensor in manufacturing industry.",
  },
  {
    id: 1,
    title: "Web Developer",
    years: "2023 - Present",
    content:
      "Developing several websites for clients and companies. Mostly working on admin dashboard web apps.",
  },
  {
    id: 2,
    title: "Mobile App Developer",
    years: "2022 - Present",
    content:
      "Build mobile apps for clients using flutter and firebase as backend.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
