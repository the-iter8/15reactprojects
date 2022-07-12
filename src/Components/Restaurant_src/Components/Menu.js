import React, { useState } from "react";
import Card from "./Card";
import data from "../data";

export default function Container() {
  const [currentData, setCurrentData] = useState(data);

  const clickHandle = (e) => {
    const currentBtn = e.target.textContent.toLowerCase();
    if (currentBtn === "all") {
      setCurrentData(data);
    } else {
      const newData = data.filter((element) => {
        return element.category === currentBtn;
      });
      setCurrentData(newData);
    }
  };
  return (
    <>
      <div className="container mContainer" id="menu">
        <div className="headingContainer">
          <h1 className="mainHeading">
            <strong>Our Menu.</strong>{" "}
          </h1>
          <div className="hLine">
            <div className="hLineSub"></div>
          </div>
        </div>

        <div className="mBtnContainer">
          <button className="menuType btn btn-primary" onClick={clickHandle}>
            All
          </button>
          <button className="menuType btn btn-primary" onClick={clickHandle}>
            Breakfast
          </button>
          <button className="menuType btn btn-primary" onClick={clickHandle}>
            Lunch
          </button>
          <button className="menuType btn btn-primary" onClick={clickHandle}>
            Shakes
          </button>
        </div>

        <div className="container mCardContainer">
          <div className="row row-cols-2">
            {currentData.map((element) => {
              return <Card key={element.id} {...element}></Card>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
