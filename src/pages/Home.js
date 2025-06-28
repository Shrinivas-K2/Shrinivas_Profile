// src/components/Home.js
import React from 'react';
import '../components/Home.css';
//import profileImg from '../assets/Photo_01.jpg'; // adjust the path if needed

function Home() {
  return (
    <section className="home-section" id="home">
        <div  className="home-main">
            <div className="home-left">
            <h1>Hello, I’m <span>Shrinivas</span></h1>
            <p>
            I'm a passionate <strong>B.Tech CSE student</strong> and aspiring <strong>Web Developer & Data Analyst</strong> based in Bengaluru, India.
            I strive to build immersive and impactful applications through clean code and data-driven solutions.
            </p>

            <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Say Hello!
            </button>
            <div className="home-stats">
                <div><h2>0.6 Y.</h2><p>Experience</p></div>
                <div><h2>15+</h2><p>Projects Completed</p></div>
                <div><h2>4th Yr</h2><p>Education Status</p></div>
            </div>
            </div>
            <div className="home-right">
            <img src="/assets/Photo_01.jpg" alt="Profile" />
            </div>
        </div>
     

    <div className="skills-section">
      <h3 className="skills-title">Skills</h3>
      <div className="skills-marquee">
        <div className="skills-track">
          <div className="skill"><i className="devicon-html5-plain colored"></i><p>HTML</p></div>
          <div className="skill"><i className="devicon-css3-plain colored"></i><p>CSS</p></div>
          <div className="skill"><i className="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
          <div className="skill"><i className="devicon-react-original colored"></i><p>React</p></div>
          <div className="skill"><i className="devicon-python-plain colored"></i><p>Python</p></div>
          <div className="skill"><i className="devicon-git-plain colored"></i><p>Git</p></div>
          <div className="skill"><i className="devicon-java-plain colored"></i><p>OOPs</p></div>
          <div className="skill"><i className="devicon-github-original"></i><p>GitHub</p></div>
          <div className="skill"><i className="devicon-amazonwebservices-original colored"></i><p>AWS</p></div>
          <div className="skill"><i className="devicon-java-plain colored"></i><p>Java</p></div>
          <div className="skill"><i className="devicon-java-plain colored"></i><p>DSA in Java</p></div>
          <div className="skill"><i className="devicon-mysql-plain colored"></i><p>SBMS - SQL</p></div>
          <div className="skill"><i className="devicon-windows8-original colored"></i><p>Windows</p></div>
          <div className="skill"><i className="devicon-linux-plain colored"></i><p>Linux</p></div>
          <div className="skill"><i className="devicon-apple-original colored"></i><p>Mac</p></div>
        
          <div className="skill"><i className="devicon-html5-plain colored"></i><p>HTML</p></div>
          <div className="skill"><i className="devicon-css3-plain colored"></i><p>CSS</p></div>
          <div className="skill"><i className="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
          <div className="skill"><i className="devicon-react-original colored"></i><p>React</p></div>
          <div className="skill"><i className="devicon-python-plain colored"></i><p>Python</p></div>
          <div className="skill"><i className="devicon-git-plain colored"></i><p>Git</p></div>
          <div className="skill"><i className="devicon-java-plain colored"></i><p>OOPs</p></div>
          <div className="skill"><i className="devicon-github-original"></i><p>GitHub</p></div>
          <div className="skill"><i className="devicon-amazonwebservices-original colored"></i><p>AWS</p></div>
          <div className="skill"><i className="devicon-java-plain colored"></i><p>Java</p></div>
          <div className="skill"><i className="devicon-java-plain colored"></i><p>DSA in Java</p></div>
          <div className="skill"><i className="devicon-mysql-plain colored"></i><p>SBMS - SQL</p></div>
          <div className="skill"><i className="devicon-windows8-original colored"></i><p>Windows</p></div>
          <div className="skill"><i className="devicon-linux-plain colored"></i><p>Linux</p></div>
          <div className="skill"><i className="devicon-apple-original colored"></i><p>Mac</p></div>
        </div>
      </div>
    </div>

    </section> 
  );
}

export default Home;
