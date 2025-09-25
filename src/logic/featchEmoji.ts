import axios from "axios";
import { API_KEY, API_URL } from "./constans";
import { Emoji } from "../ts/types";
import iziToast from "izitoast";

export const fetchEmoji = async (): Promise<Emoji[] | null> => {
  try {
    const response = await axios.get(
      `${API_URL}categories/travel-places?access_key=${API_KEY}`
    );
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      iziToast.error({
        title: "Error",
        message: err.message,
        position: "topRight",
      });
    } else {
      iziToast.error({
        title: "Error",
        message: "Unknown error",
        position: "topRight",
      });
    }
    return null;
  }
};
