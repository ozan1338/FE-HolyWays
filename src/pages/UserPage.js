import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DonationList from "../components/DonationList";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import "./userpage.css";
import { useParams } from "react-router-dom";
import { getUserById } from "../action/userActions";
import Loading from "../components/Loading";
import EditProfile from "../components/EditProfile";

export default function UserPage() {
  const { id } = useParams();

  const state = useSelector((state) => state.modalReducer);
  const { openEditProfile } = state;

  const userState = useSelector((state) => state.getUserByIdReducer);
  const { loading, user } = userState;

  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getUserById(id));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || USER</title>
      </Helmet>
      <div>
        <Navbar />
        {openEditProfile ? (
          <EditProfile
            userId={id}
            nameUser={user[0]?.name}
            emailUser={user[0]?.email}
            phoneNumber={user[0]?.phoneNumber}
          />
        ) : null}
        {loading ? (
          <Loading />
        ) : (
          <div className="user-page">
            <div className="user-page-profile">
              <h1>My Profile</h1>
              <button
                className="edit-profile-button"
                onClick={() => {
                  dispatch({ type: "OPEN_EDIT_PROFILE_MODAL" });
                }}
              >
                Edit Profile
              </button>
              <div className="user-page-profile-body">
                <LazyLoadImage
                  src={
                    user[0]?.photoProfile
                      ? user[0]?.photoProfile
                      : process.env.PUBLIC_URL + "/assets/images/img_avatar.png"
                  }
                />
                <div className="user-page-profile-detail">
                  <div>
                    <h3>Full Name</h3>
                    <h4>{user[0]?.name}</h4>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <h4>{user[0]?.email}</h4>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <h4>
                      +62
                      {user[0]?.phoneNumber !== 0 || user[0]?.phoneNumber !== "0"
                        ? user[0]?.phoneNumber
                        : "xxxxxxxxxx"}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-page-history-donation">
              <h1>History Donation</h1>
              {user[0]?.transactions
                ? user[0].transactions.map((item, index) => {
                    return (
                      <DonationList
                        button={true}
                        donationTitle={true}
                        key={index}
                        data={item}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
