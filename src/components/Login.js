import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../action/userActions";
import AlertError from "./AlertError";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [alert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      password,
    };

    dispatch(loginUser(user));
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <div className="modal" onClick={close}>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          {alert && <AlertError />}
          <div className="form-heading">
            <h3>Login</h3>
          </div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
          <button type="submit">Login</button>
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
