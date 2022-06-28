import React, { useState } from "react";
import Row from "./Row";
import data from "../data";

export default function Container() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <div className="bcontainer container">
        <h4 className="mainHeading">
          <strong>{people.length} birthdays today</strong>
        </h4>

        {people.map((singleData) => {
          return <Row key={singleData.id} {...singleData} />;
        })}

        <button
          type="button"
          className="btn btnb btn-primary"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear all
        </button>
      </div>
    </>
  );
}
