import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Dastaload from "./page/Dastaload";
import Mores from "./page/Mores";
import { Box } from "@mui/material";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Login from "./page/Login";
import Register from "./page/Register";
import EmployeedDetails from "./components/EmployeedDetails";
import Profile from "./page/Profile";
import RegisterForm from "./page/login/RegisterForm";
import LoginForm from "./page/login/LoginForm";
import Siderbar from "./components/Siderbar";
import PersonlPage from "./components/PersonlPage";
import Test from "./page/Test";
function App() {
  const [todoId, setTodoId] = useState(null);

  return (
    <>
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Siderbar />
          <Routes>
            <Route path="/profile" exat element={<Profile />} />
            <Route path="/personlPage" exat element={<PersonlPage />} />
            <Route path="/registerform" exat element={<RegisterForm />} />
            <Route path="/loginform" exat element={<LoginForm />} />
            <Route path="/login" exat element={<Login />} />
            <Route path="/register" exat element={<Register />} />
            <Route path="/" exat element={<Home />} />
            <Route path="/details" component={EmployeedDetails} />
            <Route path="/about" exat element={<About />} />
            <Route path="/test" exat element={<Test />} />

            <Route
              path="/dastaload"
              exat
              element={<Dastaload setTodoId={setTodoId} />}
            />
            <Route
              path="/mores"
              exat
              element={<Mores todoId={todoId} setTodoId={setTodoId} />}
            />
            <Route path="/update/:id" exat element={<Mores />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
