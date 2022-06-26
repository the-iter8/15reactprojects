import React from "react";

export default function Row({ id, name, age, image }) {

  return (
    <>
      <div className="brow row">
        <section className="bsection">
          <img src={image} alt=" " className="dp" />
        </section>

        <section className="bsection" style={{ paddingTop: "1em" }}>
          <p className="name">
            <strong>{name}</strong>
          </p>
          <p className="age" style={{paddingLeft:"-2rem"}}>{age} Years</p>
        </section>
      </div>
      
    </>
  );
}
