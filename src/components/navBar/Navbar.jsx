import React from "react";
import LOGO from "../../assets/imgs/logo.png";
import "./navbar.css";
import { Link } from 'react-scroll';

export const Navbar = ({ homeRef, aboutRef, projectRef, contactRef }) => {
  return (
    <nav style={{ position: "fixed" }}>
      <img className="logo-main" src={LOGO} alt="John" />
      <div>
        <button style={{ color: "white", background: 'none' }}
          onClick={() =>
            homeRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            })
          }
          className="btn z-idx"
        >
          Home
        </button>

        <button style={{ color: "white", background: 'none' }}
          onClick={() =>
            aboutRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            })
          }
          className="btn z-idx"
        >
          About
        </button>

        <button style={{ color: "white", background: 'none' }}
          onClick={() =>
            projectRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            })
          }
          className="btn z-idx"
        >
          Projects
        </button>


        <button style={{ color: "white", background: 'none' }}
          onClick={() =>
            contactRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            })
          }
          className="btn z-idx"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
