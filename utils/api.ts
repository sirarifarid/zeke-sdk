import axios from "axios";

export const api = axios.create({
  baseURL: "https://zeke-protocol.xyz",
  headers: {
    "Content-Type": "application/json",
    "X-Access-Token": process.env.ZEKE_ACCESS_TOKEN,
  },
});
