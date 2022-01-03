import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import convertRupiah from 'rupiah-format';

export default function DetailsDonate(props) {
  const {
    dayLeft,
    data
  } = props;


  let gathered1 = data[0]?.userDonate.map(item => {
    if(item.status === "success"){
      return item.donateAmount
    }
    return 0
  })

  const reducer = (previousValue, currentValue) => previousValue + currentValue

  gathered1 = gathered1?.reduce(reducer, 0)
  
  let donationHasBeenApproved = data[0]?.userDonate.filter(item => item.status === "success")

  const dispatch = useDispatch();

  //console.log(data[0]?.userDonate[0].user.name);
  //console.log(data);

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
              <strong className="strong-red">{convertRupiah.convert(gathered1)}</strong>
            </p>
            <p>gathered from</p>
            <p>
              <strong>{convertRupiah.convert(data[0]?.goal)}</strong>
            </p>
          </div>
          <input disabled="disabled" type="range" id="vol" name="vol" min="0" max={data[0]?.goal} defaultValue={gathered1} />
          <div className="details-page-info-2">
            <p>
              <strong>{donationHasBeenApproved?.length}</strong> Donation
            </p>
            <p>
              <strong>{dayLeft}</strong> More Day
            </p>
          </div>
          <p className="description">{data[0]?.description}</p>
          <button
            onClick={() => {
              dispatch({ type: "OPEN_MODAL" });
            }}
            className="btn-donate "
          >
            Donate
          </button>
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
