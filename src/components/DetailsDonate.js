import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import convertRupiah from "rupiah-format";
import jwt_decode from "jwt-decode";
import { updateFund } from "../action/fundAction";

export default function DetailsDonate(props) {
  const { data, viewFund } = props;


  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("currentUser"));
  let decodedToken = jwt_decode(token);

  let gathered1 = data[0]?.userDonate.map((item) => {
    if (item.status === "success") {
      return item.donateAmount;
    }
    return 0;
  });

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  gathered1 = gathered1?.reduce(reducer, 0);

  let donationHasBeenApproved = data[0]?.userDonate.filter(
    (item) => item.status === "success"
  );

  const dispatch = useDispatch();

  const showChatPage = () => {
    if (data[0]?.userId === decodedToken.id) {
      history.push(`/admin-chat-page/${decodedToken.id}`);
    } else {
      history.push(`/chat-page/${decodedToken.id}/${data[0]?.userId}`);
    }
  };

  useEffect(() => {
    data[0]?.expiredDate > 0 &&
      setTimeout(
        () => dispatch(updateFund(data[0]?.id, data[0]?.expiredDate - 1)),
        1000 * 60 * 60 * 24
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data[0]?.expiredDate]);

  return (
    <div>
      <div className="details-page">
        <div className="details-page-image">
          <LazyLoadImage src={data[0]?.thumbnail} alt="LazyLoadImage" />
        </div>
        <div className="details-page-description">
          <h1>{data[0]?.title}</h1>
          <div className="details-page-info">
            <p>
              <strong className="strong-red">
                {convertRupiah.convert(gathered1)}
              </strong>
            </p>
            <p>gathered from</p>
            <p>
              <strong>{convertRupiah.convert(data[0]?.goal)}</strong>
            </p>
          </div>
          <input
            disabled="disable"
            type="range"
            id="vol"
            name="vol"
            min="0"
            max={data[0]?.goal}
            defaultValue={gathered1}
          />
          <div className="details-page-info-2">
            <p>
              <strong>{donationHasBeenApproved?.length}</strong> Donation
            </p>
            <p className="expired-date">
              <strong>{data[0]?.expiredDate}</strong>More Day
            </p>
          </div>
          <p className="description">{data[0]?.description}</p>
          <button
            onClick={
              data[0]?.expiredDate === 0 || data[0]?.goal === gathered1
                ? null
                : () => {
                    dispatch({ type: "OPEN_MODAL"});
                  }
            }
            className={data[0]?.expiredDate === 0 || data[0]?.goal === gathered1 ? "btn-donate btn-not-allowed" : "btn-donate"}
          >
            {data[0]?.expiredDate === 0 || data[0]?.goal === gathered1 ? "Finish" : "Donate" }
          </button>
          <button onClick={()=>{viewFund ? dispatch({type: "OPEN_DELETE_MODAL"}) : showChatPage()}}>{viewFund ? "Delete Fund" : "Chat Admin"}</button>
        </div>
      </div>
      <div className="details-page-donation">
        <div className="details-page-donation-header">
          <h1>List Donation ({donationHasBeenApproved?.length})</h1>
        </div>
      </div>
    </div>
  );
}
