import StudentForm from "../component/StudentComponents/StudentForm";
import StudentList from "../component/StudentComponents/StudentList";

export default function Student() {
  return (
    <>
      <div>
        <h1>Student Page</h1>
      </div>
      <StudentForm />
      <StudentList />
    </>
  );
}
