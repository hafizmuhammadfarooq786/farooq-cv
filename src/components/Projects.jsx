import React from "react";
import { details } from "../details";

const Projects = () => {
  return (
    <div className="projects">
      <p className="label">Software Projects</p>
      {details.projects.map((product, index) => (
        <div className="list" key={index + 1}>
          <div className="row align-center">
            <p className="detail">{product.name}</p>
            <span style={{ margin: "0 8px" }}>|</span>
            <p className="detail">{`${product.role}`}</p>
          </div>
          {product["products"] && (
            <div className="product-links">
              <a
                className="detail"
                style={{ textDecoration: 'underline' }}
                href={`${product["products"][0].url}`}
              >{`${product["products"][0].platform}`}</a>
              {product["products"][1] && ` | `}
              {product["products"][1] && (
                <a
                  className="detail"
                  style={{ textDecoration: 'underline' }}
                  href={`${product["products"][1].url}`}
                >{`${product["products"][1].platform}`}</a>
              )}
            </div>
          )}
          <p className="detail" style={{ margin: '4px 0' }}>{`Technologies: ${product.stacks}`}</p>
          <ul>
            {product.details.map((detail, subIndex) => (
              <li>
                <p className="detail" key={subIndex + 1}>{`${detail}`}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
