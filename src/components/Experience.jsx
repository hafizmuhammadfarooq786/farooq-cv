import React from "react";
import details from "../details";

const Experience = () => {
  return (
    <div className="experience">
      <br />
      <h1 className="label">Work Experience</h1>
      {details.experiences.map((experience, index) => (
        <div className="list" key={index + 1}>
          <div className="row">
            <a href={experience.website} rel="noopener noreferrer" target="_blank" style={{ fontSize: 16, textDecoration: 'underline', color: '#0791e8' }}> {`${experience.company}`}</a>
            <p style={{ margin: '0 4px' }}>|</p>
            <h5 style={{ fontSize: 16 }}>{experience.stacks}</h5>
          </div>
          <p className="detail" style={{ margin: '8px 0' }}>{experience.title}</p>
          {experience["working"] && experience["working"].map((work, idx) => (
            <div className="column" key={idx + 1} style={{ margin: "8px 0" }}>
              <h4 style={{ textDecoration: 'underline' }}>{`${work.title}`}</h4>
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
