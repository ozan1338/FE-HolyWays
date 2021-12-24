import React, {useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import AlertError from "./AlertError";

export default function ApproveModal() {
  const dispatch = useDispatch();
  const [alert] = useState(false)
  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };
  return (
    <div>
      <div className="modal" onClick={close}>
        <div className="modal-body">
          <form>
            <div className="form-heading">
              {alert && <AlertError />}
              <h3>Zain</h3>
            </div>
            <input type="text" placeholder="45.000.000" required />
            <LazyLoadImage
              src={process.env.PUBLIC_URL + "/assets/images/image-8.png"}
            />
            <button type="submit">Approve</button>
          </form>
        </div>
      </div>
    </div>
  );
}
