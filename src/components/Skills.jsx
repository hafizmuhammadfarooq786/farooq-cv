import React from "react";
import details from "../details";

const Skills = () => {
  return (
    <div className="skills">
      <p className="label">Skills</p>
      <div className="column">
        {/* Languages */}
        <div className="row align-center">
          <p className="detail" style={{ marginTop: 8, marginRight: 8 }}>Languages:</p>
          <div className="row">
            {details.languages.map((skill, index) => (
              <p className="detail" key={index + 1}>{`${skill}${index !== details.languages.length - 1 ? ',' : ''}`}</p>
            ))}
          </div>
        </div>
        {/* Frontend Skills */}
        <div className="row align-center">
          <p className="detail" style={{ marginTop: 4, marginRight: 8 }}>Frontend:</p>
          <div className="row">
            {details.frontendSkills.map((skill, index) => (
              <p className="detail" key={index + 1}> {`${skill}${index !== details.frontendSkills.length - 1 ? ',' : ''}`}</p>
            ))}
          </div>
        </div>
        {/* Backend Skills */}
        <div className="row align-center">
          <p className="detail" style={{ marginTop: 4, marginRight: 8 }}>Backend:</p>
          <div className="row">
            {details.backendSkills.map((skill, index) => (
              <p className="detail" key={index + 1}> {`${skill}${index !== details.backendSkills.length - 1 ? ',' : ''}`}</p>
            ))}
          </div>
        </div>
        {/* Database Skills */}
        <div className="row align-center">
          <p style={{ marginTop: 4, marginRight: 8 }}>Database:</p>
          <div className="row">
            {details.databaseSkills.map((skill, index) => (
              <p className="detail" key={index + 1}> {`${skill}${index !== details.databaseSkills.length - 1 ? ',' : ''}`}</p>
            ))}
          </div>
        </div>
        {/* Cloud Skills */}
        <div className="row align-center">
          <p className="detail" style={{ marginTop: 4, marginRight: 8 }}>Cloud computing:</p>
          <div className="row">
            {details.cloudSkills.map((skill, index) => (
              <p className="detail" key={index + 1}> {`${skill}${index !== details.cloudSkills.length - 1 ? ',' : ''}`}</p>
            ))}
          </div>
        </div>
        {/* Cloud Skills */}
        <div className="row align-center">
          <p className="detail" style={{ marginTop: 4, marginRight: 8 }}>UI Libraries:</p>
          <div className="row">
            {details.uiLibraries.map((skill, index) => (
              <p className="detail" key={index + 1}> {`${skill} ${index !== details.uiLibraries.length - 1 ? ',' : ''}`}</p>
            ))}
          </div>
        </div>
        {/* Payment Gateways */}
        <div className="row align-center">
          <p className="detail" style={{ marginTop: 4, marginRight: 8 }}>Payment Integration:</p>
          <div className="row">
            {details.paymentGateways.map((skill, index) => (
              <p className="detail" key={index + 1}> {`${skill} ${index !== details.paymentGateways.length - 1 ? ',' : ''}`}</p>
            ))}
          </div>
        </div>
        {/* Other Skills */}
        <div className="row align-start">
          <p className="detail" style={{ marginTop: 4, marginRight: 8 }}>Other Skills:</p>
          <div className="row" style={{ flexWrap: 'wrap' }}>
            {details.otherSkills.map((skill, index) => (
              <p className="detail" key={index + 1}> {`${skill} ${index !== details.otherSkills.length - 1 ? ',' : ''}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
