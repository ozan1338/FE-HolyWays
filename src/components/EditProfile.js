import React, { useState } from "react";
import { updateUser } from "../action/userActions";
import { useSelector, useDispatch } from "react-redux";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
import Loading from "./Loading";

export default function EditProfile(props) {
  const { nameUser, emailUser, userId, phoneNumber } = props;

  const phoneNumberUser = phoneNumber !== 0 ? phoneNumber : ""

  //console.log(userId);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.updateUserReducer);
  const { loading, error } = state;

  //const [email] = useState(emailUser);
  //const [name] = useState(nameUser);

  const [form, setForm] = useState({
    name: nameUser,
    email: emailUser,
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
      // const user = {
      //   email,
      //   name,
      // };
      const formData = new FormData();
      formData.set("email", form.email)
      formData.set("name", form.name)
      formData.set("phoneNumber", form.phoneNumber);

      dispatch(updateUser(userId, formData));

      //dispatch(updateProfile(profileId, form.phoneNumber));
    } else {
      const formData = new FormData();
      formData.set("email", form.email)
      formData.set("name", form.name)
      formData.set("phoneNumber", form.phoneNumber);
      formData.set(
        "photoProfile",
        form.photoProfile[0],
        form.photoProfile[0].name
      );
      dispatch(updateUser(userId, formData));
      //dispatch(updateProfile(profileId, formData));
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
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              name="email"
              required
            />
            <input
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              name="name"
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
