import "./App.css";
import { Profile } from "./components/Profile";
import useData from "./hooks/useData";

function App() {
  const [getData, data, error] = useData();

  if (error || !data || !data.length) {
    return null;
  }

  const politician = data[1];

  return <Profile profileInfo={politician} />;
}

export default App;
