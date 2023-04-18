import { clearMarkup } from './pagination';
import { displayLoader }  from "./loader";
import { hideLoader } from "./loader";
import { renderFilmLibrary } from './localStorage';


 
const form = document.querySelector('.search-form');
 
const btnHome = document.querySelector('.button-home');
const btnLibrary = document.querySelector('.button-library');
const logInBtn = document.querySelector('.login-button');
const libraryBox = document.querySelector('.library-button-box');

 



btnLibrary.addEventListener('click', onBtnLibraryClick);
btnHome.addEventListener('click', onBtnHomeClick);

 
libraryBox.classList.add('is-hidden');
btnHome.classList.add('is-active');
 
 

function onBtnLibraryClick(e) {
    currentPage = e.currentTarget;   
    btnHome.classList.remove('is-active');
    currentPage.classList.add('is-active');
    
//запустити функцію,яка очищує контейнер
    clearMarkup();
 
    form.classList.add('is-hidden');
    logInBtn.classList.add('is-hidden');
    libraryBox.classList.remove('is-hidden');

    // // запустити лоадер
    // displayLoader();
    // hideLoader();
     
    // //запустити рендер функції локал сторейдж
    renderFilmLibrary();
     
    
}
function onBtnHomeClick(e) {
    currentPage = e.currentTarget;
    btnLibrary.classList.remove('is-active');
    currentPage.classList.add('is-active');
    

    form.classList.remove('is-hidden');
    logInBtn.classList.remove('is-hidden');
    libraryBox.classList.add('is-hidden');

    
}
 