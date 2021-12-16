import React from "react";
import { useDispatch } from "react-redux";

export default function Modal() {
  const dispatch = useDispatch();
  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  return (
    <div>
      <div className="modal" onClick={close}>
        <div className="modal-body modal-body-component">
          <form className="form-modal">
            <input type="text" placeholder="Nominal Donation" required />
            <div className="modal-small-text">
                <label htmlFor="file-input">Attach A Payment <img alt="" src={process.env.PUBLIC_URL + "/assets/images/image-7.png"} /></label>
                <input id="file-input" type="file" />
                <small>*transfers can be made to holyways accounts</small>
            </div>
            <button type="submit">Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
}
