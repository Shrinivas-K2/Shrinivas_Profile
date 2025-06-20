//import React from "react";
import "../components/Education.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const educationData = [
  {
    course: "B.Tech in Computer Science",
    school: "PES University",
    marks: "CGPA: 7.6/10",
    desc: "One of the top engineering colleges in Karnataka, known for research and industry exposure.",
    img: "/assets/PESU-EC-Campus.jpg",
    subjects: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Python",
      "Java",
      "Web Development- MERN",
      "C and C++",
      "Cloud Computing",
      "Software Engineering",
      "Machine Learning",
      "Data Analytics",
      "System Design"
    ]
  },
  {
    course: "Pre-University (PUC)",
    school: "Govt PU College, Kallihal, Shivamogga",
    marks: "Marks: 92%",
    desc: "A well-established government college offering quality education in science and arts streams.",
    img: "/assets/High_school.jpeg",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology"
    ]
  },
  {
    course: "High School",
    school: "Govt High School, Holehonnuru, Shivamogga",
    marks: "Marks: 90%",
    desc: "A rural high school fostering disciplined learning with traditional values and modern practices.",
   img: "/assets/High_school.jpeg",
   subjects: [
      "Science",
      "Mathematics",
      "Social Studies",
      "English - Second Language",
      "Kannada - First Language",
      "Hindi - Third Language"
    ]
  },
];

function Education() {
    const navigate = useNavigate();
  const [selectedSem, setSelectedSem] = useState("5");

  const handleViewMarks = (course, index) => {
    if (course === "B.Tech in Computer Science") {
      navigate(`/marks-card/btech/${selectedSem}`);
    }else if (course === "Pre-University (PUC)") {
    navigate(`/marks-card/puc/0`); // 0 for PUC
  } else if (course === "High School") {
    navigate(`/marks-card/9`); // 9 for High School (add data in marksData if needed)
  }
};
  return (
    <div className="education-outer">
      {educationData.map((edu, index) => (
        <section className="education-fullscreen" key={index}>
          <div className="education-main">
            {/* Left: Details */}
            <div className="education-details-block">
              <h2>{edu.course}</h2>
              <h3>{edu.school}</h3>
              <p className="marks">{edu.marks}</p>
              <p className="desc">{edu.desc}</p>
               {edu.course === "B.Tech in Computer Science" ? (
                <div style={{ marginTop: "16px" }}>
                  <label>
                    Semester:&nbsp;
                    <select
                      value={selectedSem}
                      onChange={e => setSelectedSem(e.target.value)}
                    >
                      <option value="1">1st</option>
                      <option value="2">2nd</option>
                      <option value="3">3rd</option>
                      <option value="4">4th</option>
                      <option value="5">5th</option>
                      <option value="6">6th</option>
                      <option value="7">7th</option>
                      <option value="8">8th</option>
                    </select>
                  </label>
                  <button
                    className="marks-btn"
                    onClick={() => handleViewMarks(edu.course, index)}
                  >
                    View Certificate
                  </button>
                </div>
              ) : (
                <button
                  className="marks-btn"
                  style={{ marginTop: "16px" }}
                  onClick={() => handleViewMarks(edu.course, index)}
                >
                  View Certificate
                </button>
              )}
            </div>
            {/* Right: Colorful block with image */}
            <div className="education-image-block">
              <img src={edu.img} alt="School" />
            </div>
          </div>
          {/* Pink section below */}
           <div className="education-white-section">
            <div className="subject-grid">
              {edu.subjects.map((subject, idx) => (
                <div className="subject-item" key={idx}>
                  <span className="check-icon">&#10003;</span>
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Education;