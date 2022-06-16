import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

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

  if (tours != []) {
    return (
      <>
        <div className="container">
          <h1>Our Tours.</h1>
          {tours.map((tour) => {
            return <Card key={tour.id} {...tour}></Card>;
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Loading />
      </>
    );
  }
}
