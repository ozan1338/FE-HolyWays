import React, { useEffect,useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import './formfund.css';
import AlertError from "../components/AlertError";

export default function FormFund() {
  const [alert] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
    <Helmet>
        <title>HOLYWAYS || FORM</title>
    </Helmet>
      <div>
        <Navbar />
        <div className="container-2">
          <div className="form-fund-page">
            {alert && <AlertError />}
            <h1>Make Raise Fund</h1>
            <form className="form-fund-page-form">
              <input type="text" placeholder="Title" />
              <label htmlFor="file-input">Attach Thumbnail</label>
              <input id="file-input" type="file" />
              <input type="text" placeholder="Goals Donation" />
              <textarea placeholder="Description" />
              <button>Public Fundraising</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
