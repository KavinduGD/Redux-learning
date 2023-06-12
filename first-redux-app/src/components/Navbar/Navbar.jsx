import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="lol">
        <Link to="/">
          <h1 className="nav-title">Redux Learning</h1>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/noramalstate">Normal State</Link>
        <Link to="/usecontext">Use Context</Link>
        <Link to="/redux">Redux</Link>
      </div>
    </div>
  );
}
