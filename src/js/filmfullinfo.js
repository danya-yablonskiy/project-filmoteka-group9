import FilmInfoApiService from './filmfullinfoapi';
import { refs } from '../index';
import { saveLocalStorageWatch, saveLocalStorageQueue } from './localStorage';

// Проверка на то, что кликнули именно в картинку
//  if (e.target.nodeName !== 'IMG') {
//    return;
//  }

const filmInfoApiService = new FilmInfoApiService();

export function onFilmCardsContainerClick(e) {
  e.preventDefault();

  clearFilmModal();
  filmInfoApiService.film = e.target.dataset.filmid;

  filmInfoApiService.fetchFilmInfo().then(filmData => {
    customBackdrop(filmData);
    refs.filmModal.insertAdjacentHTML(
      'beforeend',
      makeFilmModalMarkup(filmData)
    );
    openFilmModal();
  });

  filmInfoApiService.fetchFilmTrailer().then(filmTrailer => {
    refs.trailerContainer.insertAdjacentHTML(
      'beforeend',
      makeFilmTrailerMarkup(filmTrailer.results[0].key)
    );
  });
}

function makeFilmModalMarkup({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
  release_date,
}) {
  return `<div class="modal-film__img-box">
              <img class="modal-film__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
          </div>
      <div class="modal-film__thumb">
         <h3 class="modal-film__title">${title}</h3>
         <ul class="modal-film__about">
          <li class="modal-film__about-line">
              <p class="modal-film__about-line--name">Vote / Votes</p>
              <p>
                  <span class="modal-film__about-line--red">${vote_average}</span>
                  <span class="modal-film__about-line--slash">/</span>
                  <span>${vote_count}</span>
              </p>
          </li>
          <li class="modal-film__about-line">
              <p class="modal-film__about-line--name">Popularity</p>
              <p>${popularity}</p>
          </li>
          <li class="modal-film__about-line">
              <p class="modal-film__about-line--name">Original Title</p>
              <p class="modal-film__about-line--up">${original_title}</p>
          </li>
          <li class="modal-film__about-line">
              <p class="modal-film__about-line--name">Genre</p>
              <p>${genres.map(genre => genre.name).join(', ')}</p>
          </li>
         </ul>
         <h3 class="modal-film__subtitle">About</h3>
         <p class="modal-film__description">${overview}</p>
         <div class="modal-film__btns">
          <button type="button" class="modal-film__btn--watch" data-id="${id}" data-title="${title}" data-genre="[${genres.map(
    genre => genre.id
  )}]" data-poster="${poster_path}" data-release="${release_date}">Add to Watched</button>
          <button type="button" class="modal-film__btn--queue" data-id="${id}" data-title="${title}" data-genre="[${genres.map(
    genre => genre.id
  )}]" data-poster="${poster_path}" data-release="${release_date}">Add to queue</button>
         </div>
      </div>`;
}

function makeFilmTrailerMarkup(trailerLink) {
  return `<iframe class="modal-film__trailer" src="https://www.youtube.com/embed/${trailerLink}?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function clearFilmModal() {
  refs.filmModal.innerHTML = '';
  refs.trailerContainer.innerHTML = '';
}

function openFilmModal() {
  refs.filmModalBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-film-open');
  document.addEventListener('keydown', onEscButtonPress);
  refs.filmModalBackdrop.addEventListener('click', onBackdropClick);
  const modalCloseBtn = document.querySelector('.modal-film__close');
  modalCloseBtn.addEventListener('click', closeFilmModal);
  document
    .querySelector('.modal-film__btn--watch')
    .addEventListener('click', saveLocalStorageWatch);
  document
    .querySelector('.modal-film__btn--queue')
    .addEventListener('click', saveLocalStorageQueue);
}

export function closeFilmModal() {
  refs.filmModalBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-film-open');
  document.removeEventListener('keydown', onEscButtonPress);
  refs.filmModalBackdrop.removeEventListener('click', onBackdropClick);
}

function onEscButtonPress(e) {
  if (e.key === 'Escape') {
    closeFilmModal();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeFilmModal();
  }
}

function customBackdrop({ backdrop_path }) {
  refs.filmModalBackdrop.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backdrop_path})`;
}
