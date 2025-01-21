import "./LandingPage.css";
import { Link } from "react-router-dom";
import { createRouteFromName } from "../utils/utils";
import Search from "../components/Search";
import Logo from "../components/Logo";
import PartyCard from "../components/PartyCard";
import PoliticianCard from "../components/PoliticianCard";
import { useState } from "react";

const LandingPage = ({ politicieni, partidePolitice }) => {
  let [selectedParty, setSelectedParty] = useState(null);
  let politiciansToShow = politicieni;

  if (selectedParty) {
    politiciansToShow = politicieni.filter(
      (p) => p.partid_politic.documentId === selectedParty.documentId
    );
  }

  function maybeRenderEmptyList() {
    if (politiciansToShow.length) {
      return null;
    }
    return <div>0 rezultate</div>;
  }

  return (
    <div className="landingPage">
      <Logo />

      <h1 className="title">Cine Reprezintă România?</h1>
      <div className="searchWrapper">
        <Search />
      </div>
      <h2 className="subtitle">Informează-te înainte să votezi!</h2>

      <div className="partide">
        {partidePolitice.map((partid) => {
          return (
            <PartyCard
              key={partid.documentId}
              partid={partid}
              isSelected={partid.documentId == selectedParty?.documentId}
              onSelect={() => {
                // If already selected, deselect.
                if (partid.documentId == selectedParty?.documentId) {
                  setSelectedParty(null);
                } else {
                  setSelectedParty(partid);
                }
              }}
            />
          );
        })}
      </div>

      <div className="politicieni">
        {maybeRenderEmptyList()}
        {politiciansToShow.map((politician) => {
          return (
            <Link
              className="politicianlink"
              key={politician.documentId}
              to={createRouteFromName(politician)}
            >
              <PoliticianCard politician={politician} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
