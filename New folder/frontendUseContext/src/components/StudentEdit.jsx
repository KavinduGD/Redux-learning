import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { StudentContext } from "../context/Studentcontext";
export default function StudentEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const context = useContext(StudentContext);
  const { dispatch } = context;

  const deleteStudent = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/students/${id}`);
      dispatch({ type: "Delete_Student", payload: id });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const editStudent = async () => {
    try {
      await axios.put(`http://localhost:3001/api/students/${id}`, {
        studentId: sID,
        name,
        course,
      });
      dispatch({
        type: "Update_Student",
        payload: { id, studentId: sID, name, course },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [sID, setSID] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/students/${id}`
        );
        console.log(response.data);
        setSID(response.data.studentId);
        setName(response.data.name);
        setCourse(response.data.course);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStudent();
  }, []);
  return (
    <div>
      <h1>
        Edit : {name} : {sID}
      </h1>
      <input
        type="text"
        value={sID}
        onChange={(e) => {
          setSID(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={course}
        onChange={(e) => {
          setCourse(e.target.value);
        }}
      ></input>

      <button onClick={editStudent}>Edit</button>
      <button onClick={deleteStudent}>Delete</button>
    </div>
  );
}
