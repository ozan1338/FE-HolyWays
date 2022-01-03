import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import AlertError from "./AlertError";
import convertRupiah from 'rupiah-format'
import { updateTransaction } from "../action/transactionAction";
import Loading from "./Loading"

export default function ApproveModal({data}) {
  const dispatch = useDispatch();
  //const [alert] = useState(false)

  const transactionState = useSelector(state=>state.updateTransactionReducer)
  const {loading,error} = transactionState

  console.log(data)

  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(updateTransaction(data.fundId,data.userId,data.id))
  }

  return (
    <div>
      <div className="modal" onClick={close}>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-heading">
              {error && <AlertError />}
              <h3>{data?.user.name}</h3>
            </div>
            <input type="text" readOnly="readonly" defaultValue={convertRupiah.convert(data?.donateAmount)} required />
            <LazyLoadImage
              src={data?.proofAttachment}
            />
            <button type="submit">{loading ? <Loading /> : "Approve"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
