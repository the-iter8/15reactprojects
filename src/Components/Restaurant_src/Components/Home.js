import React from "react";
import {
  RiFacebookBoxLine,
  RiTwitterLine,
  RiInstagramLine,
  RiFocusLine,
} from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div className="rNavbar navbar" id="top">
        <img src="./images/REST.png" alt="" className="rImg" />
        <div className="rNBtnContainer">
          <a href="#top" className="rNavLinks">
            HOME
          </a>
          <a href="#menu" className="rNavLinks">
            MENU
          </a>
          <a href="#top" className="rNavLinks">
            OUR STORY
          </a>
          <a href="#top" className="rNavLinks">
            CONTACT
          </a>
        </div>
        <button className="rSignUp">SIGN UP</button>
      </div>

      <div className="rContainer container">
        <div className="rSidePanels">
          <a href="http://">
            <RiFacebookBoxLine size="1.5em"></RiFacebookBoxLine>
          </a>
          <a href="http://">
            <RiTwitterLine size="1.5em"></RiTwitterLine>
          </a>
          <a href="http://">
            <RiInstagramLine size="1.5em"></RiInstagramLine>
          </a>
        </div>
        <div className="rLandingPage">
          <div className="imgDiv landingPageL">
            <img src="./images/dish.png" alt="" />
          </div>
          <div className="landingPageR">
            <div className="rMainHeading">
              <p>
                Lorem ipsum if cattu sit doggu sit doggu angii cattu make doggu
                happy, quae?
              </p>
            </div>
            <div className="rBtnDiv">
              <button
                onClick={() => {
                  document.getElementById("menu").scrollIntoView();
                }}
                className="functionalBtn"
                style={{ backgroundColor: "#c4664463" }}
              >
                Order now
              </button>
              <button className="functionalBtn">Learn more</button>
            </div>
          </div>
        </div>
        <div className="rSidePanels">
          <RiFocusLine size="1.5em"></RiFocusLine>
          <RiFocusLine size="1.5em"></RiFocusLine>
        </div>
      </div>
    </>
  );
}
