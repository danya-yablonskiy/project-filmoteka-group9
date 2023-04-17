import axios from "axios";
import { pathParams } from "./options";
import displayLoader  from "./loader";
import hideLoader from "./loader";

fetchPopularMovies
export default async function fetchKeyword(name, page) {
  displayLoader();
    const { BASE_URL, API_KEY, media_type} = pathParams;
  try {
    const response = await
      axios.get(`${BASE_URL}/search/${media_type}?api_key=${API_KEY}&language=en-US&query=${name}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error(error);
    }
  hideLoader();
};