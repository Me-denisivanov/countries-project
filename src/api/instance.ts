import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com/v2/",
});

export const instanceService = {
  get: instance.get,
};

export default instance;
