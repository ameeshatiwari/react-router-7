import { Link } from "react-router";
import UserDetails from "./UsersDetails";

export default function User() {
  const userData = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jack" },
    { id: 4, name: "Jill" },
    { id: 5, name: "Joe" },
    { id: 6, name: "Jim" },
    { id: 7, name: "Jill" },
  ];
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User Page</h1>
      {userData.map((item) => (
        <div>
          <h4>
            <Link t0={"/user/" + item.id}>{item.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
}
