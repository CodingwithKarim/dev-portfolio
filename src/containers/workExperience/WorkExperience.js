// src/containers/workExperience/WorkExperience.jsx
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import "./WorkExperience.scss";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (!workExperiences.display || workExperiences.experience.length === 0) {
    return null;
  }

  return (
    <section id="workExperience" className="experience-section">
      <Fade bottom duration={1000} distance="20px">
        <h2 className="experience-heading">Experience</h2>
        <div className="experience-cards-grid">
          {workExperiences.experience.map((entry, idx) => (
            <ExperienceCard
              key={idx}
              cardInfo={entry}
              isDark={isDark}
            />
          ))}
        </div>
      </Fade>
    </section>
  );
}
