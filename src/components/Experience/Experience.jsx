import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";
// import javascript from "../../../assets/skills/javascript.png";
// import reactImage from "../assets/react.png";
// import c from "../assets/c++.jpg";
// import java from "../assets/java.jpg";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";
// import node from "../assets/node.png";
// import express from "../assets/express.png"
// import mongodb from "../assets/mongodb.png"
// import php from "../assets/php.jpg"

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
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {techs.map(( id, src, title) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={src} />
                </div>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
