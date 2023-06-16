import React, { useState } from "react";
import axios from "axios";

export default function StudentForm() {
  const [cID, setCID] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cID, name, course);
    try {
      const response = axios.post("http://localhost:3001/api/students/", {
        studentId: cID,
        name,
        course,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>
        <u>StudentForm</u>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student ID"
            value={cID}
            onChange={(e) => {
              setCID(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          ></input>
          <button type="submit">Add Student</button>
        </form>
      </h1>
    </div>
  );
}
