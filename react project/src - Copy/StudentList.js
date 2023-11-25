// StudentList.js

import React from 'react';

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="student-list-container">
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            Name: {student.name} - Roll Number: {student.rollNumber} - Class: {student.studentClass} - DOB: {student.dob} - City: {student.city} - Bus Route: {student.busRoute}
            <button className='link2' onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
