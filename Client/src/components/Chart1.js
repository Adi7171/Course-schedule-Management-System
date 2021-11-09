import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Admin.css";
import { Chart, defaults, Bar } from "react-chartjs-2";
function Chart1() {
  // const [chartData, setChartData] = useState([]);
  // const [sectionsOne, setSectionsOne] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/user/periodslist1").then((response) => {
  //     console.log(response.data[0].count);
  //     console.log(response.data[3].periods);

  //     setSectionsOne(response.data);
  //   });
  // }, []);

  // const labels = sectionsOne.map((e) => {
  //   if (e.periods === null || e.periods === "") {
  //     e.periods = "free";
  //   }
  //   return e.periods;
  // });

  // const data = sectionsOne.map((e) => {
  //   return e.count;
  // });

  // useEffect(() => {
  //   localStorage.setItem("label1", JSON.stringify(labels));
  // });

  // useEffect(() => {
  //   localStorage.setItem("data1", JSON.stringify(data));
  // });

  // const label1 = JSON.parse(localStorage.getItem("label1"));
  // const data1 = JSON.parse(localStorage.getItem("data1"));
  // console.log("dat1", data1);

  // const chart = () => {
  //   setChartData({
  //     labels: label1,
  //     datasets: [
  //       {
  //         label: "# of Votes",

  //         data: data1,
  //         backgroundColor: ["Blue", "Yellow", "Green"],
  //         borderColor: ["Blue", "Yellow", "Green"],
  //         borderWidth: 1,
  //         color: ["white"],
  //       },
  //     ],
  //   });
  // };

  // Chart.defaults.color = "white";
  // useEffect(() => {
  //   chart();
  // }, []);

  // return (
  //   <div className="chart" style={{ width: "500px", height: "300px" }}>
  //     {/* <canvas id="myChart1" width="200" height="200" /> */}
  //     <Bar
  //       data={chartData}
  //       options={{
  //         responsive: true,
  //       }}
  //     />

  //     {/* <Bar data={chartData} /> */}
  //   </div>
  // );

  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const Chart = () => {
    // Chart.defaults.color = "white";
    let dt = [];
    let lb = [];

    Axios.get("http://localhost:3001/user/periodslist1")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          if (dataObj.periods === null || dataObj.periods === " ") {
            dataObj.periods = "free";
          }
          dt.push(parseInt(dataObj.count));
          lb.push(dataObj.periods);
        }
        setChartData({
          labels: lb,
          datasets: [
            {
              label: "level of thicceness",
              data: dt,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
              color: "white",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Chart.defaults.color = "white";
  defaults.color = "white";
  useEffect(() => {
    Chart();
  }, []);
  return (
    <div className="chart" style={{ width: "600px", height: "350px" }}>
      <h1>Bar Chart</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            legend: {
              labels: {
                fontColor: "white",
              },
            },
            scales: {
              y: {
                // <-- axis is not array anymore, unlike before in v2.x: '[{'
                grid: {
                  // color: "white",
                  borderColor: "green", // <-- this line is answer to initial question
                },
                labels: {
                  fontColor: "white",
                  fontSize: 14,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Chart1;

// var chart = new Chart(ctx, config);

// useEffect(() => {
//   let lbl = [];
//   let count = [];
//   Axios.get("http://localhost:3001/user/periodslist1").then((response) => {
//     console.log(response.data[0].count);
//     console.log(response.data[3].periods);

//     const football = response.data;

//     football.forEach((element) => {
//       if (element.periods === null || element.periods === " ") {
//         element.periods = "free";
//       }
//       lbl.push(element.periods);
//       count.push(element.count);
//     });
//   });
//   console.log(count);

//   const chart = () => {
//     setChartData({
//       labels: lbl,
//       datasets: [
//         {
//           label: "# of Votes",
//           data: count,
//           backgroundColor: [
//             "Red",
//             "Blue",
//             "Yellow",
//             "Green",
//             "Purple",
//             "Orange",
//           ],
//           borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//           borderWidth: 1,
//         },
//       ],
//     });
//   };

//   // const ctx = document.getElementById("myChart1").getContext("2d");

//   // var myLineChart = new Chart(ctx, {
//   //   type: "bar",
//   //   data: {
//   //     labels: lbl,
//   //     datasets: [
//   //       {
//   //         label: "# of Votes",
//   //         data: count,
//   //         backgroundColor: [
//   //           "Red",
//   //           "Blue",
//   //           "Yellow",
//   //           "Green",
//   //           "Purple",
//   //           "Orange",
//   //         ],
//   //         borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   //         borderWidth: 0.5,
//   //       },
//   //     ],
//   //     options: { responsive: true },
//   //   },
//   // });
//   // if (data === 2) {
//   //   myLineChart.destroy();
//   // }
//   // console.log("sect", data);
// }, []);
