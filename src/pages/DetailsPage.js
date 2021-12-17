import React, { useEffect } from "react";
import DetailsDonate from "../components/DetailsDonate";
import DonationList from "../components/DonationList";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

export default function DetailsPage() {
  const openState = useSelector((state) => state.modalReducer);

  const { openModal } = openState;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || DETAIL</title>
      </Helmet>
      <div>
        <Navbar />
        {openModal ? <Modal /> : null}
        <DetailsDonate
          img={process.env.PUBLIC_URL + "/assets/images/image-3.png"}
          title="The Strength of a People. Power of Community"
          gathered="25.000.000"
          goalGathered="200.000.000"
          totalDonation="200"
          dayLeft="150"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
        <div className="details-page">
          <div className="details-page-donation-list">
            <div className="row row-donation">
              <DonationList
                name="Andi"
                day="saturday"
                date="12 April 2021"
                total="45.000"
              />
              <DonationList
                name="Jamal"
                day="saturday"
                date="12 April 2021"
                total="45.000"
              />
              <DonationList
                name="Udin"
                day="saturday"
                date="12 April 2021"
                total="45.000"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
