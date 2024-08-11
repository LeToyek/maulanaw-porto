import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Mobile App Development",
    content:
      "Create beautiful and intuitive mobile apps that work perfectly on Android phones, making every user experience delightful and engaging.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
    "Build good looking websites that work flawlessly on any device, whether it's a phone, tablet, or computer.",
    color: "#F97B8B",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "AI Development",
    content:
    "Develop custom machine learning models that help you make better decisions and uncover valuable insights.",
    color: "#6C6CE5",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
