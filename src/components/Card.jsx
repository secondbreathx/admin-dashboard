import React from "react";
import "../components/card.css";

function Card({ card }) {
  return (
    <div className="col-xxl-4 col-md-6">
      <div className="card info-card sales-card">
        <div className="card-body">
          <h5 className="card-title">
            {card.name}
          </h5>

          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={card.icon} />
            </div>
            <div className="ps-3">
              <h6>{card.count} </h6> <h4>{card.name} </h4>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
