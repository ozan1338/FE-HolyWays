import React, { useEffect } from "react";
import DetailsDonate from "../components/DetailsDonate";
import Navbar from "../components/Navbar";
import DonationList from "../components/DonationList";
import { useDispatch, useSelector } from "react-redux";
import ApproveModal from "../components/ApproveModal";
import Modal from "../components/Modal";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getFundById } from "../action/fundAction";
//import DonationData from "../DonationData"
import Loading from "../components/Loading";

export default function ViewFund() {
  const openState = useSelector((state) => state.modalReducer);
  const { openApproveModal, data } = openState;
  const { openModal } = openState;

  const fundState = useSelector((state) => state.getFundByIdReducer);
  const { fund, loading } = fundState;

  const { id } = useParams();

  const dispatch = useDispatch();

  let donationHasNotBeenApproved = []

  if(!loading){
    donationHasNotBeenApproved = fund[0]?.userDonate.filter(item => item.status === "pending")
    //console.log(donationHasNotBeenApproved);

  }

  //console.log('fund ', fund);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getFundById(id));
  }, [dispatch,id]);

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || VIEW FUND</title>
      </Helmet>
      <div>
        <Navbar />
        {openApproveModal ? <ApproveModal data={data} /> : null}
        {openModal ? <Modal fundId={id} /> : null}
        {loading ? (
          <Loading />
        ) : (
          <>
            <DetailsDonate data={fund} dayLeft="150" />
            <div className="details-page">
              <div className="details-page-donation-list">
                <div className="row row-donation">
                  {fund[0]?.userDonate.map((item, index) => {
                    if (item.status === "success") {
                      return <DonationList key={index} data={item} />;
                    }
                    return null;
                  })}
                </div>
                <p className="load-mode">Load Mode</p>
                <h1 className="details-page-donation-list-header">
                  Donation has not been approved({donationHasNotBeenApproved?.length})
                </h1>
                <div className="row row-donation">
                  {fund[0]?.userDonate.map((item, index) => {
                    if (item.status === "pending") {
                      return (
                        <DonationList
                          key={index}
                          data={item}
                          button={true}
                          titleButton="View"
                          buttonColor="red"
                          click={true}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
                <p className="load-mode">Load Mode</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
