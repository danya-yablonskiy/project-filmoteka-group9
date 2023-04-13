const STORAGE_KEY_WATCH = 'save-watch';
const STORAGE_KEY_QUEUE = 'save-queue';
let arrFilmsWatch = [];
let arrFilmQueue = [];


export const saveLocalStorageWatch = (film) => {
   
    if (arrFilmsWatch.find(films => films.id === film.id)) {
        console.log('Однаковий id');
        return;
    }
    arrFilmsWatch.push(film);
    localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilmsWatch));
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
    const savedWatchFilm = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCH));

}

//${BASE_URL}/search/${media_type}?api_key=0b0c22042155193a7073ae89a4562c2a&language=en-US&query=${name}