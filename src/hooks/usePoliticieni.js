import { useEffect, useState } from "react";
import dataAPI from "../api/data";

export default () => {
  const [politicieni, setPoliticieni] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPoliticieni();
  }, []);

  const getPoliticieni = async () => {
    try {
      setError(false);
      const response = await dataAPI.get("/politicieni?populate=*");
      setPoliticieni(response.data.data);
    } catch (err) {
      setError(true);
    }
  };

  return [getPoliticieni, politicieni, error];
};
