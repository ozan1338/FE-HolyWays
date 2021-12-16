import React from "react";
import DetailsDonate from "../components/DetailsDonate";
import Navbar from "../components/Navbar";
import DonationList from "../components/DonationList";
import {useSelector} from "react-redux"
import ApproveModal from "../components/ApproveModal";

export default function ViewFund() {

  const openState = useSelector(state=>state.modalReducer);

  const { openApproveModal } = openState;

  return (
    <div>
      <Navbar />
      {openApproveModal ? <ApproveModal /> : null}
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
          <p className="load-mode">Load Mode</p>
          <h1 className="details-page-donation-list-header">
            Donation has not been approved(10)
          </h1>
          <div className="row row-donation">
            <DonationList
              name="Zain"
              day="saturday"
              date="12 April 2021"
              total="45.000"
              button={true}
              titleButton="View"
              buttonColor="red"
              click={true}
            />
            <DonationList
              name="Fadhil"
              day="saturday"
              date="12 April 2021"
              total="45.000"
              button={true}
              titleButton="View"
              buttonColor="red"
              click={true}
            />
            <DonationList
              name="Radif"
              day="saturday"
              date="12 April 2021"
              total="45.000"
              button={true}
              titleButton="View"
              buttonColor="red"
              click={true}
            />
          </div>
          <p className="load-mode">Load Mode</p>
        </div>
      </div>
    </div>
  );
}
