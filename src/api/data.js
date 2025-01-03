import axios from "axios";

export const BASE_URL = "http://localhost:1337";

export default axios.create({
  baseURL: BASE_URL + "/api",
});
