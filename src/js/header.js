const logo = document.querySelector('.header-logo');
const form = document.querySelector('.search-form');
const header = document.querySelector('.header-container');
const btnHome = document.querySelector('.button-home');
const btnLibrary = document.querySelector('.button-library');
const input = document.querySelector('.search-form__input');
const libraryBox = document.querySelector('.library-button-box');


btnLibrary.addEventListener('click', onBtnLibraryClick);
btnHome.addEventListener('click', onBtnHomeClick);
 
libraryBox.classList.add('is-hidden');
 
 

function onBtnLibraryClick(e) {
    currentPage = e.target;
    btnHome.classList.remove('is-active');
    currentPage.classList.add('is-active');
    
//запустити функцію,яка очищує контейнер
 
    form.classList.add('is-hidden');
     libraryBox.classList.remove('is-hidden');

    //запустити лоадер
    //запустити рендер функції локал сторейдж
}
function onBtnHomeClick(e) {
    currentPage = e.target;
    btnLibrary.classList.remove('is-active');
    currentPage.classList.add('is-active');
    

    form.classList.remove('is-hidden');
    libraryBox.classList.add('is-hidden');
}

 