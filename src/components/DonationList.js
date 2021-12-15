import React from "react";

export default function DonationList({ name, day, date, total, button }) {
  return (
    <div className="col-1">
      <div className="card-donation-list">
        <h1>{name}</h1>
        <p>
          <strong>{day}</strong>, {date}
        </p>
        <div className="card-donation-list-flex">
          <p>
            <strong className="strong-red">Total: Rp {total}</strong>
          </p>
          {button ? <button>Finished</button> : null}
          
        </div>
      </div>
    </div>
  );
}
