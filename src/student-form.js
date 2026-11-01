
import React from 'react';

function StudentForm() {
  return (
    <div>
      <h2>Student Registration Form</h2>

      <form>
        <label>Student Name:</label>
        <input type="text" placeholder="Enter name" />
        <br /><br />

        <label>Email:</label>
        <input type="email" placeholder="Enter email" />
        <br /><br />

        <label>Course:</label>
        <input type="text" placeholder="Enter course" />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentForm;
