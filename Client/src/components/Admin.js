import React, { useState } from "react";
import "./Admin.css";
import { withRouter, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
// import EditIcon from "@mui/icons-material/Edit";
import { MdModeEdit } from "react-icons/md";

import Axios from "axios";

function Admin() {
  const [sectionsOne, setSectionsOne] = useState([]);
  const [sectionsTwo, setSectionsTwo] = useState([]);
  const [sect, setSect] = useState("");
  const sectionOne = () => {
    Axios.get("http://localhost:3001/user/section1").then((response) => {
      console.log(response);
      setSectionsOne(response.data);
    });
  };
  const sectionTwo = () => {
    Axios.get("http://localhost:3001/user/section2").then((response) => {
      console.log(response);
      setSectionsTwo(response.data);
    });
  };

  return (
    <div className="admin Logo">
      <h1>Admin</h1>

      <div className="tbl" style={{ borderRadius: "10px" }}>
        <button
          className="btn"
          onClick={() => {
            sectionOne();
            setSect(1);
          }}
          style={{ color: "white" }}
        >
          One
        </button>
        <button
          className="btn"
          onClick={() => {
            sectionTwo();
            setSect(2);
          }}
          style={{ color: "white" }}
        >
          Two
        </button>

        <Table className="tblnew" variant="dark">
          <thead className="tblhead">
            <tr>
              <th>Day/Time</th>
              <th>period1</th>
              <th>period2</th>
              <th>period3</th>
              <th>period4</th>
              <th>period5</th>
              <th>period6</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {sect === 1 &&
              sectionsOne.map((val, key) => {
                return (
                  <tr>
                    <th>{val.day} </th>
                    <td>{val.period1} </td>
                    <td>{val.period2} </td>
                    <td>{val.period3} </td>
                    <td>{val.period4} </td>
                    <td>{val.period5} </td>
                    <td>{val.period6} </td>
                    <td>
                      <Link
                        to={{
                          pathname: `/edit/${val.id}`,
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <MdModeEdit size={20} style={{ color: "white" }} />
                        {/* <button className="btntbl">Edit user</button> */}
                      </Link>
                    </td>
                  </tr>
                );
              })}

            {sect === 2 &&
              sectionsTwo.map((val, key) => {
                return (
                  <tr>
                    <th>{val.day} </th>
                    <td>{val.period1} </td>
                    <td>{val.period2} </td>
                    <td>{val.period3} </td>
                    <td>{val.period4} </td>
                    <td>{val.period5} </td>
                    <td>{val.period6} </td>
                    <td>
                      <Link
                        to={{
                          pathname: `/edit/${val.id}`,
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <MdModeEdit size={20} style={{ color: "white" }} />
                        {/* <button className="btntbl">Edit user</button> */}
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default withRouter(Admin);
