import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Chart from "chart.js/auto";
import "./Admin.css";
import { Chart, defaults, Bar } from "react-chartjs-2";
// function Chart2() {
//   const [chartData, setChartData] = useState([]);
//   const [sectionsTwo, setSectionsTwo] = useState([]);
//   useEffect(() => {
//     Axios.get("http://localhost:3001/user/periodslist2").then((response) => {
//       console.log(response.data[0].count);
//       console.log(response.data[3].periods);

//       setSectionsTwo(response.data);
//     });
//   }, []);

//   const labels = sectionsTwo.map(function (e) {
//     if (e.periods === null || e.periods === "") {
//       e.periods = "free";
//     }
//     return e.periods;
//   });
//   const data = sectionsTwo.map(function (e) {
//     return e.count;
//   });

//   useEffect(() => {
//     localStorage.setItem("label2", JSON.stringify(labels));
//   });

//   useEffect(() => {
//     localStorage.setItem("data2", JSON.stringify(data));
//   });

//   // var ctx = canvas.getContext("2d");
//   // var config = {
//   //   type: "line",
//   //   data: {
//   //     labels: labels,
//   //     datasets: [
//   //       {
//   //         label: "Graph Line",
//   //         data: data,
//   //         backgroundColor: "rgba(0, 119, 204, 0.3)",
//   //       },
//   //     ],
//   //   },
//   // };
//   const label2 = JSON.parse(localStorage.getItem("label2"));
//   const data2 = JSON.parse(localStorage.getItem("data2"));

//   const chart = () => {
//     setChartData({
//       labels: label2,
//       datasets: [
//         {
//           label: "# of Votes",
//           data: data2,
//           backgroundColor: ["Blue", "Yellow", "Green"],
//           borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//           borderWidth: 1,
//         },
//       ],
//     });
//   };
//   useEffect(() => {
//     chart();
//   }, []);

//   return (
//     <div className="chart" style={{ width: "500px", height: "300px" }}>
//       {/* <canvas id="myChart1" width="200" height="200" /> */}
//       <Bar data={chartData} />
//     </div>
//   );
// }

function Chart2() {
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
  // const [employeeSalary, setEmployeeSalary] = useState([]);
  // const [employeeAge, setEmployeeAge] = useState([]);

  const Chart = () => {
    // Chart.defaults.color = "white";
    let dt = [];
    let lb = [];

    Axios.get("http://localhost:3001/user/periodslist2")
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
              label: "Count of Classes",
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

export default Chart2;
