import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json"; // Assuming this is used later, you can implement it
import history from "../../data/history.json";

import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";
import javascript from "../../../assets/skills/js.jpg";
import reactImage from "../../../assets/skills/react.png";
import c from "../../../assets/skills/c++.jpg";
import java from "../../../assets/skills/java.jpg";
import github from "../../../assets/skills/github.jpg";
import tailwind from "../../../assets/skills/tailwind.jpg";
import node from "../../../assets/skills/node.png";
import mongodb from "../../../assets/skills/mongodb.png";
import php from "../../../assets/skills/php.jpg";
import express from "../../../assets/skills/express.png";

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
    },
    {
      id: 6,
      src: mongodb,
      title: "MongoDB",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 9,
      src: php,
      title: "php",
    },
    {
      id: 10,
      src: c,
      title: "c++",
    },
    {
      id: 11,
      src: java,
      title: "Java",
    },
    {
      id: 12,
      src: express,
      title: "Express",
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {techs.map((tech) => {
            return (
              <div key={tech.id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={tech.src} alt={tech.title} />
                </div>
                <p>{tech.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
