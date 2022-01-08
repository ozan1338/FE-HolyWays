import React, { useState } from "react";
import { updateProfile, updateUser } from "../action/userActions";
import { useSelector, useDispatch } from "react-redux";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
import Loading from "./Loading";

export default function EditProfile(props) {
  const { nameUser, emailUser, userId, phoneNumber, profileId } = props;

  const phoneNumberUser = phoneNumber ? phoneNumber : ""

  console.log(userId);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.updateUserReducer);
  const { loading, error } = state;

  const [email, setEmail] = useState(emailUser);
  const [name, setName] = useState(nameUser);

  const [form, setForm] = useState({
    phoneNumber: phoneNumberUser,
    photoProfile: null,
  });

  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.type === "file" ? event.target.files : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.photoProfile) {
      const user = {
        email,
        name,
      };

      dispatch(updateUser(userId, user));

      dispatch(updateProfile(profileId, form.phoneNumber));
    } else {
      const formData = new FormData();
      formData.set("phoneNumber", form.phoneNumber);
      formData.set(
        "photoProfile",
        form.photoProfile[0],
        form.photoProfile[0].name
      );

      const user = {
        email,
        name,
      };

      dispatch(updateUser(userId, user));
      dispatch(updateProfile(profileId, formData));
    }
  };

  return (
    <div>
      <div className="modal" onClick={close}>
        <div className="modal-body modal-body-component">
          {error ? (
            <AlertError message={error} />
          ) : (
            <AlertSuccess message="Edit Profile Success" />
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="text"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              name="phoneNumber"
            />
            <div className="modal-small-text">
              <label className="label-modal" htmlFor="photoProfile">
                Attach A Picture{" "}
                <img
                  alt=""
                  src={process.env.PUBLIC_URL + "/assets/images/image-7.png"}
                />
              </label>
              <input
                name="photoProfile"
                onChange={handleChange}
                id="photoProfile"
                type="file"
              />
            </div>
            <button type="submit">{loading ? <Loading /> : "Submit"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
