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

export const placeSellOrder = (data) => {
  return axiosInstance.post("/AddSellOrders/", data);
};

export const getAllStocks = () => {
  return axiosInstance.get("/company/");
};

export const getStockDetail = (id) => {
  return axiosInstance.get(`/company/${id}`);
};

// Change this later
export const getNews = (id) => {
  return axios.get("https://api.wallstreet.credenz.in/api/news/");
};

export const getNewsDetail = (id) => {
  return axiosInstance.get(`/news/${id}`);
};

export const getPortfolio = () => {
  return axiosInstance.get("/profile/");
};

export const getUserShares = (id) => {
  return axiosInstance.get(`/companyshares/?id=${id}`);
};
