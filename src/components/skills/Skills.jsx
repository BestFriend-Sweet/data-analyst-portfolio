import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa";
import {
  SiFlutter,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiDart,
  SiPython,
  SiMysql,
  SiR,
  SiTableau,
  SiJira,
  SiApachehive,
  SiApachespark
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import "./skills.css";

export const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, url: "https://reactjs.org/" },
    { name: "Flutter", icon: <SiTableau />, url: "https://tableau.com//" },
    {
      name: "Tailwind",
      icon: <SiJira />,
      url: "https://jira.com/",
    },
    {
      name: "Bootstrap",
      icon: <SiR />,
      url: "https://programmingr.com/",
    },
    {
      name: "Firebase",
      icon: <SiMysql />,
      url: "https://mysql.com/",
    },
    { name: "Redux", icon: <SiRedux />, url: "https://redux.js.org/" },
    { name: "Dart", icon: <SiApachehive />, url: "https://hive.apache.org/" },
    {
      name: "JavaScript",
      icon: <SiApachespark />,
      url: "https://spark.apache.org",
    },
    { name: "Python", icon: <SiPython />, url: "https://www.python.org/" },
  ];

  return (
    <div className="skills-container">
      {skills.map((skill) => {
        return (
          <a
            key={skill.name}
            className={`skill ${skill.name}`}
            href={skill.url}
            target="_blank"
            rel="noreferrer"
          >
            {skill.icon}
          </a>
        );
      })}
    </div>
  );
};
