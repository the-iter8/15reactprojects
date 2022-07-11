import React from "react";
import { Link } from "react-router-dom";

export default function BackBtn() {
  const backgroundSet = (bColor) => {
    document.querySelector("#root").style.backgroundColor = `${bColor}`;
    document.querySelector("html").style.backgroundColor = `${bColor}`;
  };
  return (
    <Link to="/">
      <button
        className="btn btn-dark backBtn"
        // Sets the backgroud color to white back again.
        onClick={() => {
          backgroundSet("#fff");
        }}
      >
        Go Back
      </button>
    </Link>
  );
}
