import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function StudentEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const deleteStudent = () => {
    try {
      axios.delete(`http://localhost:3001/api/students/${id}`);
      navigate("/students");
    } catch (err) {
      console.log(err);
    }
  };

  const editStudent = () => {
    try {
      axios.put(`http://localhost:3001/api/students/${id}`, {
        studentId: sID,
        name,
        course,
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
