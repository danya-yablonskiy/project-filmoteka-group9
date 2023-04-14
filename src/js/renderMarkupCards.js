import fetchKeyword from './fetchKeyword';
import { genres } from '../data/genres.json';

// const formEl = document.querySelector('.search-form');
// const cardsEl = document.querySelector('.gallery');

// formEl.addEventListener('submit', onSearch);

// async function onSearch(e) {
//   e.preventDefault();
//   const querySelector = e.currentTarget.elements.searchQuery.value;
//   const newCard = await fetchKeyword(querySelector, 1);
//   const { page, results, total_pages, total_results } = newCard;
//   appendMarkup(results);
// }

function renderMarkupCards(card) {
  return card
    .map(({ poster_path, release_date, genre_ids, title, id }) => {
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
  const genresJson = JSON.stringify(genres);
  const parseGenres = JSON.parse(genresJson);
  let arrayGenres = [];
  for (let i = 0; i < parseGenres.length; i += 1) {
    if (genreId.includes(parseGenres[i].id)) {
      arrayGenres.push(parseGenres[i].name);
    }
  }
  return arrayGenres.splice(0, 2).join(', ');
}

function appendMarkup(card) {
  cardsEl.insertAdjacentHTML('beforeend', renderMarkupCards(card));
}
