import React from "react";
import { details } from "../details";


const Experience = () => {
  return (
    <div className="experience">
      <p className="label">Work Experience</p>
      {details.experiences.map((experience, index) => (
        <div className="list" key={index + 1}>
          <div className="row">
            <a href={experience.website} rel="noopener noreferrer" target="_blank" style={{ fontSize: 16, textDecoration: 'underline' }}> {`${experience.company}`}</a>
            <p style={{ margin: '0 4px' }}>|</p>
            <p className="detail">{experience.title}</p>
          </div>
          <p className="detail" style={{ margin: '4px 0 0' }}>{`Technologies: ${experience.stacks}`}</p>
          {experience["working"] && experience["working"].map((work, idx) => (
            <div className="column" key={idx + 1} style={{ margin: "8px 0" }}>
              <p className="detail" >{`${work.title}`}</p>
              <ul>
                {work.stories.map((detail, subIndex) => (
                  <li> <p className="detail" key={subIndex + 1}>{`${detail}`}</p></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;
