import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import { useHistory } from "react-router-dom";
function Navbar() {
  const [loggedIn, setLoggedIn] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    // console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn"));
    setRole(localStorage.getItem("role"));
    // console.log(loggedIn);
  }, []);

  function logout() {
    // localStorage.setItem("loggedIn", false);
    setLoggedIn(localStorage.getItem("loggedIn"));
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("section");
    localStorage.removeItem("data1");
    localStorage.removeItem("data2");
    localStorage.removeItem("label1");
    localStorage.removeItem("label2");

    window.location.reload();
  }

  return (
    <div className="Navbar">
      {loggedIn ? (
        <>
          {role === "admin" && <a href="/data">Data</a>}
          <a href="/">Home</a>
          <a href="/login" onClick={logout}>
            Logout
          </a>
          {}
        </>
      ) : (
        <>
          <a href="/login">Home</a>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </>
      )}
    </div>
  );
}

export default Navbar;
