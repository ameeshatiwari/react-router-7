import { Route, Routes, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./login";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Detials"; // make sure "Detials" is not a typo!
import User from "./User";
import UserDetails from "./UsersDetails";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Route>

        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/*" element={<Navigate to="/" />}></Route>
        {/* Or if you want to redirect all unknown routes to login: */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

export default App;
