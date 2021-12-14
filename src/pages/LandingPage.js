import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="container">
        <div className="landing-page-header">
          <h1>
            While you are still standing, try to reach out to the people who are
            falling.
          </h1>
        </div>
        <div className="landing-page-description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <button>Donate Now</button>
        </div>
        <div className="landing-page-image">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/image-1.png"}
            alt="img"
          />
        </div>
      </div>
      <div className="landing-page-image-2">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/image-2.png"}
          alt="img-2"
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
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
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
              title="The Strength of a People. Power of Community"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry."
              price="Rp 25.000.000"
              img={process.env.PUBLIC_URL + "/assets/images/image-3.png"}
            />
            <Card
              title="Empowering Communities Ending Poverty"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry."
              price="Rp 50.000.000"
              img={process.env.PUBLIC_URL + "/assets/images/image-4.png"}
            />
            <Card
              title="Please our brothers in flores"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry."
              price="Rp 100.000.000"
              img={process.env.PUBLIC_URL + "/assets/images/image-5.png"}
            />
          
        </div>
      </div>
    </div>
  );
}