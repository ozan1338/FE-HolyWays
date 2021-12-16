import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'

export default function Navbar() {

  const [menuToggle, setMenuToggle] = useState(false);
  const [isLogin, setIsLogin] =  useState(false);

  const dispatch = useDispatch();

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
                dispatch({type : 'OPEN_LOGIN'});
              }}
            >
              Login
            </button>
            <button
              className="btn-register"
              onClick={() => {
                dispatch({type : 'OPEN_REGISTER'});
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
