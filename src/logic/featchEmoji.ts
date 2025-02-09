import axios from "axios";
import { API_KEY, API_URL } from "./constans";

let isLoading: boolean = false;

export const featchEmoji = async () => {
  try {
    isLoading = true;
    // const LIMIT = 10;
    const response = await axios.get(
      `${API_URL}categories/travel-places?access_key=${API_KEY}`
    );
    console.log(response.data);

    return response;
  } catch (err) {
    isLoading = false;
    console.log(err);
    return;
  } finally {
    isLoading = false;
  }
};
