import React, {useContext} from "react";
import "./SchoolProject.scss";
import SchoolProjectCard from "../../components/schoolProjectCard/SchoolProjectCard";
import {schoolProjectSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function SchoolProject() {
  const {isDark} = useContext(StyleContext);
  if (!schoolProjectSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="schoolProjects">
        <div className="schoolProject-main-div">
          <div className="schoolProject-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading schoolProject-heading"
                  : "heading schoolProject-heading"
              }
            >
              {schoolProjectSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle schoolProject-subtitle"
                  : "subTitle schoolProject-subtitle"
              }
            >
              {schoolProjectSection.subtitle}
            </p>
          </div>
          <div className="schoolProjects-cards-div">
            {schoolProjectSection.schoolProjectCards.map((card, i) => {
              return (
                <SchoolProjectCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
