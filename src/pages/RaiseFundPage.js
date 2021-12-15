import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function RaiseFundPage() {
  return (
    <div>
      <Navbar />
      <div>
        <Card
          title="The Strength of a People. Power of Community"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry."
          price="Rp 25.000.000"
          img={process.env.PUBLIC_URL + "/assets/images/image-3.png"}
        />
      </div>
    </div>
  );
}
