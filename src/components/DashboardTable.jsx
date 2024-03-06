import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DashboardTable() {
  const [selectedKpi, setSelectedKpi] = useState(""); // Initialize with an empty string or default value
  const [selectedDate, setSelectedDate] = useState(""); // Initialize with an empty string or default value
  const [kpis, setKpis] = useState([]);
  const [dates, setDates] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://warwick-backend-34369cb85885.herokuapp.com/api/v1/kpi")
      .then(res => setKpis(res.data))
      .catch(e => console.log(e.message));

    axios("https://warwick-backend-34369cb85885.herokuapp.com/api/v1/upload/date")
      .then(res => setDates(res.data))
      .catch(e => console.log(e.message));
  }, []);

  const handleDropdownChange = () => {
    if (selectedDate && selectedKpi) {
      const apiUrl = `https://warwick-backend-34369cb85885.herokuapp.com/api/v1/upload/data?formattedDate=${selectedDate}&attribute=${selectedKpi}`;
      axios
        .get(apiUrl)
        .then(response => setDatas(response.data))
        .catch(error => console.error(error));
    } else {
      toast.success("Select Date and KPI", {
        position: "top-right",
        autoClose: 3000, // Close the toaster after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Move it outside the table */}
      <div style={{ marginBottom: "10px" }}>
        <select
          style={{ marginRight: "10px" }}
          className="btn btn-primary"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        >
          <option key="0" value="">
            Select Date
          </option>
          {dates.map(item =>
            <option key={item} value={item}>
              {item}
            </option>
          )}
        </select>
        <select
          style={{ marginRight: "10px" }}
          className="btn btn-success"
          value={selectedKpi}
          onChange={e => setSelectedKpi(e.target.value)}
        >
          <option key="0" value="">
            Select KPI
          </option>
          {kpis.map(item =>
            <option key={item.id} value={item.attribute}>
              {item.name}
            </option>
          )}
        </select>
        <button className="btn btn-warning" onClick={handleDropdownChange}>
          Submit
        </button>
      </div>
      <table className="table table-borderless datatable">
        <thead className="table-light">
          <tr>
            <th scope="col">Team Number</th>
            <th scope="col">Team Name</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(item =>
            <tr key={item.id}>
              <td>
                {item.teamNumber}
              </td>
              <td>
                {item.teamName}
              </td>
              <td>
                {item.value}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;
