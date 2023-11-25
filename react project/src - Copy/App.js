// App.js

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import './styles.css'; // Import your stylesheet

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [students, setStudents] = useState([]);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  const handleSignup = () => {
    setAuthenticated(true);
  };

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <Navbar authenticated={authenticated} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={<LoginForm handleLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupForm handleSignup={handleSignup} />}
        />
        {authenticated ? (
          <>
            <Route
              path="/home"
              element={
                <div className="home-container">
                  <div className="form-container">
                    <StudentForm addStudent={addStudent} />
                  </div>
                  <div className="list-container">
                    <StudentList students={students} deleteStudent={deleteStudent} />
                  </div>
                </div>
              }
            />
            <Route
              path="/students"
              element={<StudentList students={students} deleteStudent={deleteStudent} />}
            />
            <Route path="/" element={<Navigate to="/home" />} />
          </>
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
