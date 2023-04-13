import axios from "axios";
import { pathParams } from "./options";

export default async function fetchKeyword(name) {
    const { BASE_URL, API_KEY, media_type} = pathParams;
  try {
    const response = await
      axios.get(`${BASE_URL}/search/${media_type}?api_key=${API_KEY}&language=en-US&query=${name}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    }

};