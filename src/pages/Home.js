import React, { useEffect, useRef } from 'react';
import '../components/Home.css';

function Home() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext('2d');
    const pointer = { x: -9999, y: -9999 };
    const stars = [];
    const STAR_COUNT = 64;
    const LINK_DISTANCE = 120;
    let rafId = null;

    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();
      canvas.width = Math.floor(rect.width);
      canvas.height = Math.floor(rect.height);
      createStars();
    };

    const createStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i += 1) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 1.8 + 1.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        const dx = pointer.x - star.x;
        const dy = pointer.y - star.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > 1 && d < 110) {
          star.x -= (dx / d) * 0.22;
          star.y -= (dy / d) * 0.22;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76, 115, 255, 0.85)';
        ctx.fill();
      }

      for (let i = 0; i < stars.length; i += 1) {
        for (let j = i + 1; j < stars.length; j += 1) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = 1 - dist / LINK_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(105, 131, 255, ${alpha * 0.25})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);
    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section className="home-section" id="home" ref={sectionRef}>
      <canvas ref={canvasRef} className="home-star-canvas" />
      <div className="home-main">
        <div className="home-left">
          <h1>Hello, I'm <span>Shrinivas</span></h1>
          <p>
            I'm a passionate <strong>B.Tech CSE student</strong> and aspiring <strong>Web Developer and Data Analyst</strong> based in Bengaluru, India.
            I strive to build immersive and impactful applications through clean code and data-driven solutions.
          </p>

          <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Say Hello!
          </button>
          <div className="home-stats">
            <div><h2>Fresher</h2><p>Experience</p></div>
            <div><h2>15+</h2><p>Projects Completed</p></div>
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
            <div className="skill"><i className="devicon-mysql-plain colored"></i><p>DBMS - SQL</p></div>
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
            <div className="skill"><i className="devicon-mysql-plain colored"></i><p>DBMS - SQL</p></div>
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
