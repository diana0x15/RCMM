import "./App.css";
import Profile from "./screens/Profile";
import LandingPage from "./screens/LandingPage";
import useData from "./hooks/useData";
import { Routes, Route } from "react-router-dom";
import { createRouteFromName } from "./utils/utils";

function App() {
  const [getData, data, error] = useData();

  if (error || !data || !data.length) {
    return null;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage data={data} />} />
        {data.map((politician) => {
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
