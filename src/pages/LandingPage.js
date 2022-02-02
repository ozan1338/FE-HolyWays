import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Login from "../components/Login";
import Register from "../components/Register";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import CardList from "../components/CardList";
import "./landingpage.css";
import { getAllFund } from "../action/fundAction";
import Loading from "../components/Loading";

export default function LandingPage() {
  const openState = useSelector((state) => state.modalReducer);
  const { openLogin, openRegister } = openState;

  const dispatch = useDispatch();

  const fundState = useSelector((state) => state.getAllFundReducer);
  const { loading, funds } = fundState;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllFund());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || HOME</title>
        <meta name="description" content="Help Each Other Who Need Help" />
        <meta name="keyword" content="donation" />
      </Helmet>
      <div className="landing-page">
        <Navbar />
        {openLogin ? <Login /> : null}
        {openRegister ? <Register /> : null}

        <div className="container">
          <div className="landing-page-header">
            <h1>
              While you are still standing, try to reach out to the people who
              are falling.
            </h1>
          </div>
          <div className="landing-page-description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a href="#donate-now">
              <button>Donate Now</button>
            </a>
          </div>
          <div className="landing-page-image">
            <LazyLoadImage
              src={process.env.PUBLIC_URL + "/assets/images/image-1.png"}
              alt="LazyLoadImage"
            />
          </div>
        </div>
        <div className="landing-page-image-2">
          <LazyLoadImage
            src={process.env.PUBLIC_URL + "/assets/images/image-2.png"}
            alt="LazyLoadImage-2"
          />
        </div>
        <div className="landing-page-header-2">
          <h1>
            Your donation is very helpful for people affected by forest fires in
            Kalimantan.
          </h1>
        </div>
        <div className="landing-page-description-2">
          <div className="landing-page-description-2-paragraph">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="landing-page-description-2-paragraph-2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div id="donate-now" className="landing-page-card">
          <h1>Donate Now</h1>
          <div className="row">
            {loading ? (
              <Loading />
            ) : (
              funds?.length === 0 ? null :
              funds?.map((item, index) => {
                return (
                  <CardList
                    key={index}
                    data={item}
                    column={4}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
