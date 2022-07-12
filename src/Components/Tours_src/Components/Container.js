import React, { useEffect, useState } from "react";
import Card from "./Card";
import Reviews from "./Reviews_src/Reviews";
import FAQ from "./FAQ_src/FAQ";

// import data from "./data";
// Use the hard coded data if the API doesnt works.
// handle the data and remove button

export default function Container() {
  const [tours, setTours] = useState([]);

  const getData = async () => {
    const request = await fetch("https://course-api.com/react-tours-project");
    const data = await request.json();
    setTours(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="tcontainer container">
        <div className="headingContainer">
          <h1 className="mainHeading">
            <strong>Our Tours</strong>
          </h1>
          <div className="hLine">
            <div className="hLineSub"></div>
          </div>
        </div>

        {tours.map((tour) => {
          return <Card key={tour.id} {...tour}></Card>;
        })}
      </div>
      <Reviews />
      <FAQ />
    </>
  );
}
