import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Section1 from "./Section1";
import Section2 from "./Section2";
import "./Admin.css";
function Student() {
  // const [sect, setSect] = useState("");
  const [section, setSection] = useState("");

  useEffect(() => {
    setSection(localStorage.getItem("section"));
    console.log(section);
  }, [localStorage.getItem("section")]);

  return (
    <div className="admin Logo">
      <h1>Student</h1>

      <div>
        {section === "1" && <Section1 />}
        {section === "2" && <Section2 />}
      </div>
    </div>
  );
}

export default withRouter(Student);
