import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Chart1 from "./Chart1";
import Subsect1 from "./Subsect1";
import Chart2 from "./Chart2";
import "./Admin.css";
import "./Faculty.css";
import Subsect2 from "./Subsect2";
function Data() {
  const [sect, setSect] = useState("");
  const [data, setData] = useState(1);
  const history = useHistory();

  return (
    <div className="admin LogoF" style={{ color: "white" }}>
      <h1>Data</h1>
      <div className="tbl">
        <button
          onClick={() => {
            setSect(1);
          }}
          className="btn"
          style={{ color: "white" }}
        >
          One
        </button>
        <button
          onClick={() => {
            setSect(2);
          }}
          className="btn"
          style={{ color: "white" }}
        >
          Two
        </button>
        {sect === 1 && (
          <>
            <Chart1 /> <Subsect1 />
          </>
        )}

        {sect === 2 && (
          <>
            <Chart2 /> <Subsect2 />
          </>
        )}
      </div>
    </div>
  );
}

export default Data;
