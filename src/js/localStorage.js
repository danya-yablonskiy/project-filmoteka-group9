import Notiflix from "notiflix";
import { refs } from "..";
import { appendMarkup } from "./renderMarkupCards";
export const STORAGE_KEY_WATCH = 'save-watch';
export const STORAGE_KEY_QUEUE = 'save-queue';
Notiflix.Notify.init({ zindex: 9999, });

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
    
    if (localStorage.getItem(STORAGE_KEY_WATCH)) {
        arrFilmsWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
        if (arrFilmsWatch.find(filmWatch => filmWatch.id === film.id)) {             
            deleteFilmInWatch(buttonEl.dataset.id);
            return;
        }
        arrFilmsWatch.push(film);
        localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilmsWatch));
        Notiflix.Notify.success('Movie is saved to Watch')
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
            deleteFilmInQueue(buttonEl.dataset.id);
            return;
        }
        arrFilmQueue.push(film);
        localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(arrFilmQueue));
        Notiflix.Notify.success('Movie is saved to Queue');
        return;
    }
    arrFilmQueue.push(film);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(arrFilmQueue));
};

const renderFilmWatch = () => { 
    refs.watchBtn.classList.add('btn-current');
    refs.queueBtn.classList.remove('btn-current');
    refs.filmCardsContainer.innerHTML = '';   
    const savedFilmWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
    const lengtharrWatch = savedFilmWatch.length;
    if (lengtharrWatch > 0) {          
        appendMarkup(savedFilmWatch);
        return;
    }
    Notiflix.Notify.failure('Not Found saved Watch');
};

const renderFilmQueue = () => { 
    refs.watchBtn.classList.remove('btn-current');
    refs.queueBtn.classList.add('btn-current');
    refs.filmCardsContainer.innerHTML = ''; 
    const savedFilmQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
    const lengtharrQueue = savedFilmQueue.length;
    if (lengtharrQueue.length > 0) {        
        appendMarkup(lengtharrQueue);
        return;
    }
    Notiflix.Notify.failure('Not Found saved Queue');
};

const renderFilmLibrary = () => {
    refs.watchBtn.classList.remove('btn-current');
    refs.queueBtn.classList.remove('btn-current');
    refs.filmCardsContainer.innerHTML = ''; 
    let allFilms = [];
    const savedFilmWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
    const savedFilmQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
    const lengtharrWatch = savedFilmWatch.length;
    const lengtharrQueue = savedFilmQueue.length;    
    if (lengtharrWatch > 0 && lengtharrQueue > 0) {        
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
    if (lengtharrWatch < 1) {        
        if (lengtharrQueue < 1) {            
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
    if (localStorage.getItem(STORAGE_KEY_WATCH)) {
        arrSevedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
        const indexFilm = arrSevedFilms.findIndex(film => film.id === event);    
        
        arrSevedFilms.splice(indexFilm, 1); 
        localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrSevedFilms));
        Notiflix.Notify.info('Movie has been deleted from Watch')
    }
} 

const deleteFilmInQueue = (event) => {
    let arrSevedFilms = [];
    
    if (localStorage.getItem(STORAGE_KEY_QUEUE)) {
        arrSevedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
        const indexFilm = arrSevedFilms.findIndex(film => film.id === event);         
        arrSevedFilms.splice(indexFilm, 1); 
        localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(arrSevedFilms));
        Notiflix.Notify.info('Movie has been deleted from Queue')
    }
} 

export { saveLocalStorageWatch, saveLocalStorageQueue, deleteFilmInWatch, deleteFilmInQueue, renderFilmWatch,renderFilmQueue, renderFilmLibrary};