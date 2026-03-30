import axios from "axios";
import { Emoji } from "../ts/types";
import { API_KEY, API_URL } from "./constants";

export const fetchEmoji = async (): Promise<Emoji[] | null> => {
  try {
    const response = await axios.get(
      `${API_URL}categories/travel-places?access_key=${API_KEY}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
