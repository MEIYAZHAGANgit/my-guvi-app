import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Courses from './Courses';
import CourseDetails from './CourseDetails';
import About from './About'; // Add other components

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/about" element={<About />} /> // Add other routes
      </Routes>
    </Router>
  );
}

export default App;
