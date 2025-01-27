import "./LandingPage.css";
import { Link } from "react-router-dom";
import { createRouteFromName } from "../utils/utils";
import Search from "../components/Search";
import Logo from "../components/Logo";
import PartyCard from "../components/PartyCard";
import PoliticianCard from "../components/PoliticianCard";
import { useState } from "react";
import SegmentedControl from "../components/SegmentedControl";
import DonateButton from "../components/DonateButton";

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
    return (
      <div className="politicienicount">
        {politiciansToShow.length} rezultate.
      </div>
    );
  }

  return (
    <div className="landingPage">
      <div className="banner">
        <div className="logoWrapper">
          <Logo />
        </div>
        <div className="donateButtonWrapper">
          <DonateButton />
        </div>
      </div>

      <div className="titlegroup">
        <h1 className="title">Cine Reprezintă România?</h1>
        <div className="searchWrapper">
          <Search />
        </div>
        <h2 className="subtitle">Informează-te înainte să votezi!</h2>
      </div>

      <div id="partide" className="partide">
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
                document
                  .getElementById("partide")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            />
          );
        })}
      </div>

      <SegmentedControl selectedParty={selectedParty} />

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
