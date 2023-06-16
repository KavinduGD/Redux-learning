import React, { useContext, useEffect } from "react";
import { StudentContext } from "../context/Studentcontext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
  const navigate = useNavigate();
  const context = useContext(StudentContext);
  const { state, dispatch } = context;
  console.log("state", state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/students");
        console.log(response.data);
        dispatch({ type: "Add_Students", payload: response.data });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/students/${id}`);
  };

  return (
    <div>
      <h2>Student List</h2>
      {state.students.map(
        (student) =>
          student && ( // Add this check
            <div key={student._id}>
              <h3>{student.name}</h3>
              <p>Student ID: {student.studentId}</p>
              <p>Course: {student.course}</p>
              <button onClick={() => handleEdit(student._id)}>edit</button>
            </div>
          )
      )}
    </div>
  );
}
