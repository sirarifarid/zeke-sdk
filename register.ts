import { AxiosError } from "axios";
import { api } from "./utils/api";

type RegisterResponse = {
  notes: string;
  info: {
    publicKey: string;
    secret: string;
    accessToken: string;
  };
  publicKey: string;
  secret: string;
  accessToken: string;
};

export const register = async (address: string) => {
  try {
    const response = await api.get<RegisterResponse>("/register");
    console.log({
      info: response.data.info,
      notes: response.data.notes,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else console.error(error);
    throw error;
  }
};
