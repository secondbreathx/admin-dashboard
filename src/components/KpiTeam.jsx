import React, { useState, useEffect } from "react";
import axios from "axios";
import RecentKpiTable from "./RecentKpiTable";

function KpiTeam() {
  useEffect(() => {
    axios
      .get("https://warwick-backend-34369cb85885.herokuapp.com/api/v1/kpi")
      .then(res => setKpis(res.data))
      .catch(e => console.log(e.message));
  }, []);

  const [kpis, setKpis] = useState([]);

  return (
    <div className="card recent-sales overflow-auto">
      <div className="card-body">
        <h5 className="card-title" />
        <RecentKpiTable kpis={kpis} />
      </div>
    </div>
  );
}

export default KpiTeam;
