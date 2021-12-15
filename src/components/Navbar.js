import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function Navbar({ openLogin, openRegister }) {

  const [menuToggle, setMenuToggle] = useState(false);
  const [isLogin, setIsLogin] =  useState(true);

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img
          alt="logo"
          src={process.env.PUBLIC_URL + "/assets/images/Icon.svg"}
        />
      </div>
      <div className="navbar-btn">
        {isLogin ? (
          <div className="navbar-img">
            <div className="profile">
              <LazyLoadImage
                src={process.env.PUBLIC_URL + "/assets/images/image-6.png"}
                onClick={() => {
                  menuToggle ? setMenuToggle(false) : setMenuToggle(true);
                }}
              />
            </div>
            {menuToggle ? (
              <div className="menu">
                <ul>
                  <li>
                    <img
                      alt="icon"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/profile.png"
                      }
                    />
                    <Link to='/user'>profile</Link>
                  </li>
                  <li>
                    <img
                      alt="icon"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/raise-fund.png"
                      }
                    />
                    <Link to='/raise-fund'>Raise fund</Link>
                  </li>
                  <li>
                    <img
                      alt="icon"
                      src={process.env.PUBLIC_URL + "/assets/images/logout.png"}
                    />
                    <p onClick={()=>{setIsLogin(false)}}>Logout</p>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            <button
              className="btn-login"
              onClick={() => {
                openLogin(true);
                openRegister(false);
              }}
            >
              Login
            </button>
            <button
              className="btn-register"
              onClick={() => {
                openLogin(false);
                openRegister(true);
              }}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
