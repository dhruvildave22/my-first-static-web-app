import React from "react";

function Card() {
  const value = "World";
  return (
    <>
      <div>Hello {value}</div>
      <div>Card.js {process.env.REACT_APP_DT_CLIENT_ID}</div>
    </>
  );
}

export default Card;
