import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./Admin.css";
import Table from "react-bootstrap/Table";

function Subsect2() {
  const [sectionsTwo, setSectionsTwo] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/user/periodslist2").then((response) => {
      console.log(response.data[0].count);
      setSectionsTwo(response.data);
    });
  }, []);

  // const [chartData, setChartData] = useState({});

  // var labels = sectionsTwo.map(function (e) {
  //   if (e.periods === null) {
  //     e.periods = "free";
  //   }
  //   return e.periods;
  // });
  // var data = sectionsTwo.map(function (e) {
  //   return e.count;
  // });

  // const chart = () => {
  //   setChartData({
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "Bar Graph",
  //         data: data,
  //         backgroundColor: "rgba(0, 119, 204, 0.3)",
  //       },
  //     ],
  //   });
  // };

  return (
    <div>
      <Table className="tblnew" variant="dark" size="lg">
        <thead>
          <th>Subject</th>
          <th>Count</th>
        </thead>
        {sectionsTwo.map((val, key) => {
          return (
            <tbody>
              <tr>
                <td> {val.periods === null ? "free" : val.periods} </td>
                <td> {val.count}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default Subsect2;
