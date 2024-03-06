import React, { useState, useEffect } from "react";
import "../components/dashboard.css";
import Card from "./Card";
import Header from "./Header";
import PageTitle from "./PageTitle";
import SideBar from "./SideBar";
import "../components/main.css";
import DashboardTable from "./DashboardTable";

function Dashboard() {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3003/api/v1/upload/counts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCards(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="dashboard section">
      <Header />
      <SideBar />

      <main id="main" className="main">
        <PageTitle page="Dashboard" icon="bi bi-gear" />
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {cards &&
                cards.length > 0 &&
                cards.map(card => <Card key={card.id} card={card} />)}

              <div className="col-12">
                <DashboardTable />
              </div>
            </div>
          </div>
          <div className="col-lg-4" />
        </div>
      </main>
    </section>
  );
}

export default Dashboard;
