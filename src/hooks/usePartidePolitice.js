import { useEffect, useState } from "react";
import dataAPI from "../api/data";

export default () => {
  const [partidePolitice, setPartidePolitice] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPartidePolitice();
  }, []);

  const getPartidePolitice = async () => {
    try {
      setError(false);
      const response = await dataAPI.get("/partide-politice?populate=*");
      setPartidePolitice(response.data.data);
    } catch (err) {
      setError(true);
    }
  };

  return [getPartidePolitice, partidePolitice, error];
};
