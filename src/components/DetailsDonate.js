import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {useDispatch} from "react-redux" 

export default function DetailsDonate(props) {
    const {img, title, gathered, goalGathered, totalDonation, dayLeft, description} = props;

    const dispatch = useDispatch();

  return (
    <div>
      <div className="details-page">
        <div className="details-page-image">
          <LazyLoadImage
            src={img}
            alt="LazyLoadImage"
          />
        </div>
        <div className="details-page-description">
          <h1>{title}</h1>
          <div className="details-page-info">
            <p>
              <strong className="strong-red">Rp {gathered}</strong>
            </p>
            <p>gathered from</p>
            <p>
              <strong>Rp {goalGathered}</strong>
            </p>
          </div>
          <input type="range" id="vol" name="vol" min="0" max="100" />
          <div className="details-page-info-2">
            <p>
              <strong>{totalDonation}</strong> Donation
            </p>
            <p>
              <strong>{dayLeft}</strong> More Day
            </p>
          </div>
          <p className="description">
            {description}
          </p>
          <button onClick={()=>{dispatch({type:'OPEN_MODAL'})}} className="btn-donate ">Donate</button>
        </div>
      </div>
      <div className="details-page-donation">
        <div className="details-page-donation-header">
          <h1>List Donation ({totalDonation})</h1>
        </div>
      </div>
    </div>
  );
}
