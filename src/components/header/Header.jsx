import React, { useEffect, useState } from "react";
import { AnimatedLetters } from "../../components/animatedLetters/AnimatedLetters";
import { Socials } from "../socials/Socials";
import "./header.css";

export const Header = ({ contactRef }) => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [
    "J",
    "o",
    "h",
    "n",
    " ",
    "L",
    "e",
    "e"
  ];
  const jobArray = [

  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4800);
  }, []);

  return (
    <div className="header-container">
      <div className="text-zone">
        <h1 style={{ fontSize: "100px" }}>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _11`}>i,</span>
          <span className={`${letterClass} _11`}> </span>
          <span className={`${letterClass} _12`}>I</span>
          <span className={`${letterClass} _13`}>'m</span>
          &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={14}
          />
          <br />
        </h1>

        <h2>Senior Data Analyst</h2>

        <Socials />

        <button
          onClick={() =>
            contactRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            })
          }
          className="btn text-animate _47"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};
