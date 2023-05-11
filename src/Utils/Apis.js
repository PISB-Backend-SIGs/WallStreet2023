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

export const placeBuyOrder = (data) => {
  return axiosInstance.post("/AddBuyOrders/", data);
};

export const getAllStocks = () => {
  return axiosInstance.get("/company/");
};

export const getStockDetail = (id) => {
  return axiosInstance.get(`/company/${id}`);
};


