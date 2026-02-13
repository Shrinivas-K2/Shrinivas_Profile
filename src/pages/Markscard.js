import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../components/MarksCard.css';

const makeBtechData = (semester) => ({
  name: 'SRINIVASA K',
  srn: 'PES2UG22CS577',
  semester,
  examMonth: 'Dec 2024',
  issueDate: 'February 24, 2025',
  program: 'B.Tech. - Computer Science and Engineering',
  courses: [
    { code: 'UE22CS321A', title: 'Capstone Project Phase - I', credits: 2, grade: 'A' },
    { code: 'UE22CS341A', title: 'Software Engineering', credits: 4, grade: 'A' },
    { code: 'UE22CS342AA2', title: 'Data Analytics', credits: 4, grade: 'B' },
    { code: 'UE22CS343AB3', title: 'Graph Theory and Its Applications', credits: 4, grade: 'B' },
    { code: 'UE22CS351A', title: 'Database Management System', credits: 5, grade: 'C' },
    { code: 'UE22CS352A', title: 'Machine Learning', credits: 5, grade: 'C' },
  ],
});

const marksData = {
  btech: {
    '1': makeBtechData('First'),
    '2': makeBtechData('Second'),
    '3': makeBtechData('Third'),
    '4': makeBtechData('Fourth'),
    '5': makeBtechData('Fifth'),
    '6': makeBtechData('Sixth'),
    '7': makeBtechData('Seventh'),
    '8': makeBtechData('Eighth'),
  },
  school: {
    '0': {
      examType: 'PUC',
      name: 'SRINIVASA K',
      monthYear: 'April 2022',
      registerNo: '404446',
      mother: 'SAVITHRAMMA',
      father: 'KRISHNAPPA',
      college: 'GOVT PU COLLEGE, KALLIHALLI, BHADRAVATHI TQ, SHIVAMOGGA DT',
      collegeCode: '577233',
      subjects: [
        { name: 'KANNADA', reg: '404446', month: 'APR2022', max: 100, marks: 90, words: 'NINE ZERO' },
        { name: 'ENGLISH', reg: '404446', month: 'APR2022', max: 100, marks: 81, words: 'EIGHT ONE' },
        { name: 'PHYSICS', reg: '404446', month: 'APR2022', max: 100, marks: 96, words: 'NINE SIX' },
        { name: 'CHEMISTRY', reg: '404446', month: 'APR2022', max: 100, marks: 98, words: 'NINE EIGHT' },
        { name: 'MATHEMATICS', reg: '404446', month: 'APR2022', max: 100, marks: 98, words: 'NINE EIGHT' },
        { name: 'BIOLOGY', reg: '404446', month: 'APR2022', max: 100, marks: 98, words: 'NINE EIGHT' },
      ],
      total: 600,
      obtained: 549,
      obtainedWords: 'FIVE FOUR NINE',
      percentage: '92',
      result: 'DISTINCTION',
    },
    '1': {
      examType: 'High School',
      name: 'SRINIVASA K',
      monthYear: 'April 2020',
      registerNo: 'HS-XXXXXX',
      mother: 'SAVITHRAMMA',
      father: 'KRISHNAPPA',
      college: 'GOVT HIGH SCHOOL, HOLEHONNURU, SHIVAMOGGA DT',
      collegeCode: 'N/A',
      subjects: [
        { name: 'KANNADA', reg: 'HS-XXXXXX', month: 'APR2020', max: 100, marks: 92, words: 'NINE TWO' },
        { name: 'ENGLISH', reg: 'HS-XXXXXX', month: 'APR2020', max: 100, marks: 88, words: 'EIGHT EIGHT' },
        { name: 'MATHEMATICS', reg: 'HS-XXXXXX', month: 'APR2020', max: 100, marks: 91, words: 'NINE ONE' },
        { name: 'SCIENCE', reg: 'HS-XXXXXX', month: 'APR2020', max: 100, marks: 89, words: 'EIGHT NINE' },
        { name: 'SOCIAL STUDIES', reg: 'HS-XXXXXX', month: 'APR2020', max: 100, marks: 90, words: 'NINE ZERO' },
        { name: 'HINDI', reg: 'HS-XXXXXX', month: 'APR2020', max: 100, marks: 90, words: 'NINE ZERO' },
      ],
      total: 600,
      obtained: 540,
      obtainedWords: 'FIVE FOUR ZERO',
      percentage: '90',
      result: 'DISTINCTION',
    },
  },
};

function MarksCard() {
  const { sem, id } = useParams();
  const navigate = useNavigate();

  const schoolData = id ? marksData.school[id] : null;
  const isSchoolCard = Boolean(schoolData);
  const data = isSchoolCard ? schoolData : (sem ? marksData.btech[sem] : null);

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

  if (isSchoolCard) {
    return (
      <div className="marks-card-outer">
        <div className="marks-card">
          <div className="marks-header">
            <h2>{data.examType.toUpperCase()} MARKS CARD</h2>
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
          <div className="marks-info" style={{ marginTop: '18px' }}>
            <div><b>Total Marks:</b> {data.obtained} / {data.total}</div>
            <div><b>In Words:</b> {data.obtainedWords}</div>
            <div><b>Percentage:</b> {data.percentage}</div>
            <div><b>Result:</b> {data.result}</div>
          </div>
          <div className="marks-info" style={{ marginTop: '18px' }}>
            <div><b>School/College:</b> {data.college}</div>
            <div><b>Code:</b> {data.collegeCode}</div>
          </div>
          <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
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
