import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleStudent from "./SingleStudent";

export default function StudentList() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/students");
        console.log(response.data);
        setStudents(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  if (!students) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>StudentList</h2>

      {students.map((student) => (
        <SingleStudent key={student.id} student={student} />
      ))}
    </>
  );
}
