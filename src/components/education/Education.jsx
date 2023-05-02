import React from 'react';
import { GoLinkExternal } from 'react-icons/go';
import '../experience/experience.css';

export const Education = () => {
  const list = [
    {
      id: 1,
      certificate: 'M.Sc. (Honours) in Computer Science',
      school: 'The University of Hong Kong',
      schoolUrl: 'https://hk.edu.sd',
      location: 'Pokfulam, Hong Kong',
      from: new Date('2013/9'),
      to: new Date('2015/7'),
      CGPA: 5.59,
    },
    {
      id: 2,
      certificate: 'B.Sc. (Honours) in Computer Science',
      school: 'The University of Hong Kong',
      schoolUrl: 'https://hk.edu.sd',
      location: 'Pokfulam, Hong Kong',
      from: new Date('2009/09/01'),
      to: new Date('2013/6'),
      CGPA: 3.59,
    }
  ];
  return (
    <div className='experience-container block'>
      {list.map((education) => {
        return (
          <div key={education.id} className='job'>
            <div className='job-time-location'>
              <div className='job-time'>
                <p>
                  {education.from.getMonth() + 1}/{education.from.getFullYear()}
                </p>
                <p>-</p>
                <p>
                  {`${education.to.getMonth() + 1
                    }/${education.to.getFullYear()}` || 'Present'}
                </p>
              </div>

              <div className='job-location'>{education.location}</div>
            </div>

            <div className='job-details'>
              <h2>{education.certificate}</h2>
              <h3>
                {education.school}
                <sup>
                  <a
                    href={education.schoolUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <GoLinkExternal />
                  </a>
                </sup>
              </h3>
              {/* 
              <p>CGPA {education.CGPA}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
