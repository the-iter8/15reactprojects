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
      <div className="rNavbar navbar">
        <img src="./images/REST.png" alt="" className="rImg" />
        <div className="rNBtnContainer">
          <a href="" className="rNavLinks">
            HOME
          </a>
          <a href="#menu" className="rNavLinks">
            MENU
          </a>
          <a href="" className="rNavLinks">
            OUR STORY
          </a>
          <a href="" className="rNavLinks">
            CONTACT
          </a>
        </div>
        <button className="rSignUp">SIGN UP</button>
      </div>

      <div className="rContainer container">
        {/* Flex direction row */}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                quae?
              </p>
            </div>
            <div className="rBtnDiv">
              <button
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
