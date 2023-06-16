import React, { useContext, useState } from "react";
import axios from "axios";
import { StudentContext } from "../context/Studentcontext";

export default function StudentForm() {
  const context = useContext(StudentContext);
  const { state, dispatch } = context;
  console.log("state form", state);

  const [cID, setCID] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(cID, name, course);
    try {
      const response = await axios.post("http://localhost:3001/api/students/", {
        studentId: cID,
        name,
        course,
      });
      dispatch({ type: "Add_One_Student", payload: response.data.student }); // Make sure the correct data is extracted
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
