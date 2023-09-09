import React from "react";
import details from "../details";

const Skills = () => {
  return (
    <div className="skills">
      <p className="label">Skills</p>
      <div className="column">
        {/* Languages */}
        <div className="row align-center">
          <p style={{ marginTop: 8, marginRight: 8, fontWeight: 700 }}>Languages:</p>
          <div className="row">
            {details.languages.map((skill, index) => (
              <p className="detail" key={index + 1}><span>✓</span> {`${skill}`}</p>
            ))}
          </div>
        </div>
        {/* Frontend Skills */}
        <div className="row align-center">
          <p style={{ marginTop: 8, marginRight: 8, fontWeight: 700 }}>Frontend:</p>
          <div className="row">
            {details.frontendSkills.map((skill, index) => (
              <p className="detail" key={index + 1}><span>✓</span> {`${skill}`}</p>
            ))}
          </div>
        </div>
        {/* Backend Skills */}
        <div className="row align-center">
          <p style={{ marginTop: 8, marginRight: 8, fontWeight: 700 }}>Backend:</p>
          <div className="row">
            {details.backendSkills.map((skill, index) => (
              <p className="detail" key={index + 1}><span>✓</span> {`${skill}`}</p>
            ))}
          </div>
        </div>
        {/* Database Skills */}
        <div className="row align-center">
          <p style={{ marginTop: 8, marginRight: 8, fontWeight: 700 }}>Database:</p>
          <div className="row">
            {details.databaseSkills.map((skill, index) => (
              <p className="detail" key={index + 1}><span>✓</span> {`${skill}`}</p>
            ))}
          </div>
        </div>
        {/* Cloud Skills */}
        <div className="row align-center">
          <p style={{ marginTop: 8, marginRight: 8, fontWeight: 700 }}>Cloud computing:</p>
          <div className="row">
            {details.cloudSkills.map((skill, index) => (
              <p className="detail" key={index + 1}><span>✓</span> {`${skill}`}</p>
            ))}
          </div>
        </div>
        {/* Cloud Skills */}
        <div className="row align-center">
          <p style={{ marginTop: 8, marginRight: 8, fontWeight: 700 }}>UI Libraries:</p>
          <div className="row">
            {details.uiLibraries.map((skill, index) => (
              <p className="detail" key={index + 1}><span>✓</span> {`${skill}`}</p>
            ))}
          </div>
        </div>
        {/* Payment Gateways */}
        <div className="row align-center">
          <p style={{ marginTop: 8, marginRight: 8, fontWeight: 700 }}>Payment Integration:</p>
          <div className="row">
            {details.paymentGateways.map((skill, index) => (
              <p className="detail" key={index + 1}><span>✓</span> {`${skill}`}</p>
            ))}
          </div>
        </div>
         {/* Other Skills */}
         <div className="row align-start">
          <p style={{ marginTop: 8, marginRight: 8, fontWeight: 700 }}>Other Skills:</p>
          <div className="row" style={{ flexWrap: 'wrap' }}>
            {details.otherSkills.map((skill, index) => (
              <p className="detail" key={index + 1}><span>✓</span> {`${skill}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
