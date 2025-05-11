import { api } from "./utils/api";

export const get = async ({
  contentID,
  publicKey,
}: {
  contentID?: string;
  publicKey: string;
}) => {
  const url = new URL(api.defaults.baseURL + "/get");
  url.searchParams.set("publicKey", publicKey);
  contentID && url.searchParams.set("contentID", contentID);

  const response = await api.get(url.toString());
  return response.data;
};
