import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <h1 style={{ display: "inline-block" }}>React App</h1>

        <div
          style={{
            display: "inline-block",
            marginLeft: "600px",
          }}
        >
          <Link to="/students">students</Link>
          <Link to="/todos">todos</Link>
        </div>
      </div>
    </>
  );
}
