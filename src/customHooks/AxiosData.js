import axios from "axios";

export const Axios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});

export const AxiosAuth = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});
