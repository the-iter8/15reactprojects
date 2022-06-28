import React, { useState, useEffect } from "react";
// React Icons
import { FcNext, FcPrevious } from "react-icons/fc";
import data from "../data";

export default function Container() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPerson, setCurrentPerson] = useState(data[0]);

  useEffect(() => {
    setCurrentPerson(data[currentIndex]);
  }, [currentIndex]);

  // Had to make 2 different handlers because it was more efficient.
  const prevNavHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextNavHandler = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const surpriseHandler = () => {
    setCurrentIndex(Math.floor(Math.random() * 4));
  };

  const { id, name, job, image, text } = currentPerson;

  return (
    <>
      <div className="rContainer container">
        <div className="headingContainer">
          <h1 className="mainHeading">
            <strong>Our Reviews </strong>
          </h1>
          <div className="hLine">
            <div className="hLineSub"></div>
          </div>
        </div>

        <div className="rCard card" key={id}>
          <span className="rQuoteIcon">“</span>
          <img src={image} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="rCardTitle card-title">{name}</h5>
            <span className="rCardSubTitle card-sub-title">{job}</span>

            <p className="rCardText card-text">{text}</p>

            <div className="btnContainer">
              <button className="rNavBtns" id="pNav" onClick={prevNavHandler}>
                <FcPrevious size="1.5em"></FcPrevious>
              </button>
              <button className="rNavBtns" id="rNav" onClick={nextNavHandler}>
                <FcNext size="1.5em"></FcNext>
              </button>
            </div>

            <a
              href="#"
              className="rBtnSurprise btn btn-primary"
              onClick={surpriseHandler}
            >
              Surprise me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
