import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Register.css";
import Axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("");
  const [role, setRole] = useState("");
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/auth/register", {
      username: username,
      password: password,
      section: section,
      role: role,
    }).then((response) => {
      console.log(response.data);

      if (response.data.flag === false) {
        setErrorMessage(response.data.message);
      } else {
        setErrorMessage("You are registered now");
      }
      // history.push("/login");
    });
  };

  return (
    <div className="Register Logo">
      <h1> Register</h1>
      <div className="RegisterForm">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <select
          name="section"
          className="ibox"
          onChange={(e) => {
            setSection(e.target.value);
          }}
        >
          <option>Section</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select
          name="role"
          className="ibox"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option>Role</option>
          <option value="student">student</option>
          <option value="faculty">faculty</option>
        </select>
        <button onClick={register}>Register</button>
        <h1 style={{ color: "white", marginBottom: "200px" }}>
          {errorMessage}{" "}
        </h1>
      </div>
    </div>
  );
}

export default Register;
