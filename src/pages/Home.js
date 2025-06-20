// src/components/Home.js
import React from 'react';
import '../components/Home.css';
//import profileImg from '../assets/Photo_01.jpg'; // adjust the path if needed

function Home() {
  return (
    <section className="home-section" id="home">
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
            <div><h2>3 Y.</h2><p>Experience</p></div>
            <div><h2>15+</h2><p>Projects Completed</p></div>
            <div><h2>10+</h2><p>Happy Clients</p></div>
        </div>

      </div>
      <div className="home-right">
       <img src="/assets/Photo_01.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default Home;
