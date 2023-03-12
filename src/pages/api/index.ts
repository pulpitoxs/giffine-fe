import axios from "axios";

export interface GiftApiProps {
  older: string;
  country: string;
  likes: string;
}

export const fetchRequestGiftApi = async ({
  older,
  country,
  likes,
}: GiftApiProps) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_REQUEST}/`, {
    params: {
      older: older,
      repeat: false,
      country: country,
      likes: likes,
    },
  });
  return response;
};
