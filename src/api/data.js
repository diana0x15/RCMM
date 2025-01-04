import axios from "axios";

export const DEBUG_BASE_URL = "http://localhost:1337";
export const PROD_BASE_URL = "https://rcmm-cms-cd541c47bdd5.herokuapp.com";

export default axios.create({
  baseURL: PROD_BASE_URL + "/api",
});
