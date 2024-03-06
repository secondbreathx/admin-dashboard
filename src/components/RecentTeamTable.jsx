import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RecentTeamTable({ items }) {
  const handleClick = () => {
    console.log("test");
    toast.success("Not Implemented Yet!", {
      position: "top-right",
      autoClose: 3000, // Close the toaster after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return (
    <div>
      <ToastContainer /> {/* Move it outside the table */}
      <table className="table table-borderless datatable">
        <thead className="table-light">
          <tr>
            <th scope="col" style={{ textAlign: "center" }}>
              Number
            </th>

            <th scope="col" style={{ textAlign: "center" }}>
              Name
            </th>

            <th scope="col" style={{ textAlign: "center" }}>
              Status
            </th>

            <th scope="col" style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {items &&
            items.length > 0 &&
            items.map(item =>
              <tr key={item.id}>
                <td style={{ textAlign: "center" }}>
                  {item.number}
                </td>

                <td style={{ textAlign: "center" }}>
                  {" "}{item.name}
                </td>

                <td style={{ textAlign: "center" }}>
                  <span className="badge bg-success">approved</span>
                </td>

                <td style={{ textAlign: "center" }}>
                  <button className="btn btn-warning" onClick={handleClick}>
                    Update
                  </button>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTeamTable;
