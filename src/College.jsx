import { Link, NavLink, Outlet } from "react-router";
import "./Student";
import "./Department";
import "./Detials";

export default function College() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h1>College Page</h1>
      <h3>
        <Link to="/">to go back to home page</Link>{" "}
      </h3>
      <NavLink className="link" to="/student">
        Student
      </NavLink>
      <NavLink className="link" to="/department">
        Department
      </NavLink>
      <NavLink className="link" to="/detials">
        College details
      </NavLink>
      <Outlet />
    </div>
  );
}
