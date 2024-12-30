import { useState, useEffect } from "react";
import "./App.css";
import jsonData from "./data.json";
import { Profile } from "./components/Profile";
import useData from "./hooks/useData";

function App() {
  const [getData, data, error] = useData();

  if (error) {
    return <>No data :(</>;
  }

  return <Profile />;
}

export default App;
