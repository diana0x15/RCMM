import "./LandingPage.css";
import { Link } from "react-router-dom";
import { createRouteFromName } from "../utils/utils";
import Search from "../components/Search";
import Logo from "../components/Logo";

const LandingPage = ({ data }) => {
  return (
    <div className="landingPage">
      <Logo />

      <h1 className="title">Cine Reprezintă România?</h1>
      <div className="searchWrapper">
        <Search />
      </div>
      <h2 className="subtitle">Informează-te înainte să votezi!</h2>

      <div className="items">
        {data.map((politician) => {
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
