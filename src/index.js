import { onSearch } from './js/renderCardsOnPages';
import { renderPopularMovies } from './js/renderCardsOnPages';
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
};

refs.filmCardsContainer.addEventListener('click', onFilmCardsContainerClick);
