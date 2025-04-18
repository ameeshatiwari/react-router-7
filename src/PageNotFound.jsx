import { Link } from "react-router";
export default function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <h2>404 Error</h2>
      <div>
        {" "}
        <Link to="/">Go To Home Page</Link>
      </div>

      <img src="src\assets\404.jpg" alt="404 Error" />
    </div>
  );
}
