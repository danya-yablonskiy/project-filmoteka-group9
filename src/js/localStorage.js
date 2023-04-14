import fetchPopularMovies from "./fetchPopularMovies";
const STORAGE_KEY_WATCH = 'save-watch';
const STORAGE_KEY_QUEUE = 'save-queue';

let arrFilmQueue = [];


export const saveLocalStorageWatch = (film) => {
   let arrFilmsWatch = [];
    if (arrFilmsWatch.find(films => films.id === film.id)) {
        console.log('Однаковий id');
        return;
    }
    
    arrFilmsWatch.push(film);
    console.log(arrFilmsWatch);
    // localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilmsWatch));
};

export const saveLocalStorageQueue = (film) => {
    if (arrFilmQueue.find(films => films.id === film.id)) {
        console.log('Однаковий id');
        return;
    }
    arrFilmQueue.push(film);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(arrFilmQueue));
};

const renderFilmWatch = () => {
    //почистити контейнер
    const savedWatchFilm = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
    const renderFilms = savedWatchFilm.map(film => `
    
    `)
}

