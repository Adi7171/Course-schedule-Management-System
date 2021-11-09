import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./Admin.css";
import Axios from "axios";

function Section1() {
  const [sectionsOne, setSectionsOne] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/user/section1").then((response) => {
      console.log(response);
      setSectionsOne(response.data);
    });
  }, []);

  return (
    <div className="tbl">
      <Table className="tblnew" variant="dark" size="lg">
        <thead>
          <th>Day/Time</th>
          <th>period1</th>
          <th>period2</th>
          <th>period3</th>
          <th>period4</th>
          <th>period5</th>
          <th>period6</th>
        </thead>
        <tbody>
          {sectionsOne.map((val, key) => {
            return (
              <tr>
                <th>{val.day} </th>
                <td>{val.period1} </td>
                <td>{val.period2} </td>
                <td>{val.period3} </td>
                <td>{val.period4} </td>
                <td>{val.period5} </td>
                <td>{val.period6} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Section1;
