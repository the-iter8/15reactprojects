import React, { useState, useEffect } from "react";
import Birthday from "./Birthday_src/Birthday";
import Tours from "./Tours_src/App";
// Add the loading screen
// Change the go back button

// Change the fonts 

const data = [
  {
    id: 1,
    image: "https://i.imgur.com/CBKXK6G.jpg",
    name: "Birthday",
    info: "A simple application that displays a set of birthdays from an API call and a use case of the useState hook. ",
    bColor: "#f28ab2",
    btnP: <Birthday />,
  },
  {
    id: 2,
    image: "https://i.imgur.com/92k0SoD.jpg",
    name: "Tours",
    info: "An application that displays a set of tours from an API call using the useState and useEffect hook.",
    bColor: "#fff",
    btnP: <Tours />,
  },
  {
    id: 3,
    image:
      "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    name: "Example 3",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, neque! Cat kha hai?",
    bColor: "#fff",
    btnP: <Tours />,
  },
  {
    id: 4,
    image:
      "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    name: "Example 4",
    info: "Please bhai dil se bura lagta hai bhai, please yaar kuch bhi type mat kra kr. ",
    bColor: "#fff",
    btnP: <Tours />,
  },
];
export default function Container() {
  const [project, setProject] = useState(Default);
  const [isDefault, setIsDefault] = useState(true);

  const functionCall = (bColor) => {
    document.querySelector("#root").style.backgroundColor = `${bColor}`;
    document.querySelector("html").style.backgroundColor = `${bColor}`;
  };

  function Default() {
    return (
      <>
        <div className="container">
          <div className="headingContainer">
            <h1 className="mainHeading">15 Basic React Projects </h1>
            <h4 className="mainHeading ">
              that are based on react...(obviously){" "}
            </h4>
          </div>

          <div className="row row-cols-3 mt-10 mx-3 ">
            {data.map((cProject) => {
              const { id, image, info, btnP, bColor, name } = cProject;

              return (
                <div
                  className="items card"
                  key={id}
                  onClick={() => {
                    setIsDefault(false);
                    setProject(btnP);
                    functionCall(bColor);
                  }}
                >
                  <img
                    src={image}
                    className="card-img-top imgDefault"
                    alt="..."
                  />

                  <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <div className="hLine" style={{ width: "5vw" }}>
                      <div className="hLineSub hLineSubDefault"></div>
                    </div>
                    <p className="card-text infoDefault">{info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {project}
      {isDefault === true ? (
        <></>
      ) : (
        <button
          className="btnBack btn btn-primary"
          onClick={() => {
            setProject(Default);
            setIsDefault(false);
            functionCall("#fff");
          }}
        >
          {" "}
          Go back
        </button>
      )}
    </>
  );
}
