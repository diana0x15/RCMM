import { useState, useEffect } from "react";
import "./App.css";
import { Profile } from "./components/Profile";
import useData from "./hooks/useData";

function App() {
  const [getData, data, error] = useData();

  if (error || !data || !data.length) {
    return null;
  }

  const ciolacu = data[0];

  return <Profile profileInfo={ciolacu} />;
}

export default App;
