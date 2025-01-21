import "./LandingPage.css";
import { Link } from "react-router-dom";
import { createRouteFromName } from "../utils/utils";
import Search from "../components/Search";
import Logo from "../components/Logo";
import PartyCard from "../components/PartyCard";

const LandingPage = ({ politicieni, partidePolitice }) => {
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
          return <PartyCard key={partid.documentId} partid={partid} />;
        })}
      </div>

      <div className="politicieni">
        {politicieni.map((politician) => {
          return (
            <Link
              key={politician.documentId}
              to={createRouteFromName(politician)}
            >
              {politician.prenume} {politician.nume}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
