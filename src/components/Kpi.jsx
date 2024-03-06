import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import Header from "./Header";
import SideBar from "./SideBar";
import KpiTeam from "./KpiTeam";
function Kpi() {
  return (
    <section className="dashboard section">
      <Header />
      <SideBar />

      <main id="main" className="main">
        <PageTitle page="KPI" icon="bi bi-gear" />
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-8" />
              <KpiTeam />
            </div>
          </div>
          <div className="col-lg-4" />
        </div>
      </main>
    </section>
  );
}

export default Kpi;
