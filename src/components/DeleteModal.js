import React from 'react';
import {useDispatch} from "react-redux"
import AlertWarning from './AlertWarning';
import { deleteFund } from '../action/fundAction';

export default function DeleteModal(props) {
    const dispatch = useDispatch()

    const close = (event) => {
        if(event.target.getAttribute("class") === "modal" ){
            dispatch({type: "CLOSE_MODAL"})
        }
    }

  return (
  <div>
      <div className="modal" onClick={close}>
        <div className="modal-body modal-body-component">
            <AlertWarning message={"Warning"} />
            <h4>
                Are You Sure Want To Delete This Fund
            </h4>
            <div className='btn-delete-modal'>
                <button onClick={()=>{dispatch(deleteFund(props.fundId))}} className='btn-yes'>Yes</button>
                <button onClick={()=>{dispatch({type: "CLOSE_MODAL"})}} className='btn-no' >No</button>
            </div>
        </div>
      </div>
  </div>
  )
}
