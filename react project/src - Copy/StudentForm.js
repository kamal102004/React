// StudentForm.js

import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    studentClass: '',
    dob: '',
    city: '',
    busRoute: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to validate and handle form submission
    addStudent(formData);
    setFormData({
      name: '',
      rollNumber: '',
      studentClass: '',
      dob: '',
      city: '',
      busRoute: '',
    });
  };

  return (
    <div className="student">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit} className="student1">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Roll Number:
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Class:
          <input
            type="text"
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bus Route:
          <input
            type="text"
            name="busRoute"
            value={formData.busRoute}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className='link1' type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
