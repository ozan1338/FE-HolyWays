import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function RaiseFundPage() {
  return (
    <div>
      <Navbar />
      <div className="container-2">
        <div className="raise-fund-body">
          <h1>My Raise Fund</h1>
          <Card
            column={2}
            title="The Strength of a People. Power of Community"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry."
            price="Rp 25.000.000"
            img={process.env.PUBLIC_URL + "/assets/images/image-3.png"}
          />
        </div>

        <div className="raise-fund-button">
          <button>Make Raise Fund</button>
        </div>
      </div>
    </div>
  );
}
