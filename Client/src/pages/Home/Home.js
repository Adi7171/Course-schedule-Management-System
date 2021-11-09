import React, { useState, useEffect } from "react";
import Axios from "axios";
import Student from "../../components/Student";
import Admin from "../../components/Admin";
import Faculty from "../../components/Faculty";
import Login from "../Login/Login";
import { Redirect, Route } from "react-router-dom";

function Home() {
  const [role, setRole] = useState("");

  const [logStat, setLogStat] = useState(true);
  // var errorStatus = (Axios.defaults.withCredentials = true);
  Axios.defaults.withCredentials = true; // vv imp
  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setLogStat(localStorage.getItem("loggedIn"));
    console.log(role);
  }, []);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/auth/login").then((response) => {
  //     setLogStat(localStorage.getItem("loggedIn"));
  //     console.log(response);

  // response.data.loggedIn = localStorage.getItem("loggedIn");
  // console.log(response.data.loggedIn);
  // if (response.data.loggedIn === true) {
  //   setRole(response.data.role);
  //   console.log(response.data.role);
  // }
  //   });
  // }, []);

  // Axios.get("http://localhost/3001/auth/login")
  //   .then((res) => {
  //     if (res.data.loggedIn === true) {
  //       console.log(res.data.role);
  //     }
  //   })
  //   .catch((error) => {
  //     if (!error.response) {
  //       // network error
  //       console.log("Error: Network Error");
  //     } else {
  //       console.log(error.response.data.message);
  //     }
  //   });

  // useEffect(() => {
  //   if (!localStorage.getItem("loggedIn")) {
  //     localStorage.setItem("loggedIn", false);
  //   }
  // }, []);

  if (logStat === false || logStat === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      {role === null ? (
        // <h1>Welcome Please Go to the login page</h1>
        <Login />
      ) : (
        <div>
          {role === "student" && <Student />}
          {role === "admin" && <Admin />}
          {role === "faculty" && <Faculty />}
        </div>
      )}
    </div>
  );
}

export default Home;
