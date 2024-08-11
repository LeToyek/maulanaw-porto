import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";

const aboutContent = {
  name: "Maulana Arif",
  avatarImage: "/images/avatar-2.svg",
  content:
    "I'm Maulana Arif Wijaya, a Computer Engineering student. I've excelled in national tech competitions, including winning multiple first-place awards in software and mobile app development. Currently, I'm developing web applications and machine learning solutions in my internship. I also work as a freelance web developer and data science. Let's connect to explore opportunities or discuss innovative tech projects.",
};

const progressData = [
  {
    id: 1,
    title: "Development",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "UI/UX Design",
    percantage: 95,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Photography",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 35,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p>{aboutContent.content}</p>
                  <strong>Mobile App Developer . Web Developer . IOT Developer . Data Scientist </strong>
                  <div className="mt-3">
                    <a href="https://firebasestorage.googleapis.com/v0/b/porto-3872d.appspot.com/o/Maulana%20Arif%20Wijaya-resume%20(6).pdf?alt=media&token=a25cb29c-60e9-4e7f-abeb-b62bf7fadd2c" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
