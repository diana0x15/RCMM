import "./LandingPage.css";
import { Link } from "react-router-dom";
import { createRouteFromName } from "../utils/utils";

const LandingPage = ({ data }) => {
  console.log(data);

  return (
    <>
      <div>Cine Reprezinta Romania?</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
        }}
      >
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
    </>
  );
};

export default LandingPage;
