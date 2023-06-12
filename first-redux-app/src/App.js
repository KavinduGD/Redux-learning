import NoramalState from "./components/NoramalState";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReduxComponent from "./components/ReduxComponent";
import UsecontextComponent from "./components/UseContextComponent";
import Home from "./components/Home/Home";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <NavBar />
      <div className="contain" style={{ marginLeft: "30" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/noramalstate" element={<NoramalState />}></Route>
          <Route path="/usecontext" element={<UsecontextComponent />}></Route>
          <Route path="/redux" element={<ReduxComponent />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
