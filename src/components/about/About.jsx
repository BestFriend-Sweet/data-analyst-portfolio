import React, { useState } from 'react';
import { Education } from '../education/Education';
import { Experience } from '../experience/Experience';
import { Skills } from '../skills/Skills';
import './about.css';

export const About = ({ myExperience, cover, cv }) => {
  const [current, setCurrent] = useState('skills');

  return (
    <>
      <div className='about-container' name="about">
        <div className='pic-container'>
          <img loading='lazy' src={cover} alt='Maged' />
        </div>

        <div className='about-text'>
          <div className='about-header'>
            <h1 className='title'>About Me</h1>
          </div>
          <p>
            &nbsp;&nbsp;I'm John Lee, a highly experienced senior data analyst with over 8 years of experience in data analysis, data science, and business intelligence.
            I have a proven track record of success in leading teams and managing complex projects, working with large and complex datasets, and applying expertise in statistical software packages such as Python and R, as well as data visualization tools like Tableau and Power BI.
            <br />
            &nbsp;&nbsp;Also, I am a skilled data miner with extensive experience in machine learning and predictive modeling.
            I have strong analytical and problem-solving skills and is able to translate data insights into actionable business strategies. I hold a Bachelor's and a Master's degree in Computer Science and has multiple certifications related to data analysis and business intelligence.
          </p>

          <a href={cv} download="MyResume.pdf" className='btn'>
            Download CV
          </a>
        </div>
      </div>

      <div className='menu'>
        <div
          onClick={() => setCurrent('skills')}
          className={
            current === 'skills' ? 'menu-item menu-active' : 'menu-item'
          }
        >
          Skill Set
        </div>
        <div
          onClick={() => setCurrent('experience')}
          className={
            current === 'experience' ? 'menu-item menu-active' : 'menu-item'
          }
        >
          Experience
        </div>
        <div
          onClick={() => setCurrent('education')}
          className={
            current === 'education' ? 'menu-item menu-active' : 'menu-item'
          }
        >
          Education
        </div>
      </div>

      <div>
        {current === 'skills' && <Skills />}
        {current === 'experience' && <Experience myExperience={myExperience} />}
        {current === 'education' && <Education />}
      </div>
    </>
  );
};
