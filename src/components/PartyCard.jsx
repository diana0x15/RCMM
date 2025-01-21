import * as React from "react";
import "./PartyCard.css";

export default function PartyCard({ partid }) {
  const logoUrl = `url(${partid.logo.url})`;
  return <div className="partycard" style={{ backgroundImage: logoUrl }}></div>;
}
