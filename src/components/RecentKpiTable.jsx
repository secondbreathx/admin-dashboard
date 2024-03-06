import React from "react";
import "react-toastify/dist/ReactToastify.css";

function RecentKpiTable({ kpis }) {
  return (
    <table className="table table-borderless datatable">
      <thead className="table-light">
        <tr>
          <th scope="col">Name</th>

          <th scope="col">Attribute</th>

          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody>
        {kpis &&
          kpis.length > 0 &&
          kpis.map(item =>
            <tr key={item.id}>
              <td>
                {item.name}
              </td>

              <td>
                {item.attribute}
              </td>

              <td>
                <span className="badge bg-success">approved</span>
              </td>
            </tr>
          )}
      </tbody>
    </table>
  );
}

export default RecentKpiTable;
