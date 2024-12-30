import { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";
import { Profile } from "./components/Profile";

function App() {
  useEffect(() => {
    console.log(data);
  }, []);

  return <Profile />;
}

export default App;
