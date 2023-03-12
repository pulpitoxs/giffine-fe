import axios from "axios";

export const fetchRequestGiftApi = (request: string) => {
  return axios.get(`${process.env.NEXT_PUBLIC_CLIENT_ID}/example/${request}`);
};
