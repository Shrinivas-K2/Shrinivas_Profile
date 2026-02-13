import React from 'react';
import '../components/Experience.css';

const experiences = [
  {
    role: 'Software Engineer Intern (Virtual)',
    duration: '2 Months',
    company: 'Maincrat Technologies',
    period: '2024',
    focus: 'Backend Engineering',
    highlights: [
      'Worked on backend fundamentals, including REST APIs, HTTP methods, and client-server architecture.',
      'Assisted in debugging application issues and improving API reliability through structured error handling.',
      'Tested endpoints with request validation and response checks to reduce common runtime failures.',
      'Collaborated on task planning, bug triage, and sprint-style delivery workflows used in real product teams.',
    ],
    tools: ['Node.js', 'Express', 'REST APIs', 'Postman', 'Git'],
  },
  {
    role: 'Full Stack Development Intern (Virtual)',
    duration: '4 Months',
    company: 'Oasis InfoByte',
    period: '2024',
    focus: 'Full Stack Development',
    highlights: [
      'Built full-stack applications covering frontend UI, backend business logic, and database integration.',
      'Implemented authentication and authorization workflows, including role-based access control.',
      'Developed CRUD modules with clean API contracts and reusable UI components for faster iteration.',
      'Strengthened production readiness by improving input validation, code structure, and deployment confidence.',
    ],
    tools: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'GitHub'],
  },
];

function Experience() {
  return (
    <section className="experience-page">
      <div className="experience-hero">
        <p className="experience-kicker">Experience and Internship</p>
        <h1>Building Real-World Engineering Skills</h1>
        <p className="experience-summary">
          Hands-on internship work across backend systems and full-stack application development, with practical
          focus on reliability, clean implementation, and product-oriented workflows.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <article className="experience-card" key={item.company}>
            <div className="experience-marker" aria-hidden="true">
              <span>{index + 1}</span>
            </div>
            <div className="experience-content">
              <div className="experience-head">
                <div>
                  <h2>{item.role}</h2>
                  <h3>{item.company}</h3>
                </div>
                <div className="experience-meta">
                  <span>{item.duration}</span>
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="experience-focus">{item.focus}</p>

              <ul className="experience-highlights">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="experience-tools">
                {item.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
