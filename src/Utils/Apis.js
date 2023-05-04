import axiosInstance from "./AxiosConfig";
import axios from "axios";
import {toast} from 'react-toastify';

const API_URL = "http://127.0.0.1:8000/api";

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
  return axiosInstance
    .post("/IPOAddSub/", data)
};
