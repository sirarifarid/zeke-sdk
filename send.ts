import { AxiosError } from "axios";
import { api } from "./utils/api";

export const send = async ({
  content,
  contentID,
  noAnonymity,
}: {
  content: any;
  contentID: string;
  noAnonymity: boolean;
}) => {
  try {
    const response = await api.post<{ contentID: string }>("/upload", {
      content,
      contentID,
      noAnonymity,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Failed to send content", error.response?.data);
    } else console.error("Failed to send content", error);
  }
};
