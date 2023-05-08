import axiosInstance from "./AxiosConfig";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://api.wallstreet.credenz.in/api";

export const getAllIpo = () => {
  return axios
    .get(`${API_URL}/IPO`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const subscribeIpo = (data) => {
  return axiosInstance.post("/IPOAddSub/", data);
};

export const ipoPortfolio = () => {
  return axiosInstance.get("/IPOSub/");
};
