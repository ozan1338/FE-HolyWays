import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card(props) {
    const {title , desc, img, price, column} = props;
    let col;
    if(column === 1){
      col = 'col-1';
    }else if( column === 2){
      col = 'col-2';
    }else if( column === 3){
      col = 'col-3';
    }else if( column === 4){
      col = 'col-4';
    }
  return (
    <div  className={col}>
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
