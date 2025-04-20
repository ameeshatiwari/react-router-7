import { Link } from "react-router";
import { useParams } from "react-router";
export default function UserDetails() {
  const paramsData = useParams();
  console.log(paramsData.id);
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User Detail Page</h1>
      <h2>User ID: {paramsData.id}</h2>
    </div>
  );
}
