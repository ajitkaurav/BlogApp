import Header from "./Pages/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Blogs from "./Pages/Blog/Blogs";
import Create from "./Pages/Blog/Create";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogOutpage from "./Pages/LogOutpage";

function App() {
  return (
    <>
      <Header />
      <div className="container px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LogOutpage" element={<LogOutpage />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}
export default App;
