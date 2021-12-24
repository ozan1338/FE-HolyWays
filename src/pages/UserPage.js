import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DonationList from "../components/DonationList";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import "./userpage.css"

export default function UserPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
    <Helmet>
      <title>HOLYWAYS || USER</title>
    </Helmet>
      <div>
        <Navbar />
        <div className="user-page">
          <div className="user-page-profile">
            <h1>My Profile</h1>
            <div className="user-page-profile-body">
              <LazyLoadImage
                src={process.env.PUBLIC_URL + "/assets/images/image-6.png"}
              />
              <div className="user-page-profile-detail">
                <div>
                  <h3>Full Name</h3>
                  <h4>Andi</h4>
                </div>
                <div>
                  <h3>Email</h3>
                  <h4>andigans@gmail.com</h4>
                </div>
                <div>
                  <h3>Phone</h3>
                  <h4>083896833122</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="user-page-history-donation">
            <h1>History Donation</h1>
            <DonationList
              name="The Strength of a People. Power of Community"
              day="saturday"
              date="12 April 2021"
              total="45.000"
              button="true"
              titleButton="Finished"
              buttonColor="green"
            />
          </div>
        </div>
      </div>
    </>
  );
}
