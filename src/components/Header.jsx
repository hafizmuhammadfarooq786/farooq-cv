import React from "react";
import details from "../details";

const Header = () => {
  return (
    <div className="column align-center justify-center header">
      <h1 className="name">{details.name}</h1>
      {/* <h5 className="profession">{details.profession}</h5> */}
      <br />
      <div className="row align-center justify-between">
        <p>
          <a href="https://github.com/hafizmuhammadfarooq786" rel="noopener noreferrer" target="_blank">github.com/hafizmuhammadfarooq786</a>
        </p>
        <p style={{ margin: '0 4px' }}>|</p>
        <p>
          <a href="https://www.linkedin.com/in/hafizmuhammadfarooq" rel="noopener noreferrer" target="_blank">linkedin.com/in/hafizmuhammadfarooq</a>
        </p>
        <p style={{ margin: '0 4px' }}>|</p>
        <p>
          <a href="mailto:fahadmuuhammad661@gmail.com" rel="noopener noreferrer" target="_blank">fahadmuuhammad661@gmail.com</a>
        </p>
        <p style={{ margin: '0 4px' }}>|</p>
        <p>
          <a href="tel:+923134044978" rel="noopener noreferrer" target="_blank">+92-313-404-4978</a>
        </p>
      </div>
      <div className="separator" />
    </div>
  );
};

export default Header;
