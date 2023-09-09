import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <main className="column align-center justify-center">
      <Header />
      <div className="row align-start justify-between padding-24">
        <div className="column">
          <Skills />
          <Education />
          <Projects />
        </div>
        <div style={{ width: 32 }} />
        <div className="column">
          <Experience />
        </div>
      </div>
    </main>
  );
};

export default Home;
