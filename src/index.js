import { saveLocalStorageWatch, saveLocalStorageQueue, deleteFilmInWatch, deleteFilmInQueue } from "./js/localStorage";

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');

btn1.addEventListener('click', saveLocalStorageQueue);
btn2.addEventListener('click', saveLocalStorageQueue);
btn3.addEventListener('click', saveLocalStorageQueue);
btn4.addEventListener('click', deleteFilmInQueue);
btn5.addEventListener('click', deleteFilmInQueue);
btn6.addEventListener('click', deleteFilmInQueue);