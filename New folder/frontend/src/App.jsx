import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Students";
import Navbar from "./component/Navbar/Navbar";
import Todos from "./pages/Todos";
import StudentEdit from "./component/StudentComponents/StudentEdit";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/students" element={<Student />}></Route>{" "}
          <Route path="/students/:id" element={<StudentEdit />}></Route>
          <Route path="/todos" element={<Todos />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
