import React, { useState, useEffect } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Subsect1 from "./Subsect1";
import Subsect2 from "./Subsect2";
import "./Faculty.css";
import "./Admin.css";

function Faculty() {
  const [section, setSection] = useState("");

  useEffect(() => {
    setSection(localStorage.getItem("section"));
    console.log(section);
  }, [localStorage.getItem("section")]);
  return (
    <div className="admin LogoF">
      <h1>Faculty</h1>
      lets torture some kids heheh
      <div>
        {section === "1" && (
          <>
            <Section1 /> <Subsect1 />
          </>
        )}
        {section === "2" && (
          <>
            <Section2 /> <Subsect2 />
          </>
        )}
      </div>
    </div>
  );
}

export default Faculty;
