import axios from "axios";
import { API_KEY, API_URL } from "./constans";
import { Emoji } from "../ts/types";

export const fetchEmoji = async (): Promise<Emoji[] | null> => {
  try {
    const response = await axios.get(
      `${API_URL}categories/travel-places?access_key=${API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
