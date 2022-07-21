import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import data from "../data";

// Note :  The expansion and contraction of each element is handled using their respective index, the reason why it  didnt worked because the setDisplay(!display) will change the display Back to true GLOBALLY. That means all the Items in the map returned element would open up because they will detect that display is true and that would mean The accordion should be opened.

//Now to fix this issue, either just display the one with which the index matches, onclick, set the display to the index number, passed in the click handler and compare the current index to display the element that has the same index to the usestate variable. OR

// You may define the card altogether in a different scope than that of your current file (say Card.js) and import the card from there, then you can use the first one, INSIDE the Card.js and it would work as desiered. Because the clickhandle function and the display will be there just for the scope of the file and then the opened element will be returned. Instead of exposing the clickhanlder to all the elements.

export default function Container() {
  // Update the display to be of type integer and init it with -1

  const [display, setDisplay] = useState(-1);

  // Add a parameter to the click function to take the clicked element's index
  const clickHandle = (currentIndex) => {
    // Set the display variable to the currentIndex, in turn updating the UI
    if (currentIndex === display) {
      setDisplay(-1);
    } else {
      setDisplay(currentIndex);
    }
  };

  return (
    <>
      <div className="fContainer container">
        <div className="headingContainer">
          <h2 className="mainHeading">Questions And Answers About Login</h2>
        </div>

        <div className="fQuesContainer container">
          {data.map((question, questionIndex) => {
            const { id, title, info } = question;
            return (
              <div className="qCard" key={id}>
                <div className="qCardTitle">
                  <h5 className="qTitle title">{title}</h5>

                  <button
                    className="btnContainer"
                    onClick={() => clickHandle(questionIndex)}
                  >
                    {display === questionIndex ? (
                      <AiFillMinusCircle size="2.4em" />
                    ) : (
                      <AiFillPlusCircle size="2.4em" />
                    )}
                  </button>
                </div>

                {display === questionIndex ? (
                  <>
                    <hr className="fHr" />
                    <p className="fInfo">{info}</p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
