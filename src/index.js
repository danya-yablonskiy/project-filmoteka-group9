import { onSearch } from './js/renderCardsOnPages';
import { renderPopularMovies } from './js/renderCardsOnPages';
import './js/header';
import './js/header-modal';

const headerClass = document.querySelector('header');
headerClass.classList.add('homePage');
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', onSearch);
renderPopularMovies();
