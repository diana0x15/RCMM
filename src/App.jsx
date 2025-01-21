import "./App.css";
import Profile from "./screens/Profile";
import LandingPage from "./screens/LandingPage";
import usePoliticieni from "./hooks/usePoliticieni";
import usePartidePolitice from "./hooks/usePartidePolitice";
import { Routes, Route } from "react-router-dom";
import { createRouteFromName } from "./utils/utils";

function App() {
  const [getPoliticieni, politicieni, error1] = usePoliticieni();
  const [getPartidePolitice, partidePolitice, error2] = usePartidePolitice();

  if (error1 || error2 || !politicieni || !partidePolitice) {
    return null;
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              politicieni={politicieni}
              partidePolitice={partidePolitice}
            />
          }
        />
        {politicieni.map((politician) => {
          return (
            <Route
              key={politician.documentId}
              path={createRouteFromName(politician)}
              element={<Profile profileInfo={politician} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
