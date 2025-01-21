import * as React from "react";
import "./PoliticianCard.css";

export default function PoliticianCard({ politician }) {
  const imageUrl = `url(${politician.avatar_vertical.url})`;
  const name = politician.prenume + " " + politician.nume;
  return (
    <div className="politiciancard">
      <div
        className="politiciancardphoto"
        style={{ backgroundImage: imageUrl }}
      ></div>
      <div className="politiciancardname">{name}</div>
    </div>
  );
}
