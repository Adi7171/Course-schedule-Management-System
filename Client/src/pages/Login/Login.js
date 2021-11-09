import React, { useState, useEffect } from "react";
import "./Login.css";
import Axios from "axios";
import Card from "@material-ui/core/Card";
import { useHistory, Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [section, setSection] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();

  Axios.defaults.withCredentials = true; // vv imp

  const login = async () => {
    await Axios.post("http://localhost:3001/auth/login", {
      username: username,
      password: password,
      role: role,
      section: section,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("section", response.data.section);
        // if (response.data.role === "admin") {
        //   history.push("/admin");
        // } else if (response.data.role === "faculty") {
        //   history.push("/faculty");
        // } else if (response.data.role === "student") {
        //   history.push("/student");
        // }
        history.push("/");
        window.location.reload();
      } else {
        setErrorMessage(response.data.message);
        history.push("/login");
      }
    });
  };

  return (
    <div className="Login Logo">
      {/* <Card className="LoginForm" variant="outlined"> */}

      <div className="LoginForm">
        <h1> Login</h1>
        {/* <label>Username</label> */}
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {/* <label>Password</label> */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
        {/* </Card> */}
      </div>
      <h1 style={{ color: "white", marginBottom: "200px" }}>{errorMessage} </h1>
    </div>
  );
}

export default Login;
