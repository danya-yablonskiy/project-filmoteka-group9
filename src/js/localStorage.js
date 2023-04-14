
const STORAGE_KEY_WATCH = 'save-watch';
const STORAGE_KEY_QUEUE = 'save-queue';




export const saveLocalStorageWatch = (event) => {
    const buttonEl = event.currentTarget;
    let arrFilmsWatch = [];
    const film = {
        id: buttonEl.dataset.id,
        title: buttonEl.dataset.title,
        genre: buttonEl.dataset.genre,
        poster: buttonEl.dataset.poster,
        release:buttonEl.dataset.release,
    };
    console.log(film)
    if (localStorage.getItem(STORAGE_KEY_WATCH)) {
        arrFilmsWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
        if (arrFilmsWatch.find(filmWatch => filmWatch.id === film.id)) {            
            console.log('Вже є такий фільм у Watch')
            return;
        }
        arrFilmsWatch.push(film);
        localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilmsWatch));
        return;
    }
    arrFilmsWatch.push(film);
    localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilmsWatch));
};

export const saveLocalStorageQueue = (event) => {
    const buttonEl = event.currentTarget;
    let arrFilmQueue = [];
    const film = {
        id: buttonEl.dataset.id,
        title: buttonEl.dataset.title,
        genre: buttonEl.dataset.genre,
        poster: buttonEl.dataset.poster,
        release:buttonEl.dataset.release,
    };
    console.log(film)
    if (localStorage.getItem(STORAGE_KEY_QUEUE)) {
        arrFilmQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
        if (arrFilmQueue.find(filmQueue => filmQueue.id === film.id)) {            
            console.log('Вже є такий фільм у Queue')
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
    const savedWatchFilm = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));
    const renderFilms = savedWatchFilm.map(film => `
    
    `)
}



