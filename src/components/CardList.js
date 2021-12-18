import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import donation from "../DonationData";

export default function CardList({ column }) {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginReducer);
  const { login } = loginState;

  let col;
    if(column === 1){
      col = 'col-1';
    }else if( column === 2){
      col = 'col-2';
    }else if( column === 3){
      col = 'col-3';
    }else if( column === 4){
      col = 'col-4';
    }

  return donation.map((item,index) => {
    return (
      <div className={col} key={index}>
        <div className="card">
          <LazyLoadImage src={item.img} alt="img-3" />
          <h1>{item.title}</h1>
          <p>{item.desc.substring(0,75)}</p>
          <input type="range" id="vol" name="vol" min="0" max="100" />
          <div className="total">
            <p>{item.price}</p>
            {!login ? (
              <button
                onClick={() => {
                  dispatch({ type: "OPEN_LOGIN" });
                }}
                className="btn-donate "
              >
                Donate
              </button>
            ) : (
              <Link to={`/details/${item.id}`}>
                <button className="btn-donate ">Donate</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  });
}
