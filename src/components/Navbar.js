import React from "react";

export default function Navbar({openModal}) {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img alt="logo" src={process.env.PUBLIC_URL + '/assets/images/Icon.svg'} />
      </div>
      <div className="navbar-btn">
        <button className="btn-login" onClick={()=>{openModal(true)}}>Login</button>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
}
