import fetchKeyword from './fetchKeyword';
import { genres } from '../data/genres.json';

const gallery = document.querySelector('.gallery');

const genresJson = JSON.stringify(genres);
const parseGenres = JSON.parse(genresJson);
let arrayGenres = [];


function renderMarkupCards(card) {
  return card
    .map(({ poster_path, release_date, genre_ids, title, id }) => {
      if (!poster_path || !release_date || !arrayGenres) {
        return;
      }
      return `<div class="gallery__film-card">
        <a class="gallery__link" href="">
        <img class='card__image' src="https://image.tmdb.org/t/p/original/${poster_path}" data-filmid="${id}" loading="lazy" width='280' height='400'/>
        <p class="card__title">${title}</p>
        <div class="card__wrapper">
        <p class="card__genres">${genresRender(genre_ids)}</p>
        <span class="card__el">&nbsp; | &nbsp;</span>
        <p class="card__date">${release_date.split('-').splice(0, 1)}</p>
        </div>
        </a>
        </div>`;
    })
    .join('');
}

function genresRender(genreId) {
  for (let i = 0; i < parseGenres.length; i += 1) {
    if (genreId.includes(parseGenres[i].id)) {
      arrayGenres.push(parseGenres[i].name);
    }
  }
  return arrayGenres.join(', ');
}

function appendMarkup(card) {
  gallery.insertAdjacentHTML('beforeend', renderMarkupCards(card));
}
