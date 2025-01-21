import * as React from "react";
import "./PartyCard.css";

export default function PartyCard({ partid, isSelected, onSelect }) {
  const logoUrl = `url(${partid.logo.url})`;
  return (
    <div
      className={"partycard" + (isSelected ? " isSelected" : "")}
      style={{ backgroundImage: logoUrl }}
      onClick={onSelect}
    ></div>
  );
}
