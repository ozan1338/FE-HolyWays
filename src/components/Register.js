import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AlertError from "./AlertError";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Register() {
  const [alert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };
  return (
    <div className="modal" onClick={close}>
      <div className="modal-body">
        <form>
          {alert && <AlertError />}
          <div className="form-heading">
            <h3>Register</h3>
          </div>
          <input type="text" placeholder="Email" required />
          <div className="input-icon">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            {showPassword ? <VisibilityIcon onClick={()=>{setShowPassword(false)}} className="icon" /> : <VisibilityOffIcon onClick={()=>{setShowPassword(true)}} className="icon" />}
          </div>
          <input type="text" placeholder="Full Name" required />
          <button type="submit">Login</button>
          <div className="form-link">
            <span>
              Already have an account ? Klik{" "}
              <strong
                onClick={() => {
                  dispatch({ type: "OPEN_LOGIN" });
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
