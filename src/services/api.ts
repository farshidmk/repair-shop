import { ServerCallType } from "@/types/server";
import axios from "axios";

// export const BASE_URL = process.env.REACT_APP_API_URL;

export const BASE_URL = "http://localhost:3000/api/";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const serverCall = async ({
  entity,
  method,
  data = { test: 1 },
}: ServerCallType) => {
  try {
    console.log({ api }, BASE_URL);
    const requestOptions = {
      url: entity,
      method,
      headers: {
        "Accept-Language": "fa",
        Authorization: "Bearer " + "token",
      },
      redirect: "follow",
      ...(data && { data: JSON.stringify(data) }),
    };
    const response = await api({ ...requestOptions });
    if (response?.status === 200) {
      return response?.data;
    } else if (response?.status === 204) {
      return { data: { rows: [] } };
    } else {
      throw new Error(`Error on operation... - ${response?.statusText}`);
    }
  } catch (e) {
    console.log({ e });
    throw new Error(JSON.stringify(e) || `Error on operation...`);
  }
};
