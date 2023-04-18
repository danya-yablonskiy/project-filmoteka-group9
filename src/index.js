import { onSearch } from './js/renderCardsOnPages';
import { renderPopularMovies } from './js/renderCardsOnPages';
import { renderFilmWatch,renderFilmQueue,renderFilmLibrary } from './js/localStorage';
import './js/header';
import './js/header-modal';

const headerClass = document.querySelector('header');
headerClass.classList.add('homePage');
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', onSearch);
renderPopularMovies();

import { onFilmCardsContainerClick } from './js/filmfullinfo';

export const refs = {
  filmCardsContainer: document.querySelector('.gallery'),
  filmModal: document.querySelector('.modal-film__wrapper'),
  trailerContainer: document.querySelector('.modal-film__trailer-container'),
  filmModalBackdrop: document.querySelector('.modal-backdrop'),
  watchBtn : document.querySelector('button[data-action="watch"]'),
  queueBtn : document.querySelector('button[data-action="queue"]'),
  libraryBtn: document.querySelector('button[data-action="library"]'),
};

refs.filmCardsContainer.addEventListener('click', onFilmCardsContainerClick);
refs.watchBtn.addEventListener('click', renderFilmWatch);
refs.queueBtn.addEventListener('click', renderFilmQueue);

