import React from "react";

export default function Card(props) {
  const {title, category, price, img, desc } = props;
  return (
    <div className="col card mCard">
      <img src={img} className="card-img-top mImg" alt="..." />

      <div className="card-body mCardBody">
        <div className="mTitle">
          <h5 className="card-title mName">{title}</h5>
          <h5 className="mPrice">${price}</h5>
        </div>

        <p className="card-text mInfo">
          {desc}
          <span className="mTooltip">{category}</span > 
          {/* display only if the all option is there */}
        </p>
      </div>
    </div>
  );
}
