import axios from "axios";
import { API_KEY, API_URL } from "./constans";
import { Emoji } from "../ts/types";

let isLoading: boolean = false;

export const fetchEmoji = async (): Promise<Emoji[] | null> => {
  try {
    isLoading = true;
    const response = await axios.get(
      `${API_URL}categories/travel-places?access_key=${API_KEY}`
    );
    console.log(response.data);

    return response.data; // Переконайся, що API повертає саме таку структуру
  } catch (err) {
    console.log(err);
    return null; // Щоб уникнути undefined
  } finally {
    isLoading = false;
  }
};
