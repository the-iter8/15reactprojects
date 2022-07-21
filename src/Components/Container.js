import React from "react";
import { Link } from "react-router-dom";

// Add the loading screen
// Change the IMGUR hosting to some other host.

const data = [
  {
    id: 0,
    image: "https://i.imgur.com/92k0SoD.jpg",
    name: "Tours",
    info: "An application that displays a set of tours from an API.",
    bColor: "#fff",
    linkTo: "tours",
  },

  {
    id: 1,
    image: "https://i.imgur.com/2OyS6oZ.png",
    name: "Restaurant",
    info: "A simple menu that could be used to display items that a place offers.  ",
    bColor: "#e6dcd2",
    linkTo: "restaurant",
  },
  {
    id: 2,
    image: "https://i.imgur.com/CBKXK6G.jpg",
    name: "Birthday",
    info: "A simple application that displays a set of birthdays from an API. ",
    bColor: "#f28ab2",
    linkTo: "birthday",
  },
];
export default function Container() {
  const backgroundSet = (bColor) => {
    document.querySelector("#root").style.backgroundColor = `${bColor}`;
    document.querySelector("html").style.backgroundColor = `${bColor}`;
  };

  const cardClickHandle = (bColor, id) => {
    const projectLink = `/${data[id].linkTo}`;
    //Clicking the Router link.
    document.querySelector(`a[href="${projectLink}"]`).click();

    //Setting the background colors.
    backgroundSet(bColor);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="dContainer container">
        <div className="headingContainer">
          <h1 className="mainHeading">
            <strong>React Projects </strong>
          </h1>
          <h4 className="mainHeading ">
            that are based on react...(obviously){" "}
          </h4>
        </div>

        <div className="row row-cols-3 mt-10 mx-3 ">
          {data.map((cProject) => {
            const { id, image, info, linkTo, bColor, name } = cProject;

            return (
              <div
                className="items card"
                key={id}
                onClick={() => {
                  cardClickHandle(bColor, id);
                }}
              >
                <img
                  src={image}
                  className="card-img-top imgDefault"
                  alt="..."
                />

                <div className="card-body">
                  <h4 className="card-title">
                    <Link to={`/${linkTo}`}>{name} </Link>
                  </h4>
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
