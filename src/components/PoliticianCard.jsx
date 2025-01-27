import * as React from "react";
import "./PoliticianCard.css";

export default function PoliticianCard({ politician, partid }) {
  console.log(partid);
  const imageUrl = `url(${politician.avatar_vertical.url})`;
  const partyLogoUrl = `url(${partid.logo.url})`;
  const name = politician.prenume + " " + politician.nume;
  return (
    <div className="politiciancard">
      <div
        className="politiciancardphoto"
        style={{ backgroundImage: imageUrl }}
      >
        <div
          className="politiciancardgradient"
          style={{
            background: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, ${partid.culoare} 100%)`,
          }}
        />
        <div
          className="politiciancardparty"
          style={{ backgroundImage: partyLogoUrl }}
        />
      </div>
      <div className="politiciancardname">{name}</div>
    </div>
  );
}
