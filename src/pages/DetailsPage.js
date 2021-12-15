import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DonationList from "../components/DonationList";
import Navbar from "../components/Navbar";

export default function DetailsPage() {
  return (
    <div>
      <Navbar />
      <div className="details-page">
        <div className="details-page-image">
          <LazyLoadImage
            src={process.env.PUBLIC_URL + "/assets/images/image-3.png"}
            alt="LazyLoadImage"
          />
        </div>
        <div className="details-page-description">
          <h1>The Strength of a People. Power of Community</h1>
          <div className="details-page-info">
              <p><strong className="strong-red">Rp 25.000.000</strong></p>
              <p>gathered from</p>
              <p><strong>Rp 200.000.000</strong></p>
          </div>
          <input type="range" id="vol" name="vol" min="0" max="100" />
          <div className="details-page-info-2">
            <p><strong>200</strong> Donation</p>
            <p><strong>150</strong> More Day</p>
          </div>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="btn-donate ">Donate</button>
        </div>
      </div>
      <div className="details-page-donation">
        <div className="details-page-donation-header">
          <h1>List Donation (200)</h1>
        </div>
          <div className="details-page-donation-list">
              <div className="row row-donation">
                  <DonationList name="Andi" day="saturday" date="12 April 2021" total="45.000" />
                  <DonationList name="Jamal" day="saturday" date="12 April 2021" total="45.000" />
                  <DonationList name="Udin" day="saturday" date="12 April 2021" total="45.000" />
              </div>
          </div>
      </div>
    </div>
  );
}
