import Notiflix from "notiflix";
import { refs } from "..";
import { appendMarkup } from "./renderMarkupCards";
const STORAGE_KEY_WATCH = 'save-watch';
const STORAGE_KEY_QUEUE = 'save-queue';

//Вставити у модалку
//import { saveLocalStorageWatch } from "./js/localStorage";
//import { saveLocalStorageQueue } from "./js/localStorage";

// button1.addEventListener('click', saveLocalStorageWatch);
// button2.addEventListener('click', saveLocalStorageQueue);

//data-action="watch"
//data-action="queue"
//data-action="library"

const watchBtn = document.querySelector('button[data-action="watch"]');
const queueBtn = document.querySelector('button[data-action="queue"]');
const libraryBtn = document.querySelector('button[data-action="library"]');


const saveLocalStorageWatch = (event) => {
    const buttonEl = event.currentTarget;
    let arrFilmsWatch = [];
    const film = {
        id: buttonEl.dataset.id,
        title: buttonEl.dataset.title,
        genre_ids: buttonEl.dataset.genre,
        poster_path: buttonEl.dataset.poster,
        release_date:buttonEl.dataset.release,
    };
    // console.log(film)
    if (localStorage.getItem(STORAGE_KEY_WATCH)) {
        arrFilmsWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
        if (arrFilmsWatch.find(filmWatch => filmWatch.id === film.id)) {             
            Notiflix.Notify.failure('Such a movie is already added to WATCH');
            return;
        }
        arrFilmsWatch.push(film);
        localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilmsWatch));
        Notiflix.Notify.success('Movie is saved')
        return;
    }
    arrFilmsWatch.push(film);
    localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilmsWatch));
};

const saveLocalStorageQueue = (event) => {
    const buttonEl = event.currentTarget;
    let arrFilmQueue = [];
    const film = {
        id: buttonEl.dataset.id,
        title: buttonEl.dataset.title,
        genre_ids: buttonEl.dataset.genre,
        poster_path: buttonEl.dataset.poster,
        release_date:buttonEl.dataset.release,
    };   
    if (localStorage.getItem(STORAGE_KEY_QUEUE)) {
        arrFilmQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
        if (arrFilmQueue.find(filmQueue => filmQueue.id === film.id)) {             
            Notiflix.Notify.failure('Such a movie is already added to QUEUE');
            return;
        }
        arrFilmQueue.push(film);
        localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(arrFilmQueue));
        return;
    }
    arrFilmQueue.push(film);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(arrFilmQueue));
};

const renderFilmWatch = () => {
    //почистити контейнер

    refs.filmCardsContainer.innerHTML = '';
    
    if (localStorage.getItem(STORAGE_KEY_WATCH)) {
        const savedFilm = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
        appendMarkup(savedFilm);
        return;
    }
    Notiflix.Notify.failure('Not Found saved Watch');
};

const renderFilmQueue = () => {
    //почистити контейнер
    refs.filmCardsContainer.innerHTML = '';
    
    if (localStorage.getItem(STORAGE_KEY_QUEUE)) {
        const savedFilm = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
        appendMarkup(savedFilm);
        return;
    }
    Notiflix.Notify.failure('Not Found saved Queue');
};

const renderFilmLibrary = () => {
    refs.filmCardsContainer.innerHTML = ''; 
    let allFilms = [];
    const savedFilmWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
    const savedFilmQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
    
    if (savedFilmWatch && savedFilmQueue) {
        allFilms.push(...savedFilmQueue, ...savedFilmWatch);        
        let allIdFilms = allFilms.map(film => film.id)
        .filter((id, index, array) => array.indexOf(id) === index
        );        
        let uniqueId = [];
        
        for (let i = 0; i < allIdFilms.length; i+=1) {
            const newFilm = allFilms.find(options => options.id === allIdFilms[i]);
            uniqueId.push(newFilm);
            
}
        appendMarkup(uniqueId);
        return;    
    }
    if (!savedFilmWatch) {
        if (!savedFilmQueue) {
            Notiflix.Notify.failure('Not Found movie saved');
            return;
        }
        appendMarkup(savedFilmQueue);
        return;
    }
    appendMarkup(savedFilmWatch);

}
    
const deleteFilmInWatch = (event) => {    
    let arrSevedFilms = [];
    const buttonEl = event.currentTarget;
    if (localStorage.getItem(STORAGE_KEY_WATCH)) {
        arrSevedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
        const indexFilm = arrSevedFilms.findIndex(film => film.id === buttonEl.dataset.id);        
        if (indexFilm < 0) {            
            Notiflix.Notify.failure('There is no such film in WATCH');
            return;
        }
        arrSevedFilms.splice(indexFilm, 1); 
        localStorage.setItem(STORAGE_KEY_WATCH,JSON.stringify(arrSevedFilms));
    }
} 

const deleteFilmInQueue = (event) => {
    let arrSevedFilms = [];
    const buttonEl = event.currentTarget;
    if (localStorage.getItem(STORAGE_KEY_QUEUE)) {
        arrSevedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
        const indexFilm = arrSevedFilms.findIndex(film => film.id === buttonEl.dataset.id);        
        if (indexFilm < 0) {
            Notiflix.Notify.failure('There is no such film in QUEUE');
            return;
        }
        arrSevedFilms.splice(indexFilm, 1); 
        localStorage.setItem(STORAGE_KEY_QUEUE,JSON.stringify(arrSevedFilms));
    }
} 

export { saveLocalStorageWatch, saveLocalStorageQueue, deleteFilmInWatch, deleteFilmInQueue, renderFilmWatch,renderFilmQueue, renderFilmLibrary};