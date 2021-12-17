import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Login from "../components/Login";
import Register from "../components/Register";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

export default function LandingPage() {
  //const [openLogin, setOpenLogin] = useState(false);
  //const [openRegister, setOpenRegister] = useState(false);
  const openState = useSelector((state) => state.modalReducer);
  const { openLogin, openRegister } = openState;

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || HOME</title>
        <meta
          name="description"
          content="Help Each Other Who Need Help"
        />
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
            <button
              onClick={() => {
                dispatch({ type: "OPEN_LOGIN" });
              }}
            >
              Donate Now
            </button>
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
        <div className="landing-page-card">
          <h1>Donate Now</h1>
          <div className="row">
            <Card
              column={4}
              title="The Strength of a People. Power of Community"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry."
              price="Rp 25.000.000"
              img={process.env.PUBLIC_URL + "/assets/images/image-3.png"}
            />
            <Card
              column={4}
              title="Empowering Communities Ending Poverty"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry."
              price="Rp 50.000.000"
              img={process.env.PUBLIC_URL + "/assets/images/image-4.png"}
            />
            <Card
              column={4}
              title="Please our brothers in flores"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry."
              price="Rp 100.000.000"
              img={process.env.PUBLIC_URL + "/assets/images/image-5.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
