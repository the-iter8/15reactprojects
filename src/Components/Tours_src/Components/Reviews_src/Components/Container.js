import React, { useState } from "react";
// React Icons
import { FcNext, FcPrevious } from "react-icons/fc";
import data from "../data";

export default function Container() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // There was no use to define this
  // const [currentPerson, setCurrentPerson] = useState(data[0]);
  const { id, name, job, image, text } = data[currentIndex];

  // We didnt required this as well.
  // useEffect(() => {
  //   setCurrentPerson(data[currentIndex]);
  // }, [currentIndex]);

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

  return (
    <>
      <div className="reContainer container">
        <div className="headingContainer">
          <h1 className="mainHeading">
            <strong>Our Reviews </strong>
          </h1>
          <div className="hLine">
            <div className="hLineSub"></div>
          </div>
        </div>

        <div className="reCard card" key={id}>
          <span className="reQuoteIcon">“</span>
          <img src={image} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="reCardTitle card-title">{name}</h5>
            <span className="reCardSubTitle card-sub-title">{job}</span>

            <p className="reCardText card-text">{text}</p>

            <div className="reBtnContainer btnContainer">
              <button className="reNavBtns" id="pNav" onClick={prevNavHandler}>
                <FcPrevious size="1.5em"></FcPrevious>
              </button>
              <button className="reNavBtns" id="reNav" onClick={nextNavHandler}>
                <FcNext size="1.5em"></FcNext>
              </button>
            </div>

            <a
              href="#pNav"
              className="reBtnSurprise btn btn-primary"
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
