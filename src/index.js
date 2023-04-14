import fetchPopularMovies from "./js/fetchPopularMovies";
import { saveLocalStorageWatch } from "./js/localStorage";
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');


fetchPopularMovies(1).then(response => {
    const filmOne = response.results[0];
    const filmTwo = response.results[1];
    const filmThree = response.results[2];
    console.log(filmOne);

    button1.addEventListener('click', saveLocalStorageWatch(filmOne));
    button2.addEventListener('click', saveLocalStorageWatch(filmTwo));
    button3.addEventListener('click', saveLocalStorageWatch(filmThree));
});