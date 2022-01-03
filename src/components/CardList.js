import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jwt_decode from 'jwt-decode'
// import donation from "../DonationData";

export default function CardList({ column, data, viewFund }) {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginReducer);
  const { login } = loginState;

  let decodedToken = 0;

  if(login){
    const token = JSON.parse(localStorage.getItem("currentUser"))
    if(token){
      decodedToken = jwt_decode(token)
      //console.log(decodedToken);
    }
  }

  let gathered1 = data.userDonate.map(item => {
    if(item.status === "success"){
      return item.donateAmount
    }
    return 0
  })

  const reducer = (previousValue, currentValue) => previousValue + currentValue

  gathered1 = gathered1?.reduce(reducer, 0)

  //console.log(data)
  //console.log(decodedToken, data.userId);

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

    return (
      <div className={col}>
        <div className="card">
          <LazyLoadImage src={data.thumbnail} alt="img-3" />
          <div className="card-title">
            <h1>{data.title}</h1>
          </div>
          <p>{data.description.substring(0,75)}</p>
          <input disabled="disabled" type="range" id="vol" name="vol" min="0" max={data.goal} defaultValue={gathered1} />
          <div className="total">
            <p>Rp {data.goal}</p>
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
              <Link to={data.userId === decodedToken.id || viewFund ? `/view-fund/${data.id}` : `/details/${data.id}`}>
                <button className="btn-donate ">{viewFund ? "View Fund" : "Donate"}</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
}
