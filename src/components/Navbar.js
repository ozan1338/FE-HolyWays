import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, logoutUser } from "../action/userActions";
import jwt_decode from "jwt-decode";

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  let decodedToken = 0;

  const loginState = useSelector((state) => state.loginReducer);
  const { login } = loginState;

  const userState = useSelector((state) => state.getUserByIdReducer);
  const { user } = userState;

  if (login) {
    const token = JSON.parse(localStorage.getItem("currentUser"));
    if (token) {
      decodedToken = jwt_decode(token);
      //console.log(decodedToken);
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getUserById(decodedToken.id));
  }, [dispatch, decodedToken.id]);

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/assets/images/Icon.svg"}
          />
        </Link>
      </div>
      <div className="navbar-btn">
        {login ? (
          <div className="navbar-img">
            <div className="profile">
              <LazyLoadImage
                src={
                  user[0]?.profile
                    ? user[0]?.profile.photoProfile
                    : process.env.PUBLIC_URL + "/assets/images/img_avatar.png"
                }
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
                    <Link to={`/user/${decodedToken.id}`}>profile</Link>
                  </li>
                  <li>
                    <img
                      alt="icon"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/raise-fund.png"
                      }
                    />
                    <Link to={`/raise-fund/${decodedToken.id}`}>
                      Raise fund
                    </Link>
                  </li>
                  <li>
                    {/* <img
                      alt="icon"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/raise-fund.png"
                      }
                    /> */}
                    <svg
                      id="mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="icon line"
                      width="22"
                      height="20"
                    >
                      <rect
                        id="primary"
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="1"
                      ></rect>
                      <polyline
                        id="primary-2"
                        data-name="primary"
                        points="3 8 12 13 21 8"
                        
                      ></polyline>
                    </svg>
                    <Link to={`/admin-chat-page/${decodedToken.id}`}>
                      View Message
                    </Link>
                  </li>
                  <li>
                    <img
                      alt="icon"
                      src={process.env.PUBLIC_URL + "/assets/images/logout.png"}
                    />
                    <p
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </p>
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
                dispatch({ type: "OPEN_LOGIN" });
                setMenuToggle(false);
              }}
            >
              Login
            </button>
            <button
              className="btn-register"
              onClick={() => {
                dispatch({ type: "OPEN_REGISTER" });
                setMenuToggle(false);
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
