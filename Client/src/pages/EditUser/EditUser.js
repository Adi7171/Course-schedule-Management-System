import React, { useState, useEffect } from "react";
import "./EditUser.css";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function EditUser() {
  const initialState = {
    day: "",
    period1: "",
    period2: "",
    period3: "",
    period4: "",
    period5: "",
    period6: "",
  };
  // const [day, setDay] = useState("");
  // const [section, setSection] = useState("");
  // const [period1, setPeriod1] = useState("");
  // const [period2, setPeriod2] = useState("");
  // const [period3, setPeriod3] = useState("");
  // const [period4, setPeriod4] = useState("");
  // const [period5, setPeriod5] = useState("");
  // const [period6, setPeriod6] = useState("");

  // const [editUser, setEditUser] = useState([]);

  const [state, setState] = useState(initialState);
  const { day, section, period1, period2, period3, period4, period5, period6 } =
    state;
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/user/edit/${id}`).then((response) => {
      setState({ ...response.data[0] });
    });
  }, [id]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const history = useHistory();

  const handleUpdate = (e) => {
    e.preventDefault();

    Axios.post(`http://localhost:3001/user/update/${id}`, {
      period1,
      period2,
      period3,
      period4,
      period5,
      period6,
    })
      .then(() => {
        setState({
          period1: "",
          period2: "",
          period3: "",
          period4: "",
          period5: "",
          period6: "",
        });
      })
      .catch((err) => console.log(err));

    // window.location.reload();
    history.push("/");
  };

  return (
    <div className="admin Logo">
      <h1> Edit </h1>
      <form className="editForm" onSubmit={handleUpdate}>
        <div className="sub"> {day || ""} </div>
        {/* <input
          name="day"
          className="ibox"
          value={day || ""}
          onChange={handleInputChange}
        /> */}

        <div className="sub">{section || ""}</div>
        {/* <input name="section" className="ibox" value={section || ""} /> */}

        <input
          name="period1"
          type="text"
          id="period1"
          placeholder="PERIOD 1"
          className="ibox"
          value={period1 || ""}
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
          onChange={handleInputChange}
        />

        <input
          name="period2"
          type="text"
          className="ibox"
          id="period2"
          placeholder="PERIOD 2"
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
          value={period2 || ""}
          onChange={handleInputChange}
        />

        <input
          name="period3"
          type="text"
          className="ibox"
          value={period3 || ""}
          placeholder="PERIOD 3"
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
          onChange={handleInputChange}
        />

        <input
          name="period4"
          type="text"
          className="ibox"
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
          value={period4 || ""}
          onChange={handleInputChange}
          placeholder="PERIOD 4"
        />

        <input
          name="period5"
          type="text"
          className="ibox"
          value={period5 || ""}
          onChange={handleInputChange}
          placeholder="PERIOD 5"
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
        />

        <input
          name="period6"
          type="text"
          className="ibox"
          placeholder="PERIOD 6"
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
          value={period6 || ""}
          onChange={handleInputChange}
        />
        {/* <input  value="submit" /> */}
        <button type="submit" className="btns">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;
