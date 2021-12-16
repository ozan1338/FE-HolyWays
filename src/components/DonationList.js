import React from "react";
import {useDispatch} from 'react-redux'

export default function DonationList({ name, day, date, total, button, titleButton, buttonColor, click }) {
  
  const  dispatch = useDispatch();

  const color = ()=>{
    if(buttonColor === 'red'){
      return 'btn-red'
    }else{
      return 'btn-green'
    }
  }

  const handleClick = () => {
    if(click){
      dispatch({type: 'OPEN_APPROVE_MODAL'})
    }else{
      return
    }
  }

  return (
    <div className="col-1">
      <div className="card-donation-list">
        <h1>{name}</h1>
        <p>
          <strong>{day}</strong>, {date}
        </p>
        <div className="card-donation-list-flex">
          <p>
            <strong className="strong-red">Total: Rp {total}</strong>
          </p>
          {button ? <button  onClick={handleClick} className={color()} ><p>{titleButton}</p></button> : null}
          
        </div>
      </div>
    </div>
  );
}
