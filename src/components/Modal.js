import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../action/transactionAction";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
import Loading from "./Loading"

export default function Modal({fundId}) {
  const dispatch = useDispatch();
  
  const transactionState = useSelector(state=>state.addTransactionReducer)
  const {loading, error} = transactionState

  //const {id} = useParams;
  //console.log(id);

  const close = (event) => {
    if (event.target.getAttribute("class") === "modal") {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  const [form,setForm] = useState({
    donateAmount: '',
    proofAttachment: null
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
      event.target.type === "file" ? event.target.files : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!form.proofAttachment){
      dispatch(addTransaction(fundId,form.donateAmount))
    }else{
      const formData = new FormData()
      formData.set('donateAmount', form.donateAmount)
      formData.set('proofAttachment', form.proofAttachment[0], form.proofAttachment[0].name);

      dispatch(addTransaction(fundId,formData));
    }

  }

  return (
    <div>
      <div className="modal" onClick={close}>
        <div className="modal-body modal-body-component">
        {error ? <AlertError message={error} /> : <AlertSuccess message="Transaction Success" />}
          <form  onSubmit={handleSubmit}>
            <input onChange={handleChange} name="donateAmount" type="text" placeholder="Nominal Donation" required />
            <div className="modal-small-text">
                <label className="label-modal" htmlFor="proofAttachment">Attach A Payment <img alt="" src={process.env.PUBLIC_URL + "/assets/images/image-7.png"} /></label>
                <input name="proofAttachment" onChange={handleChange} id="proofAttachment" type="file" />
                <small>*transfers can be made to holyways accounts</small>
            </div>
            <button type="submit">{loading ? <Loading /> : "Donate"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
