import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <main className="column align-center justify-center relative">
      <a className="download_button" href="https://res.cloudinary.com/farooq-cloud-db/image/upload/v1694642413/muhammad-farooq-resume_wopid2.pdf" rel="noopener noreferrer" target="_blank" >
        <p className="detail">Download</p>
      </a>
      <Header />
      <div className="row align-start justify-between padding-24">
        <div className="column">
          <Experience />
        </div>
        <div style={{ width: 32 }} />
        <div className="column">
          <Skills />
          <Education />
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default Home;
