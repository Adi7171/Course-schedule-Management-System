import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./Admin.css";
import Table from "react-bootstrap/Table";

function Subsect1() {
  const [sectionsOne, setSectionsOne] = useState([]);

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/user/periodslist1").then((response) => {
      console.log(response.data[0].count);
      console.log(response.data[3].periods);

      setSectionsOne(response.data);
    });
  }, []);

  // useEffect(() => {
  //   sectionsOne.map((val, key) => {
  //     setLabels(val.periods);
  //     setData(val.count);
  //     console.log(val.periods);
  //   });
  // }, []);

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

  // useEffect(() => {
  //   chart();
  // }, []);

  return (
    <div>
      <Table className="tblnew" variant="dark" size="lg">
        <thead>
          <th>Subject</th>
          <th>Count</th>
        </thead>
        {sectionsOne.map((val, key) => {
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

      {/* <Bar
        data={chartData}
        style={{
          height: 100,
          width: 100,
        }}
        options={{ responsive: true }}
      /> */}
    </div>
  );
}

export default Subsect1;
