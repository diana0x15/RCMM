import React from "react";
import "./Suspiciuni.css";
import Religie from "./suspiciuni/Religie";
import AntiAvort from "./suspiciuni/AntiAvort";
import AntiEgalitate from "./suspiciuni/AntiEgalitate";
import AntiUE from "./suspiciuni/AntiUE";
import Coruptie from "./suspiciuni/Coruptie";
import Educatie from "./suspiciuni/Educatie";
import Penal from "./suspiciuni/Penal";
import Securitate from "./suspiciuni/Securitate";

function Suspiciuni({ color }) {
  const defaultColor = "#A6A6A6";

  return (
    <div className="grid">
      <Card
        icon={<Securitate color={color} />}
        title="Legături cu securitatea"
        color
      />
      <Card icon={<Penal color={color} />} title="Cercetat penal" color />
      <Card icon={<Coruptie color={color} />} title="Corupție și mită" color />
      <Card
        icon={<Educatie color={color} />}
        title="Educație îndoielnică"
        color
      />
      <Card
        icon={<AntiUE color={defaultColor} />}
        title="Anti Europa"
        color={defaultColor}
      />
      <Card
        icon={<AntiEgalitate color={color} />}
        title="Anti egalitate"
        color
      />
      <Card
        icon={<AntiAvort color={defaultColor} />}
        title="Anti avort"
        color={defaultColor}
      />
      <Card icon={<Religie color={color} />} title="Ultra religios" color />
    </div>
  );
}

function Card({ title, icon, color }) {
  return (
    <div className="item">
      {icon}
      <span style={{ color: color }}>{title}</span>
    </div>
  );
}

export default Suspiciuni;
