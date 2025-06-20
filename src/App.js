import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import Blog from './pages/Blog';
import MarksCard from './pages/Markscard';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <>
            <Home />
            <Contact />
          </>} />
        <Route path="/education" element={<> <Education /> <Contact/></>} />
        <Route path="/marks-card/btech/:sem" element={<><MarksCard /> <Contact/></>} />
        <Route path="/marks-card/puc/:id" element={<><MarksCard /> <Contact/></>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
