import { pathParams } from './options';
import { displayLoader, hideLoader } from './loader';

export default class FilmInfoApiService {
  constructor() {
    this.filmId = 2;
  }

  fetchFilmInfo() {
    const url = `${pathParams.BASE_URL}movie/${this.filmId}?api_key=${pathParams.API_KEY}&language=en-US`;

    return fetch(url)
      .then(response => response.json())
      .then(filmData => {
        return filmData;
      });
  }

  fetchFilmTrailer() {
    const url = `${pathParams.BASE_URL}movie/${this.filmId}/videos?api_key=${pathParams.API_KEY}&language=en-US`;
    displayLoader();
    return fetch(url)
      .then(response => response.json())
      .then(filmTrailer => {
        return filmTrailer;
      });
  }

  get film() {
    return this.filmId;
  }

  set film(newFilmId) {
    return (this.filmId = newFilmId);
  }
}
