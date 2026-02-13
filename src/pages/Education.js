import '../components/Education.css';
import React from 'react';

const educationData = [
  {
    course: 'B.Tech in Computer Science',
    school: 'PES University',
    marks: 'CGPA: 7.7/10',
    desc: 'One of the top engineering colleges in Karnataka, known for research and industry exposure.',
    img: '/assets/PESU-EC-Campus.jpg',
    subjects: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'Python',
      'Java',
      'Web Development - MERN',
      'C and C++',
      'Cloud Computing',
      'Software Engineering',
      'Machine Learning',
      'Data Analytics',
      'System Design',
    ],
  },
  {
    course: 'Pre-University (PUC)',
    school: 'Govt PU College, Kallihal, Shivamogga',
    marks: 'Marks: 92%',
    desc: 'A well-established government college offering quality education in science and arts streams.',
    img: '/assets/High_School.jpeg',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
  },
  {
    course: 'High School',
    school: 'Govt High School, Holehonnuru, Shivamogga',
    marks: 'Marks: 90%',
    desc: 'A rural high school fostering disciplined learning with traditional values and modern practices.',
    img: '/assets/High_School.jpeg',
    subjects: [
      'Science',
      'Mathematics',
      'Social Studies',
      'English - Second Language',
      'Kannada - First Language',
      'Hindi - Third Language',
    ],
  },
];

function Education() {
  return (
    <section className="education-outer">
      <header className="education-intro">
        <p className="education-kicker">Academic Journey</p>
        <h1>Education</h1>
        <p>
          Strong foundation in computer science, analytical thinking, and practical project execution across school,
          pre-university, and engineering.
        </p>
      </header>

      <div className="education-list">
        {educationData.map((edu, index) => (
          <article className="education-fullscreen" key={edu.course}>
            <div className="education-main">
              <div className="education-details-block">
                <p className="education-index">0{index + 1}</p>
                <h2>{edu.course}</h2>
                <h3>{edu.school}</h3>
                <p className="marks">{edu.marks}</p>
                <p className="desc">{edu.desc}</p>
                <div className="education-meta">
                  <span>{edu.subjects.length} Core Subjects</span>
                  <span>Focused Learning</span>
                </div>
              </div>

              <div className="education-image-block">
                <img src={edu.img} alt={edu.school} />
              </div>
            </div>

            <div className="education-white-section">
              <h4>Key Subjects</h4>
              <div className="subject-grid">
                {edu.subjects.map((subject) => (
                  <div className="subject-item" key={subject}>
                    <span className="check-icon">&#10003;</span>
                    {subject}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
