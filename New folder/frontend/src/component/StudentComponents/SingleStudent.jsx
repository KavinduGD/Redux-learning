import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function (props) {
  const navigate = useNavigate();

  const updateStudent = () => {
    navigate(`/students/${props.student._id}`);
  };
  return (
    <div>
      <Link to="/students/{student._id}">
        <h1>{props.student.studentId}</h1>
      </Link>

      <h3>{props.student.name}</h3>
      <h3>{props.student.course}</h3>
      <button onClick={updateStudent}>update</button>
    </div>
  );
}
