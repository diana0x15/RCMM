import React from "react";
import "./Suspiciuni.css";
import penal from "../assets/badges/penal.svg";
import securitate from "../assets/badges/securitate.svg";
import coruptie from "../assets/badges/coruptie.svg";
import anti_avort from "../assets/badges/anti_avort.svg";
import anti_egalitate from "../assets/badges/anti_egalitate.svg";
import anti_ue from "../assets/badges/anti_ue.svg";
import educatie from "../assets/badges/educatie.svg";
import religie from "../assets/badges/religie.svg";
import penal_red from "../assets/badges_red/penal.svg";
import securitate_red from "../assets/badges_red/securitate.svg";
import coruptie_red from "../assets/badges_red/coruptie.svg";
import anti_avort_red from "../assets/badges_red/anti_avort.svg";
import anti_egalitate_red from "../assets/badges_red/anti_egalitate.svg";
import educatie_red from "../assets/badges_red/educatie.svg";
import anti_ue_red from "../assets/badges_red/anti_ue.svg";
import religie_red from "../assets/badges_red/religie.svg";

function Suspiciuni() {
  return (
    <div className="grid">
      <Card
        image={securitate_red}
        title="Legături cu securitatea"
        isRed={true}
      />
      <Card image={penal_red} title="Cercetat penal" isRed={true} />
      <Card image={coruptie_red} title="Corupție și mită" isRed={true} />
      <Card
        image={educatie_red}
        title="Educație
îndoielnică"
        isRed={true}
      />
      <Card image={anti_ue} title="Anti Europa" />
      <Card image={anti_egalitate_red} title="Anti egalitate" isRed={true} />
      <Card image={anti_avort} title="Anti avort" />
      <Card image={religie_red} title="Ultra religios" isRed={true} />
    </div>
  );
}

function Card({ title, image, isRed }) {
  return (
    <div className="item">
      <img src={image} />
      <span className={isRed ? "isRed" : ""}>{title}</span>
    </div>
  );
}

export default Suspiciuni;
