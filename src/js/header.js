// import { displayLoader } from './loader';
// import { hideLoader } from './loader';
// import { renderFilmLibrary } from './localStorage';
// import { appendMarkup } from './renderMarkupCards';

const logo = document.querySelector('.header-logo');
const form = document.querySelector('.search-form');
const header = document.querySelector('.header-container');
const btnHome = document.querySelector('.button-home');
const btnLibrary = document.querySelector('.button-library');
const input = document.querySelector('.search-form__input');
const libraryBox = document.querySelector('.library-button-box');
const logInBtn = document.querySelector('.login-button');
const gallery = document.querySelector('.gallery');



btnLibrary.addEventListener('click', onBtnLibraryClick);
btnHome.addEventListener('click', onBtnHomeClick);

 
libraryBox.classList.add('is-hidden');
btnHome.classList.add('is-active');
 
 

function onBtnLibraryClick(e) {
    currentPage = e.target;
    btnHome.classList.remove('is-active');
    currentPage.classList.add('is-active');
    
//запустити функцію,яка очищує контейнер
    // gellaryClear();
 
    form.classList.add('is-hidden');
    logInBtn.classList.add('is-hidden');
    libraryBox.classList.remove('is-hidden');

    // запустити лоадер
    // displayLoader();
    // hideLoader();
    // //запустити рендер функції локал сторейдж
     
    
}
function onBtnHomeClick(e) {
    currentPage = e.target;
    btnLibrary.classList.remove('is-active');
    currentPage.classList.add('is-active');
    

    form.classList.remove('is-hidden');
    logInBtn.classList.remove('is-hidden');
    libraryBox.classList.add('is-hidden');

    // appendMarkup();
}
function gellaryClear(){
    gallery.innerHTML = '';
}
