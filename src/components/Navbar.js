import React from "react";

export default function Navbar({openLogin,openRegister}) {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img alt="logo" src={process.env.PUBLIC_URL + '/assets/images/Icon.svg'} />
      </div>
      <div className="navbar-btn">
        <button className="btn-login" onClick={()=>{openLogin(true); openRegister(false)}}>Login</button>
        <button className="btn-register" onClick={()=>{openLogin(false); openRegister(true)}}>Register</button>
      </div>
    </div>
  );
}
