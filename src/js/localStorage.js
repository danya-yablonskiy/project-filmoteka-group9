import Notiflix from "notiflix";
const STORAGE_KEY_WATCH = 'save-watch';
const STORAGE_KEY_QUEUE = 'save-queue';

//Вставити у модалку
//import { saveLocalStorageWatch } from "./js/localStorage";
//import { saveLocalStorageQueue } from "./js/localStorage";

// button1.addEventListener('click', saveLocalStorageWatch);
// button2.addEventListener('click', saveLocalStorageQueue);



const saveLocalStorageWatch = (event) => {
    const buttonEl = event.currentTarget;
    let arrFilmsWatch = [];
    const film = {
        id: buttonEl.dataset.id,
        title: buttonEl.dataset.title,
        genre: buttonEl.dataset.genre,
        poster: buttonEl.dataset.poster,
        release:buttonEl.dataset.release,
    };
    // console.log(film)
    if (localStorage.getItem(STORAGE_KEY_WATCH)) {
        arrFilmsWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
        if (arrFilmsWatch.find(filmWatch => filmWatch.id === film.id)) {             
            Notiflix.Notify.failure('Вже є такий фільм у Watch')
            return;
        }
        arrFilmsWatch.push(film);
        localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilmsWatch));
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
        genre: buttonEl.dataset.genre,
        poster: buttonEl.dataset.poster,
        release:buttonEl.dataset.release,
    };
    // console.log(film)
    if (localStorage.getItem(STORAGE_KEY_QUEUE)) {
        arrFilmQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
        if (arrFilmQueue.find(filmQueue => filmQueue.id === film.id)) {             
            Notiflix.Notify.failure('Вже є такий фільм у Queue')
            return;
        }
        arrFilmQueue.push(film);
        localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(arrFilmQueue));
        return;
    }
    arrFilmQueue.push(film);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(arrFilmQueue));
};

export const renderFilmWatch = () => {
    //почистити контейнер
    // container.innerHTML = '';
    //
    const savedWatchFilm = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
    const renderFilms = savedWatchFilm.map(film => console.log(film));
}
    
const deleteFilmInWatch = (event) => {
    let arrSevedFilms = [];
    const buttonEl = event.currentTarget;
    if (localStorage.getItem(STORAGE_KEY_WATCH)) {
        arrSevedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
        const indexFilm = arrSevedFilms.findIndex(film => film.id === buttonEl.dataset.id);        
        if (indexFilm < 0) {
            Notiflix.Notify.failure('Такого фільма немає у Watch');
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
            Notiflix.Notify.failure('Такого фільма немає у Queue');
            return;
        }
        arrSevedFilms.splice(indexFilm, 1); 
        localStorage.setItem(STORAGE_KEY_QUEUE,JSON.stringify(arrSevedFilms));
    }
} 

export { saveLocalStorageWatch, saveLocalStorageQueue, deleteFilmInWatch, deleteFilmInQueue };