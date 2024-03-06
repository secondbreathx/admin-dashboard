import axios from "axios";
import React, { useState, useEffect } from "react";
import "../components/recentTeam.css";
import RecentTeamTable from "./RecentTeamTable";

function RecentTeam() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/api/v1/teams")
      .then(res => setItems(res.data))
      .catch(e => console.log(e.message));
  }, []);

  return (
    <div className="card recent-sales overflow-auto">
      <div className="card-body">
        <h5 className="card-title" />
        <RecentTeamTable items={items} />
      </div>
    </div>
  );
}

export default RecentTeam;
