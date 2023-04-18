import { clearMarkup } from './pagination';

import { renderFilmLibrary } from './localStorage';


 
const form = document.querySelector('.search-form');
 
const btnHome = document.querySelector('.button-home');
const btnLibrary = document.querySelector('.button-library');
const logInBtn = document.querySelector('.login-button');
const libraryBox = document.querySelector('.library-button-box');
const paginationForRemove = document.querySelector('.tui-pagination');


btnLibrary.addEventListener('click', onBtnLibraryClick);
btnHome.addEventListener('click', onBtnHomeClick);

 
libraryBox.classList.add('is-hidden');
btnHome.classList.add('is-active');
 
 


   
function onBtnLibraryClick(e) {       
    btnHome.classList.remove('is-active');    
    btnLibrary.classList.add('is-active');
    
 
    clearMarkup();
 
    form.classList.add('is-hidden');
    logInBtn.classList.add('is-hidden');
    libraryBox.classList.remove('is-hidden');
 
     
     
    renderFilmLibrary();
    paginationRemove();
     
    
}
function onBtnHomeClick(e) {
    
    btnLibrary.classList.remove('is-active');    
    btnHome.classList.add('is-active');
    

    form.classList.remove('is-hidden');
    logInBtn.classList.remove('is-hidden');
    libraryBox.classList.add('is-hidden');

    
}
function paginationRemove() {
    paginationForRemove.innerHTML = '';
}
 