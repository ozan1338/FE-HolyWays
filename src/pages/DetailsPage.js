import React, { useEffect } from "react";
import DetailsDonate from "../components/DetailsDonate";
import DonationList from "../components/DonationList";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import {useParams} from "react-router";
import donation from "../DonationData"
import "./detailspage.css"

export default function DetailsPage() {
  const openState = useSelector((state) => state.modalReducer);

  const { openModal } = openState;

  const {id} = useParams();

  const donationById = donation.filter(item => item.id === id);
  console.log(donationById);

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
          gathered="25.000.000"
          goalGathered="200.000.000"
          totalDonation="200"
          dayLeft="150"
          data = {donationById}
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
