import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Dashboard from "./Dashboard";
import Editpost from "./Editpost";
import Login from "./Login";
import Navbar from "./Navbar";
import Notice from "./Notice";
import Register from "./Register";
import Viewnotice from "./Viewnotice";
import CreateStudents from "./components/CreateStudents";
import EditStudent from "./components/EditStudent";
import Footer from "./components/Footer";
import Student from "./components/Student";
import Teacherinfo from "./components/Teacherinfo";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://gersdfgrvsd.onrender.com/dashboard")
      .then((user) => {
        setUser(user.data);
        console.log(user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/viewn/:id" element={<Viewnotice />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editpost/:id" element={<Editpost />}></Route>
          <Route path="/seminar" element={<Teacher />}></Route>
          <Route path="/teacher" element={<Teacherinfo />}></Route>
          <Route path="/student" element={<Student />}></Route>
          <Route path="/creatStudent" element={<CreateStudents />}></Route>
          <Route path="/editstudent/:id" element={<EditStudent />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
