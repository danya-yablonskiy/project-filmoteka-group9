const API_KEY = '608a612cc746968ead61312fe4955129';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export default class FilmInfoApiService {
  constructor() {
    this.filmId = 2;
  }

  fetchFilmInfo() {
    const url = `${BASE_URL}/${this.filmId}?api_key=${API_KEY}&language=en-US`;

    return fetch(url)
      .then(response => response.json())
      .then(filmData => {
        return filmData;
      });
  }

  fetchFilmTrailer() {
    const url = `${BASE_URL}/${this.filmId}/videos?api_key=${API_KEY}&language=en-US`;

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
