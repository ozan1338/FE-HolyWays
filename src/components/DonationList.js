import React from "react";
import {useDispatch} from 'react-redux'
import convertRupiah from 'rupiah-format'

export default function DonationList({ data, button,  click, donationTitle, titleButton }) {
  
  const  dispatch = useDispatch();

  const day = new Date(data.createdAt).toLocaleDateString('en-US', {weekday: 'long'});
  const date = new Date(data.createdAt).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year:'numeric'})
  //console.log(date);
  // const rupiah = convertRupiah.convert(data.donateAmount)
  // console.log(rupiah);
  console.log(data);

  const color = ()=>{
    if(data?.status === 'pending'){
      return 'btn-red'
    }else{
      return 'btn-green'
    }
  }

  const handleClick = () => {
    if(click){
      dispatch({type: 'OPEN_APPROVE_MODAL', payload: data})
    }else{
      return
    }
  }

  return (
    <div className="col-1">
      <div className="card-donation-list">
        <h1>{donationTitle ? data?.UserDonate.title : data?.user.name}</h1>
        <p>
          <strong>{day}</strong>, {date}
        </p>
        <div className="card-donation-list-flex">
          <p>
            <strong className="strong-red">Total: {convertRupiah.convert(data.donateAmount)}</strong>
          </p>
          {button ? <button  onClick={handleClick} className={color()} ><p>{titleButton? titleButton : data?.status}</p></button> : null}
          
        </div>
      </div>
    </div>
  );
}
