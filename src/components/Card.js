import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card(props) {
    const {title , desc, img, price} = props
  return (
    <div className="col-3">
      <div className="card">
        <LazyLoadImage
          src={img}
          alt="img-3"
        />
        <h1>{title}</h1>
        <p>{desc}</p>
        <input type="range" id="vol" name="vol" min="0" max="100" />
        <div className="total">
          <p>{price}</p>
          <button className="btn-donate ">Donate</button>
        </div>
      </div>
    </div>
  );
}
