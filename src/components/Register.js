import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertError from "./AlertError";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Loading from "./Loading";
import {registerUser} from "../action/userActions"
import AlertSuccess from "./AlertSuccess";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const registerState = useSelector(state=>state.registerUserReducer);
  const {loading,error} = registerState

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const  [password,setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password
    }

    console.log(user);
    dispatch(registerUser(user))

  };

  

  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };
  return (
    <div className="modal" onClick={close}>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          {error ? <AlertError message={error} /> : <AlertSuccess message="Register Success" />}
          <div className="form-heading">
            <h3>Register</h3>
          </div>
          <input onChange={(event)=>{setEmail(event.target.value)}} type="text" placeholder="Email" required />
          <div className="input-icon">
            <input
            
              onChange={(event)=>{setPassword(event.target.value)}}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            {showPassword ? (
              <VisibilityIcon
                onClick={() => {
                  setShowPassword(false);
                }}
                className="icon"
              />
            ) : (
              <VisibilityOffIcon
                onClick={() => {
                  setShowPassword(true);
                }}
                className="icon"
              />
            )}
          </div>
          <input onChange={(event)=>{setName(event.target.value)}} type="text" placeholder="Full Name" required />
          <button type="submit" >{loading ? <Loading /> : "Register"}</button>
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
