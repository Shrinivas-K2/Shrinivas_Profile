import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../components/MarksCard.css";

const marksData = {
  btech: {
    "5": {
      name: "SRINIVASA K",
      srn: "PES2UG22CS577",
      semester: "Fifth",
      examMonth: "Dec 2024",
      issueDate: "February 24, 2025",
      program: "B.Tech. - Computer Science and Engineering",
      courses: [
        { code: "UE22CS321A", title: "Capstone Project Phase - I", credits: 2, grade: "A" },
        { code: "UE22CS341A", title: "Software Engineering", credits: 4, grade: "A" },
        { code: "UE22CS342AA2", title: "Data Analytics", credits: 4, grade: "B" },
        { code: "UE22CS343AB3", title: "Graph Theory, and its Applications", credits: 4, grade: "B" },
        { code: "UE22CS351A", title: "Database Management System", credits: 5, grade: "C" },
        { code: "UE22CS352A", title: "Machine Learning", credits: 5, grade: "C" },
      ]
    },
    // Add more semesters if needed
     "4": {
      name: "SRINIVASA K",
      srn: "PES2UG22CS577",
      semester: "Fifth",
      examMonth: "Dec 2024",
      issueDate: "February 24, 2025",
      program: "B.Tech. - Computer Science and Engineering",
      courses: [
        { code: "UE22CS321A", title: "Capstone Project Phase - I", credits: 2, grade: "A" },
        { code: "UE22CS341A", title: "Software Engineering", credits: 4, grade: "A" },
        { code: "UE22CS342AA2", title: "Data Analytics", credits: 4, grade: "B" },
        { code: "UE22CS343AB3", title: "Graph Theory, and its Applications", credits: 4, grade: "B" },
        { code: "UE22CS351A", title: "Database Management System", credits: 5, grade: "C" },
        { code: "UE22CS352A", title: "Machine Learning", credits: 5, grade: "C" },
      ]
    },

   "3": {
      name: "SRINIVASA K",
      srn: "PES2UG22CS577",
      semester: "Fifth",
      examMonth: "Dec 2024",
      issueDate: "February 24, 2025",
      program: "B.Tech. - Computer Science and Engineering",
      courses: [
        { code: "UE22CS321A", title: "Capstone Project Phase - I", credits: 2, grade: "A" },
        { code: "UE22CS341A", title: "Software Engineering", credits: 4, grade: "A" },
        { code: "UE22CS342AA2", title: "Data Analytics", credits: 4, grade: "B" },
        { code: "UE22CS343AB3", title: "Graph Theory, and its Applications", credits: 4, grade: "B" },
        { code: "UE22CS351A", title: "Database Management System", credits: 5, grade: "C" },
        { code: "UE22CS352A", title: "Machine Learning", credits: 5, grade: "C" },
      ]
    },

     "2": {
      name: "SRINIVASA K",
      srn: "PES2UG22CS577",
      semester: "Fifth",
      examMonth: "Dec 2024",
      issueDate: "February 24, 2025",
      program: "B.Tech. - Computer Science and Engineering",
      courses: [
        { code: "UE22CS321A", title: "Capstone Project Phase - I", credits: 2, grade: "A" },
        { code: "UE22CS341A", title: "Software Engineering", credits: 4, grade: "A" },
        { code: "UE22CS342AA2", title: "Data Analytics", credits: 4, grade: "B" },
        { code: "UE22CS343AB3", title: "Graph Theory, and its Applications", credits: 4, grade: "B" },
        { code: "UE22CS351A", title: "Database Management System", credits: 5, grade: "C" },
        { code: "UE22CS352A", title: "Machine Learning", credits: 5, grade: "C" },
      ]
    },

     "1": {
      name: "SRINIVASA K",
      srn: "PES2UG22CS577",
      semester: "First",
      examMonth: "Dec 2024",
      issueDate: "February 24, 2025",
      program: "B.Tech. - Computer Science and Engineering",
      courses: [
        { code: "UE22CS321A", title: "Capstone Project Phase - I", credits: 2, grade: "A" },
        { code: "UE22CS341A", title: "Software Engineering", credits: 4, grade: "A" },
        { code: "UE22CS342AA2", title: "Data Analytics", credits: 4, grade: "B" },
        { code: "UE22CS343AB3", title: "Graph Theory, and its Applications", credits: 4, grade: "B" },
        { code: "UE22CS351A", title: "Database Management System", credits: 5, grade: "C" },
        { code: "UE22CS352A", title: "Machine Learning", credits: 5, grade: "C" },
      ]
    },

     "6": {
      name: "SRINIVASA K",
      srn: "PES2UG22CS577",
      semester: "Fifth",
      examMonth: "Dec 2024",
      issueDate: "February 24, 2025",
      program: "B.Tech. - Computer Science and Engineering",
      courses: [
        { code: "UE22CS321A", title: "Capstone Project Phase - I", credits: 2, grade: "A" },
        { code: "UE22CS341A", title: "Software Engineering", credits: 4, grade: "A" },
        { code: "UE22CS342AA2", title: "Data Analytics", credits: 4, grade: "B" },
        { code: "UE22CS343AB3", title: "Graph Theory, and its Applications", credits: 4, grade: "B" },
        { code: "UE22CS351A", title: "Database Management System", credits: 5, grade: "C" },
        { code: "UE22CS352A", title: "Machine Learning", credits: 5, grade: "C" },
      ]
    },

     "7": {
      name: "SRINIVASA K",
      srn: "PES2UG22CS577",
      semester: "Fifth",
      examMonth: "Dec 2024",
      issueDate: "February 24, 2025",
      program: "B.Tech. - Computer Science and Engineering",
      courses: [
        { code: "UE22CS321A", title: "Capstone Project Phase - I", credits: 2, grade: "A" },
        { code: "UE22CS341A", title: "Software Engineering", credits: 4, grade: "A" },
        { code: "UE22CS342AA2", title: "Data Analytics", credits: 4, grade: "B" },
        { code: "UE22CS343AB3", title: "Graph Theory, and its Applications", credits: 4, grade: "B" },
        { code: "UE22CS351A", title: "Database Management System", credits: 5, grade: "C" },
        { code: "UE22CS352A", title: "Machine Learning", credits: 5, grade: "C" },
      ]
    }
},
  // Add other courses if needed
  puc: {
    "0": {
      name: "SRINIVASA K",
      monthYear: "April 2022",
      registerNo: "404446",
      mother: "SAVITHRAMMA",
      father: "KRISHNAPPA",
      college: "GOVT PU COLLEGE, KALLIHALLI, BHADRAVATHI TQ, SHIVAMOGGA DT",
      collegeCode: "577233",
      subjects: [
        { name: "KANNADA", reg: "404446", month: "APR2022", max: 100, marks: 90, words: "NINE ZERO" },
        { name: "ENGLISH", reg: "404446", month: "APR2022", max: 100, marks: 81, words: "EIGHT ONE" },
        { name: "PHYSICS", reg: "404446", month: "APR2022", max: 100, marks: 96, words: "NINE SIX" },
        { name: "CHEMISTRY", reg: "404446", month: "APR2022", max: 100, marks: 98, words: "NINE EIGHT" },
        { name: "MATHEMATICS", reg: "404446", month: "APR2022", max: 100, marks: 98, words: "NINE EIGHT" },
        { name: "BIOLOGY", reg: "404446", month: "APR2022", max: 100, marks: 98, words: "NINE EIGHT" },
      ],
      total: 600,
      obtained: 549,
      obtainedWords: "FIVE FOUR NINE",
      percentage: "92",
      result: "DISTINCTION"
    }
  }
};

function MarksCard() {
  const { sem, id } = useParams();
  const navigate = useNavigate();

  // Detect if PUC
  const isPUC = id === "0";
  const data = isPUC ? marksData.puc["0"] : (sem ? marksData.btech[sem] : null);

  if (!data) {
    return (
      <div className="marks-card-outer">
        <div className="marks-card">
          <h2>Marks Card Not Found</h2>
          <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  // PUC Marks Card
  if (isPUC) {
    return (
      <div className="marks-card-outer">
        <div className="marks-card">
          <div className="marks-header">
            <h2>PUC MARKS CARD</h2>
          </div>
          <div className="marks-info">
            <div><b>Candidate's Name:</b> {data.name}</div>
            <div><b>Month/Year:</b> {data.monthYear}</div>
            <div><b>Mother's Name:</b> {data.mother}</div>
            <div><b>Register No:</b> {data.registerNo}</div>
            <div><b>Father's Name:</b> {data.father}</div>
          </div>
          <table className="marks-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Register No</th>
                <th>Month/Year</th>
                <th>Max Marks</th>
                <th>Marks Obtained</th>
                <th>In Words</th>
              </tr>
            </thead>
            <tbody>
                {data.subjects.map((subj, idx) => (
                <tr key={idx}>
                  <td>{subj.name}</td>
                  <td>{subj.reg}</td>
                  <td>{subj.month}</td>
                  <td>{subj.max}</td>
                  <td>{subj.marks}</td>
                  <td>{subj.words}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="marks-info" style={{marginTop: "18px"}}>
            <div><b>Total Marks:</b> {data.obtained} / {data.total}</div>
            <div><b>In Words:</b> {data.obtainedWords}</div>
            <div><b>Percentage:</b> {data.percentage}</div>
            <div><b>Result:</b> {data.result}</div>
          </div>
          <div className="marks-info" style={{marginTop: "18px"}}>
            <div><b>College:</b> {data.college}</div>
            <div><b>College Code:</b> {data.collegeCode}</div>
          </div>
          <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    );
  }


  // Example: Only B.Tech 5th sem is shown here
  //const data = sem ? marksData.btech[sem] : null;

  if (!data) {
    return (
      <div className="marks-card-outer">
        <div className="marks-card">
          <h2>Marks Card Not Found</h2>
          <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="marks-card-outer">
      <div className="marks-card">
        <div className="marks-header">
          <h2>MARKS CARD</h2>
        </div>
        <div className="marks-info">
          <div><b>Name of the Student:</b> {data.name}</div>
          <div><b>SRN:</b> {data.srn}</div>
          <div><b>Semester:</b> {data.semester}</div>
          <div><b>Month and Year of Exam:</b> {data.examMonth}</div>
          <div><b>Program of Study:</b> {data.program}</div>
          <div><b>Date of Issue:</b> {data.issueDate}</div>
        </div>
        <table className="marks-table">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Credits</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {data.courses.map((course, idx) => (
              <tr key={course.code}>
                <td>{idx + 1}</td>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.credits}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default MarksCard;