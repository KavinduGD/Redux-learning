import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/StudentPage";
import StudentEdit from "./components/StudentEdit";

function App() {
  return (
    <BrowserRouter>
      <>
        <h1>Student Page</h1>
        <Routes>
          <Route path="/" element={<StudentPage />}></Route>
          <Route path="/students/:id" element={<StudentEdit />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
