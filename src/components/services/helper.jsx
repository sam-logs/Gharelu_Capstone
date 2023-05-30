import axios from "axios";

 export const BASE_URL = "";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

