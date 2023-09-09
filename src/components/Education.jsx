import React from "react";
import details from "../details";

const Education = () => {
  return (
    <div className="education">
      <p className="label">Education</p>
      {details.education.map((ed, index) => (
        <div className="list" key={index + 1}>
          <h1 className="highlight">{ed.name}</h1>
          <p className="detail">{`${ed.description} | ${ed.grade} | ${ed.passingYear}`}</p>
          {ed.major ? <p className="detail">{`Major: `} <strong>{ed.major}</strong></p> : null}
          {ed.details ? <p className="detail" style={{ margin: "8px 0 0" }}>{ed.details}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default Education;
