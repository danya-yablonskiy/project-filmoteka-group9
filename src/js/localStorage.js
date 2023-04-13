const STORAGE_KEY_WATCH ='save-watch';
let arrFilms = [];

export const saveLocalStorageWatch = (film) => {
   
    if (arrFilms.find(films=> films.id === film.id)) {
        console.log('Однаковий id');
        return;
    }
    arrFilms.push(film);
    localStorage.setItem(STORAGE_KEY_WATCH, JSON.stringify(arrFilms));
}
