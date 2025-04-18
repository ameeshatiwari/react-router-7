import { Route, Routes, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./login";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="/*" element={<Navigate to="/login" />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
