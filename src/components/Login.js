import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../action/userActions";
import AlertError from "./AlertError";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Loading from "./Loading"
import AlertSuccess from "./AlertSuccess";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);

  const loginState = useSelector(state=>state.loginReducer);
  const {error, loading} = loginState;


  const dispatch = useDispatch();


  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(loginUser(user));
    //dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <div className="modal" onClick={close}>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          {error ? <AlertError message={error} /> : <AlertSuccess message="Login Success" />}
          <div className="form-heading">
            <h3>Login</h3>
          </div>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />
          <div className="input-icon">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
            />
            {!showPassword ? (
              <VisibilityOffIcon
                onClick={() => {
                  setShowPassword(true);
                }}
                className="icon"
              />
            ) : (
              <VisibilityIcon
                onClick={() => {
                  setShowPassword(false);
                }}
                className="icon"
              />
            )}
          </div>
          <button type="submit">{loading ? <Loading /> : "LOGIN"}</button>
          <div className="form-link">
            <span>
              Don't have an account ? Klik{" "}
              <strong
                onClick={() => {
                  dispatch({ type: "OPEN_REGISTER" });
                }}
              >
                Here
              </strong>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
