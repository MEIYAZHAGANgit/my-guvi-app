import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { name: 'Full Stack Development', path: '/courses/full-stack-development' },
  { name: 'Data Science', path: '/courses/data-science' },
  { name: 'Cyber Security', path: '/courses/cyber-security' },
  { name: 'Career Coaching', path: '/courses/career-coaching' },
];

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.name}>
            <Link to={course.path}>{
