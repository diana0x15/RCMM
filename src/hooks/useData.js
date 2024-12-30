import { useEffect, useState } from "react";
import dataAPI from "../api/data";

export default () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setError(false);
      const response = await dataAPI.get("/politicieni");
      setData(response.data.data);
    } catch (err) {
      setError(true);
    }
  };

  return [getData, data, error];
};
