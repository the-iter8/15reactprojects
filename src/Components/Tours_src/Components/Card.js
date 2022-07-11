import React, { useState } from "react";

export default function Card(props) {
  const { image, name, info, price } = props;

  // read more handling.

  const infoOne = info.slice(0, 0.34 * info.length);
  const infoTwo = info.slice(0.34 * info.length, info.length);

  const clickHandle = (event) => {
    const currentElement = event.target;
    currentElement.parentNode.parentNode.remove();
  };

  const [readmore, setReadmore] = useState(false);
  return (
    <div className="tCard card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="titles">
          <h4 className="card-title">{name}</h4>
          <h6 className="amount">${price}</h6>
        </div>
        <p className="card-text">
          {infoOne}
          {readmore ? (
            <span>
              {infoTwo} ⠀{/* Added a blank char for spacing lol. */}
              <button
                className="hidetext textbtn"
                onClick={() => {
                  setReadmore(false);
                }}
              >
                Show less
              </button>
            </span>
          ) : (
            <button
              className="readmore textbtn"
              onClick={() => {
                setReadmore(true);
              }}
            >
              Read more
            </button>
          )}
        </p>

        <button className="tbtn btn btn-primary" onClick={clickHandle}>
          Remove{" "}
        </button>
      </div>
    </div>
  );
}
