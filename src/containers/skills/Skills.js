import React, { useContext, lazy, Suspense } from "react";
import "./Skills.scss";
import { illustration, skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import developerActivity from "../../assets/images/developerActivity.svg";
import codingPerson from "../../assets/lottie/codingPerson.json";

const DisplayLottie = lazy(() =>
  import("../../components/displayLottie/DisplayLottie")
);

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) return null;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      data-theme={isDark ? "dark" : "light"}
      className="skills-section"
    >
      <div className="skills-main">
        <div className="skills-visual">
          {illustration.animated ? (
            <Suspense
              fallback={
                <img
                  alt="Developer at laptop"
                  src={developerActivity}
                />
              }
            >
              <DisplayLottie
                animationData={codingPerson}
                aria-hidden="true"
              />
            </Suspense>
          ) : (
            <img
              alt="Developer at laptop"
              src={developerActivity}
            />
          )}
        </div>

        <div className="skills-content">
          <h2
            id="skills-heading"
            className="skills-heading"
          >
            {skillsSection.title}
          </h2>
          <p className="skills-subtitle">
            {skillsSection.subTitle}
          </p>

          {/* —— Skill Icon Grid —— */}
          <div className="skills-grid">
            {skillsSection.softwareSkills.map((group, gi) => (
              <div className="skill-group" key={gi}>
                <h3 className="group-title">{group.group}</h3>
                <div className="group-icons">
                  {group.skills.map((s, si) => (
                    <i
                      key={si}
                      title={s.skillName}
                      className={`skill-icon ${s.fontAwesomeClassname}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* —— Bullet List —— */}
          <ul className="skills-list">
            {skillsSection.skills.map((line, i) => (
              <li key={i} className="skills-text">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
