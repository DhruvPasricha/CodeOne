import React from "react";

export default function Heading(prop) {
  const { name } = prop;
  return (
    <center>
      <div className="heading">{name}</div>
    </center>
  );
}
