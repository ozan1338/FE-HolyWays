import React, { useEffect } from "react";
import DetailsDonate from "../components/DetailsDonate";
import DonationList from "../components/DonationList";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import {useParams} from "react-router";
//import donation from "../DonationData"
import "./detailspage.css"
import { getFundById } from "../action/fundAction";
import Loading from "../components/Loading"

export default function DetailsPage() {
  const openState = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  const { openModal } = openState;

  const {id} = useParams();

  const fundState = useSelector((state)=> state.getFundByIdReducer);
  const {fund, loading} = fundState


  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getFundById(id))

  }, [dispatch,id]);

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || DETAIL</title>
      </Helmet>
      <div>
        <Navbar />
        {openModal ? <Modal fundId={id} /> : null}
        {loading ? <Loading /> : 
        <>
        <DetailsDonate
          detailPage={true}
          dayLeft="150"
          data = {fund}
        />
        <div className="details-page">
          <div className="details-page-donation-list">
            <div className="row row-donation">
            {fund[0]?.userDonate.map((item,index)=>{
              if(item.status === "success"){
                return (
                  <DonationList
                  key={index}
                  data={item}
                />
                )}
              return null       
            })}
              
              
            </div>
          </div>
        </div>
        </>
        }
        
      </div>
    </>
  );
}
