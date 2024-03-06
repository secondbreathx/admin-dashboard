import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import Header from "./Header";
import SideBar from "./SideBar";
import RecentTeam from "./RecentTeam";

function Team() {

  return (
    <section className="dashboard section">
      <Header />
      <SideBar />

      <main id="main" className="main">
        <PageTitle page="Team" icon="bi bi-gear" />
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-8">
                <RecentTeam />
              </div>
            </div>
          </div>
          <div className="col-lg-4" />
        </div>
      </main>
    </section>
  );
}

export default Team;
