import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./Admin.css";
import Axios from "axios";

function Section2() {
  const [sectionsTwo, setSectionsTwo] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/user/section2").then((response) => {
      console.log(response);
      setSectionsTwo(response.data);
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
          {sectionsTwo.map((val, key) => {
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

export default Section2;

// select periods,count(*) from ((select period1 as periods from class) union all (select period2 as periods from class) union all (select period3 as periods from class) union all (select period4 as periods from class) union all (select period5 as periods from class) union all (select period6 as periods from class) )g group by periods;

// select periods,count(*) from ((select period1 as periods from class where section='1') union all (select period2 as periods from class where section='1') union all (select period3 as periods from class where section='1') union all (select period4 as periods from class where section='1') union all (select period5 as periods from class where section='1') union all
// (select period6 as periods from class where section='1') )g  group by periods;

// select periods,count(*) from ((select period1 as periods from class where section='2') union all (select period2 as periods from class where section='2') union all (select period3 as periods from class where section='2') union all (select period4 as periods from class where section='2') union all (select period5 as periods from class where section='2') union all
// (select period6 as periods from class where section='2') )g  group by periods;
